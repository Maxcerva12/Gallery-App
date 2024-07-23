# Gallery-App

Este repositorio contiene una galería de imágenes desarrollada en React con fines educativos. Utiliza la API de Unsplash para obtener imágenes de alta calidad. Siéntete libre de explorar y aprender más sobre cómo funciona esta aplicación.

## Archivos

Este repositorio incluye los siguientes archivos:

1. **Card.css**: Archivo de estilos CSS para la Card de la Img.
2. **App.jsx**: Componente principal de React que maneja la estructura y funcionalidad de la galería.
3. **ImageGallery.jsx**: Componente React que maneja la colección de imágenes y su renderizado de la misma menra tambien define la estructura y funcionalidad de una imagen individual.
4. **Loanding.jsx**: Componente React para mostrar una pantalla de carga.

5. **FormImg.jsx**: Componente React para manejar formularios de imágenes.

6. **react-image-lightbox**: Biblioteca para mostrar imágenes en un lightbox.

## Estructura del Proyecto

- `App.css`: Define los estilos generales de la aplicación, incluyendo propiedades de diseño como `grid`, `flexbox`, y transiciones.
- `App.jsx`: Este archivo contiene el código del componente principal `App`. Maneja el estado de la aplicación y la lógica para interactuar con la API de Unsplash.
- `ImageGallery.jsx`: Este archivo gestiona la colección de imágenes. Renderiza múltiples componentes y aplica estilos y propiedades adicionales según sea necesario, Este archivo contiene el código del componente `Cards2`. Cada tarjeta presenta una imagen y está estilizada según las clases definidas en `App.css`.

- `Loanding.jsx:` Componente para mostrar una pantalla de carga mientras se obtienen las imágenes.

`FormImg.jsx:` Componente para manejar formularios de imágenes, permitiendo a los usuarios buscar y filtrar imágenes.

`react-image-lightbox:` Biblioteca utilizada para mostrar imágenes en un lightbox, mejorando la experiencia de visualización.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nombre-del-repositorio
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

4. Instala react-image-lightbox :

   ```bash
   npm install react-image-lightbox

   ```

5. Configura tu clave de API de Unsplash en la carpeta Hooks/useFetcimages `.js`:

   ```js
   KEY = tu - clave - de - api;
   ```

6. Inicia la aplicación:

   ```bash
   npm start
   ```

## Uso

Una vez que la aplicación esté en ejecución, deberías poder ver la galería de fotos en tu navegador en `http://localhost:3000`. Las imágenes se obtienen de la API de Unsplash y se muestran en un diseño responsivo utilizando Bootstrap.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva característica:

   ```bash
   git checkout -b mi-nueva-caracteristica
   ```

3. Realiza tus cambios y realiza commits de tus cambios:

   ```bash
   git commit -m 'Añadir nueva característica'
   ```

4. Empuja tus cambios al repositorio remoto:

   ```bash
   git push origin mi-nueva-caracteristica
   ```

5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¿Si necesitas ayuda con alguna parte del proyecto? ¡No dudes en contactarme!

- [LinkedIn](www.linkedin.com/in/maximiliano-cervantes-ing)

- [GitHub](https://github.com/Maxcerva12)
