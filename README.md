# InitGrammers Web


**Fecha:** 27 de noviembre de 2020

**Empresa:** [InitGrammers](https://initgrammers.com)

**Editor:** Cristian Ronda
## Colaboradores
**Diseñadora:** 
- Andrea Jurado

**Desarrolladores:**

 - Cristian Ronda 
 - Oscar España

## Tabla de contenidos

- [InitGrammers Web](#initgrammers-web)
  - [Colaboradores](#colaboradores)
  - [Tabla de contenidos](#tabla-de-contenidos)
- [Introducción](#introducción)
  - [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Distribución de archivos](#distribución-de-archivos)
  - [Detalle de directorios](#detalle-de-directorios)
- [Contenido](#contenido)
- [Entregables](#entregables)

# Introducción

El proyecto contiene la página web de Initgrammers.


## Tecnologías

Utiliza las siguientes tecnologías y librerías para el front-end:

- React JS
- Next JS
- Material UI

# Instalación

1. Descarga el código fuente desde GitHub (previo permiso por el desarrollador), o sino con el siguiente comando:

   ```
   git@github.com:initgrammers/web-page.git
   ```

2. Descarga e instala `nodeJS` en tu computador, lo puedes [descargar su página oficial para Windows ó Mac](https://nodejs.org/es/download/)
3. [Descarga VSCode](https://code.visualstudio.com/download) para visualizar el código fuente y correr el proyecto
4. Ejecuta VSCode, presiona `Ctrl + O` ó `Command + O` para seleccionar el directorio del proyecto
5. Una vez seleccionado el proyecto presiona `Ctrl + J` ó `Command + J`, esto abrirá una terminal en la parte inferior de la pantalla
6. Nos posicionamos en la terminal e ingresamos el siguiente comando y esperamos a que termine
   ```
   npm install o yarn
   ```
7. Una vez termine el comando anterior ejecutamos el siguiente comando:
   ```
   npm run dev o yarn dev
   ```
8. Abrimos nuestro navegador prefereido (recomendación abrir Chrome) y vamos a la siguiente dirección [http://localhost:3000](http://localhost:3000)


# Distribución de archivos

La distuibución de archivos del código fuente se detallan a continuación.

```txt
|-- README.md
|-- jsconfig.json
|-- package.json
|-- pages
|   |-- _app.jsx
|   |-- _document.jsx
|   |-- index.jsx
|   `-- services
|       |-- MobileDevelopment.jsx
|       |-- UXUIDesign.jsx
|       `-- WebDevelopment.jsx
|-- public
|   |-- assets
|   |   |-- images
|   |   |-- svg  
|   `-- fonts
|       `-- Raleway
|           |-- Raleway-Bold.woff2
|           |-- Raleway-Medium.woff2
|           |-- Raleway-Regular.woff2
|           |-- Raleway-SemiBold.woff2
|           `-- fonts.css
|-- src
|   |-- assets
|   |   |-- css
|   |   |   `-- globals.css
|   |   |-- icons
|   |   |   `-- index.jsx
|   |   `-- styles
|   |       |-- ApplicationType.js
|   |       |-- BackgroundImage.js
|   |       |-- CallToActionType.js
|   |       |-- CustomContainer.js
|   |       |-- FAQ.js
|   |       |-- Menu.js
|   |       `-- SectionApplicationTypes.js
|   |-- components
|   |   |-- Accordion.jsx
|   |   |-- ApplicationType.jsx
|   |   |-- BackgroundImage.jsx
|   |   |-- CallToActionSection.jsx
|   |   |-- CardPartnership.jsx
|   |   |-- CardService.jsx
|   |   |-- CustomContainer.jsx
|   |   |-- CustomLink.jsx
|   |   |-- DevelopmentDesign.jsx
|   |   |-- FAQ.jsx
|   |   |-- IncreaseVisibility.jsx
|   |   |-- Menu
|   |   |   |-- CustomDrawer.jsx
|   |   |   |-- Index.jsx
|   |   |   |-- MenuDesktop.jsx
|   |   |   `-- Options.jsx
|   |   |-- Outsider
|   |   |   `-- index.jsx
|   |   |-- ResponsiveSlider
|   |   |   |-- Container.jsx
|   |   |   |-- Image.jsx
|   |   |   |-- Slide.jsx
|   |   |   `-- index.jsx
|   |   |-- SEO
|   |   |   `-- index.jsx
|   |   |-- SectionApplicationTypes.jsx
|   |   |-- SliderTechnologies.jsx
|   |   |-- Subtitle
|   |   |   |-- index.jsx
|   |   |   `-- styles.js
|   |   `-- Upgrade.jsx
|   |-- constants
|   |   |-- LandingPage.js
|   |   |-- Menu.js
|   |   `-- services
|   |       |-- MobileDevelopment.js
|   |       `-- webDevelopment.js
|   |-- layouts
|   |   |-- AppBar
|   |   |   |-- CustomDrawer.jsx
|   |   |   `-- index.jsx
|   |   |-- _Footer
|   |   |   |-- ContactUs.jsx
|   |   |   |-- components
|   |   |   |   |-- LinkContactUs.jsx
|   |   |   |   |-- LinkIcon.jsx
|   |   |   |   `-- LinkWithIcon.jsx
|   |   |   |-- index.jsx
|   |   |   `-- styles.js
|   |   `-- index.jsx
|   `-- screens
|       |-- landingPage
|       |   |-- components
|       |   |   |-- Banner.jsx
|       |   |   |-- CarryOutThatProject.jsx
|       |   |   |-- OnlineSolution.jsx
|       |   |   |-- PartnershipModel.jsx
|       |   |   `-- Services.jsx
|       |   |-- index.jsx
|       |   |-- sections
|       |   |   |-- Banner.jsx
|       |   |   |-- PartnershipModel.jsx
|       |   |   `-- Questions.jsx
|       |   `-- styles
|       |       |-- Banner.js
|       |       |-- CarryOutThatProject.js
|       |       |-- OnlineSolution.js
|       |       `-- PartnershipModel.js
|       `-- services
|           |-- mobileDevelopment
|           |   |-- components
|           |   |   |-- Banner.jsx
|           |   |   `-- ImportanceApplications.jsx
|           |   |-- index.jsx
|           |   |-- sections
|           |   |   |-- ApplicationsAtYourFingertips.jsx
|           |   |   |-- MobileApplicationTypes.jsx
|           |   |   |-- Questions.jsx
|           |   |   `-- SliderTech.jsx
|           |   `-- styles
|           |       |-- Banner.js
|           |       `-- ImportanceApplications.js
|           |-- uXUIDesign
|           |   |-- components
|           |   |   |-- Banner.jsx
|           |   |   `-- InnovativeDesign.jsx
|           |   |-- index.jsx
|           |   |-- sections
|           |   |   |-- Questions.jsx
|           |   |   `-- UnforgettableExperiences.jsx
|           |   `-- styles
|           |       |-- Banner.js
|           |       `-- InnovativeDesign.js
|           `-- webDevelopment
|               |-- components
|               |   |-- Banner.jsx
|               |   |-- NeedAnUpdate.jsx
|               |   `-- SectionApplicationTypes.jsx
|               |-- index.jsx
|               |-- sections
|               |   |-- Banner.jsx
|               |   |-- PartOfInternetWorld.jsx
|               |   |-- Questions.jsx
|               |   |-- SliderTech.jsx
|               |   |-- VisibilityCompany.jsx
|               |   `-- WebApplicationTypes.jsx
|               `-- styles
|                   |-- Banner.js
|                   |-- NeedAnUpdate.js
|                   |-- SectionApplicationTypes.js
|                   `-- VisibilityCompany.js
|-- theme
|   |-- colors.js
|   |-- index.js
|   |-- typography.js
|-- trre.txt
```

## Detalle de directorios

- `pages`: contiene el enrutamiento de la aplicacion
- `public` : contiene los recursos publicos de la aplicación
- `src`: contiene el código fuente de la aplicacion dividida en los subdirectorios
  - `assets`: directorios y archivos de estilos, iconos y colores del tema de la aplicación
  - `components`: archivos de UI recurrentes en la aplicación
  - `constans`: continene los textos estáticos de la página
  - `layouts`: código del esqueleto de las páginas del proyecto
  - `screens`: código de estructura de las paginas presentadas


Además contamos con archivos importantes como:

- `package.json`: continene las dependencias del proyecto

# Contenido

Para el 27/11/2020 contamos con las pantallas:
- Landing Page
- Desarrollo móvil 
- Desarrollo web

# Entregables
- [Diseño en Figma](https://www.figma.com/file/18XsYlwJ3hvJa6FF2V3yPv/P%C3%A1gina-Web-InitGrammers)
- [Pagina en Firebase](#)
