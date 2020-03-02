# Web app generator for UNIQLO USA frontend projects

> [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [gulp](http://gulpjs.com/) for the build process

> This generator is an extension from the [Web app generator](https://github.com/yeoman/generator-webapp)

---

## This Generator's Purpose in Life
The main reason for extending into this generator is for packaging up JS+HTML+CSS to be deployed in some of our projects. Due to the build process we use, behavior+structure+presentation needs to be assembled in the way this generator does before being deployed.

The generator takes the relevant code and cleanly dumps it into a place we can easily pull from. It sidesteps all the typical markup in an HTML page, and just grabs the relevant content.

It pulls from `originalHtml.html` as well as `.tmp/styles/main.css` and dumps this into `assembled.html`. You're left with one clean and portable file to use.

To be clear about that `main.css` file, it's updated by the generator simply for use in the local development process. It's `app/styles/**` that you'll typically be editing.



## Features

Please see our [gulpfile](app/templates/gulpfile.js) for up to date information on what we support.

- enable [ES2015 features](https://babeljs.io/docs/learn-es2015/) using [Babel](https://babeljs.io)

* CSS Autoprefixing

- Built-in preview server with BrowserSync

* Automagically compile Sass with [libsass](http://libsass.org)

- Automagically lint your scripts

- Map compiled CSS to source stylesheets with source maps

- [slick](https://kenwheeler.github.io/slick/) is included via CDN

- [fancyBox 2.1.7](https://fancyapps.com/fancybox/) is included via CDN

_For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`._



## Getting Started

- Install: `npm install --global yo gulp-cli generator-uqusdc`

* Run `yo uqusdc` to scaffold your webapp

- Run `npm start` to preview and watch for changes

* Run `npm start -- --port=8080` to preview and watch for changes in port `8080`

- Run `npm install --save <package>` to install dependencies, frontend included

- Run `npm run build` to build your webapp for production

* Run `npm run serve:dist` to preview the production build

- Run `npm run serve:dist -- --port=5000` to preview the production build in port `5000`



## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
