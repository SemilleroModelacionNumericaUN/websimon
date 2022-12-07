# website Semillero de Investigación en MOdelación Numérica - SIMON

En este repositorio se encuentra el código fuente (y compilado) de la página web del semillero de investigacion en modelación numérica - SIMON de la Universidad Nacional de Colombia, sede Bogotá.

## Visitar el sitio web

Para ir directamente a la página, dirigirse al siguiente [enlace](https://simon-un.github.io/webpage/).

## Colaborar en el desarrollo del sitio web

Este sitio web se construyó como una app, utilizando [Svelte](https://svelte.dev). Si desea colaborar con el desarrollo de nuevos componentes, corrección de errores, actualización de contenidos, etc., debe hacer una copia de este repositorio (fork) en su cuenta de Github. Luego clonar el repositorio para tener una copia local en su PC. 

Una vez tenga una copia local del repositorio en su PC, tener en cuenta lo siguiente.

### Antes de comenzar el desarrollo

Instalar dependencias

```bash
cd websimon
npm install
```

### Comenzar servidor de desarrollo

Lanzar [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navegar a [localhost:5000](http://localhost:5000). Usted debería ver la página del semillero corriendo desde un servidor local. Esta página se actualiza automáticamente cuando modifique los archivos fuente de los componentes, en la carpeta `src`.

### Compilar y correr la página para producción o publicación

Usted puede generar una versión optimizada de la página con:

```bash
npm run build
```

Y puede lanzar nuevamente un servidor local para ver la versión compilada con:

```bash
npm run start
```

### Compilar para publicar la página (deploy)

Cuando la página está lista para sacar al público se debe correr el siguiente comando:

```bash
npm run deploy
```
