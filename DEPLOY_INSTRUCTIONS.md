# Guía de Despliegue en GitHub Pages

Como no se detectó Git instalado en tu sistema, aquí tienes los pasos para publicar tu CV manualmente:

## 1. Preparación (Ya realizada)
He renombrado los archivos para que tu versión **Fintech (v3)** sea la principal:
*   `index.html` (Nuevo) -> Es tu versión Fintech v3.
*   `index_v1.html` -> Es tu versión original antigua.
*   `index_v2.html` -> Es la versión AS400.

## 2. Crear Repositorio en GitHub
1.  Ve a [github.com/new](https://github.com/new).
2.  Nombre del repositorio: `cv-fintech` (o el que gustes).
3.  Asegúrate de que sea **Público**.
4.  No marques "Add a README" ni otras opciones.
5.  Haz clic en **Create repository**.

## 3. Subir Archivos
1.  En la pantalla siguiente, busca el enlace que dice **"uploading an existing file"**.
2.  Arrastra **TODOS** los archivos y carpetas de tu carpeta `cv-website-oscar_santacruz` al área de carga en el navegador.
    *   Asegúrate de incluir `assets`, `images`, `index.html`, etc.
3.  Espera a que se carguen todos.
4.  Abajo, en "Commit changes", escribe: "Versión inicial Fintech".
5.  Haz clic en **Commit changes**.

## 4. Activar GitHub Pages
1.  En tu repositorio, ve a la pestaña **Settings** (Configuración).
2.  En el menú lateral izquierdo, busca la sección **Pages**.
3.  En **Source**, selecciona `Deploy from a branch`.
4.  En **Branch**, selecciona `main` (o `master`) y la carpeta `/ (root)`.
5.  Haz clic en **Save**.

¡Listo! En unos minutos, GitHub te mostrará el enlace de tu CV publicado (ej: `https://tu-usuario.github.io/cv-fintech/`).
