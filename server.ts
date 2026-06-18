import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const isProd = process.env.NODE_ENV === 'production';

async function startServer() {
  let vite: any;
  if (!isProd) {
    const { createServer } = await import('vite');
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist'), { index: false }));
  }

  app.get('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      let template: string;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8');
      }

      // Dynamic Meta Tags Replacement
      let title = "Plataforma de Inglés";
      let description = "Accede a tu cuenta de estudiante para continuar con tu aprendizaje.";

      if (req.query.evaluacion || url.includes('evaluacion=')) {
        title = "Evaluación Virtual de Inglés";
        description = "Accede a tu evaluación estructurada. Completa el cuestionario y revisa tus resultados.";
      } else if (req.query.studentId || url.includes('studentId=')) {
        title = "Acceso de Estudiante - Maven English";
        description = "Ingresa a tu portal de estudiante para revisar tu progreso y lecciones.";
      }

      // Replace in HTML
      const html = template
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (vite) {
        vite.ssrFixStacktrace(e);
      }
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
