# Agenda Maven

## Activación inicial

1. Abre el proyecto correspondiente en Supabase.
2. En **SQL Editor**, ejecuta completo `supabase/migrations/20260903_agenda_maven.sql`.
3. Abre Maven English y crea la primera cuenta desde **Configuración inicial**. Esa primera cuenta será administradora.
4. Dentro de **Agenda Maven → Profesores**, crea las cuentas de los demás profesores.

Si Agenda Maven ya estaba instalada, ejecuta también
`supabase/migrations/20260903130000_increase_agenda_recurring_limit.sql` para habilitar
series de hasta 1.000 clases en la base de datos.

La conexión Postgres directa local conserva `[YOUR-PASSWORD]`, por lo que la migración no se puede aplicar automáticamente desde este repositorio hasta configurar la contraseña real. No uses la llave `service_role` dentro del cliente.

## Sesiones

Supabase Auth guarda la sesión del personal en el navegador, renueva los tokens y restaura el panel después de refrescar o volver a abrir el navegador. La sesión solo se elimina al pulsar **Cerrar sesión**, al borrar los datos del sitio o cuando la cuenta es invalidada.

## Reglas principales

- Un profesor no puede tener dos clases superpuestas.
- Un estudiante no puede quedar en dos clases superpuestas, aunque sean con profesores diferentes.
- Solo se programan clases dentro de la disponibilidad configurada.
- Un profesor consulta únicamente su agenda, planes y pagos; un administrador puede seleccionar cualquier profesor.
- Los planes y pagos se guardan en Supabase. No existe persistencia exclusiva en `localStorage` para Agenda Maven.
- Para cambiar días o intensidad, cancela la serie futura y crea la nueva recurrencia desde la fecha efectiva.
- Una serie puede contener hasta 1.000 clases; el formulario muestra la cantidad antes de guardar.

## Cálculos

- Mensual: valor acordado por estudiante.
- Quincenal: dos ciclos por mes.
- Por clase: valor × clases semanales × 4,33 semanas.
- El panel separa ingreso esperado, recibido y pendiente.

## Tarjeta compartible

La vista **Compartir** calcula espacios libres a partir de disponibilidad menos reservas. Genera SVG descargable y PNG para el portapapeles, sin nombres ni datos privados de estudiantes.
