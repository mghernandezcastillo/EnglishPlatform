# 🗺️ TEENS STUDIO: ESTADO DE IMPLEMENTACIÓN Y COLA DE AVATARES 3D

Este documento es la fuente de verdad persistente sobre el estado de estandarización y la cola de generación de avatares 3D con fondo transparente (U2-Net Rembg).

---

## 📊 1. TABLA DE ESTADO POR NIVEL

| Nivel | ID | Clases | Estado de Gramática & Fórmulas LEGO | Estado de Avatares 3D Contextuales |
| :--- | :--- | :---: | :---: | :---: |
| **Level 0 (Basic Zero)** | `teens-basic-zero` | 16 | ✅ 100% Estandarizado (Slide 4 y Slide 5) | 10 Generados (Clase 1) / 150 en Cola de Prompt |
| **Level 1 (Basic 1)** | `teens-basic-1` | 10 | ✅ 100% Estandarizado (Slide 4 y Slide 5) | 100 en Cola de Prompt (`tab.avatarPrompt`) |
| **Level 2 (Basic 2)** | `teens-basic-2` | 10 | ✅ 100% Estandarizado (Slide 4 y Slide 5) | 100 en Cola de Prompt (`tab.avatarPrompt`) |
| **Level 3 (Basic 3)** | `teens-basic-3` | 10 | ✅ 100% Estandarizado (Slide 4 y Slide 5) | 100 en Cola de Prompt (`tab.avatarPrompt`) |
| **Level 4 (Basic 4)** | `teens-basic-4` | 10 | ✅ 100% Estandarizado (Slide 4 y Slide 5) | 100 en Cola de Prompt (`tab.avatarPrompt`) |
| **Level 5, 6, 7 (Intermediate)** | `teens-inter` | 12 | ⏳ Pendiente | ⏳ Pendiente |
| **Level 8 (Advanced)** | `teens-advanced` | 10 | ⏳ Pendiente | ⏳ Pendiente |
| **Level 9 (Elite)** | `teens-elite` | 11 | ⏳ Pendiente | ⏳ Pendiente |
| **Level 10 (Masters)** | `teens-masters` | 10 | ⏳ Pendiente | ⏳ Pendiente |

---

## 🎨 2. PROTOCOLO OBLIGATORIO DE GENERACIÓN Y RECORTE

1. **Prompt Contextual 1:1**:
   - Se genera a partir de la oración modelo de cada paso en `src/data/curriculumTeensStudio.ts` (`tab.avatarPrompt`).
   - Formato: `"3D Pixar Disney style animated teen character [acción y elementos de la oración], isolated on pure solid flat white background, no background bokeh, no particles, clean 3D character render"`.
2. **Procesamiento Neuronal con Rembg U2-Net**:
   - Se ejecuta el script: `python scripts/generate_teens_avatars_batch.py`
   - El script realiza el recorte neuronal automático de canal alpha, aplica `bbox = cutout.getbbox()` y auto-crop de márgenes transparentes.
   - Guarda en `public/images/avatars-3d/*.webp` (< 100 KB).
3. **Cero Filtros CSS Artificiales**:
   - `SlideRenderer.tsx` no utiliza `blur-3xl` ni resplandores borrosos para evitar halos manchados.

---

## 🛠️ 3. SCRIPT EJECUTABLE DE GENERACIÓN EN LOTE
- Archivo: [`scripts/generate_teens_avatars_batch.py`](file:///c:/Users/mgher/Documents/PROYECTOS%20PROGRAMACION/maven-english/scripts/generate_teens_avatars_batch.py)
