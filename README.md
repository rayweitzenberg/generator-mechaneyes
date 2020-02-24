# Web app generator for UNIQLO USA frontend projects

> [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [gulp](http://gulpjs.com/) for the build process

> This generator is an extension from the [Web app generator](https://github.com/yeoman/generator-webapp)

![](https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)

---

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

* Run `npm inject` to assemble your CSS and the contents of originalHtml.html. See below.

- Run `npm run build` to build your webapp for production

* Run `npm run serve:dist` to preview the production build

- Run `npm run serve:dist -- --port=5000` to preview the production build in port `5000`

## Using Gulp Inject

In order to assemble the code your working on, edit your SASS files as usual, and put all of your working HTML in the `originalHTML.html` file. jQuery `load()` injects content from originalHTML.html into index.html for rendering in the browser. This keeps that HTML clean and portable.

Running `gulp inject` will collate data from `originalHTML.html` and `.tmp/styles/main.css`, and will output that data to `target.html`. From there it's easy to copy and paste into content assets or slot configs in Business Manager.

Backstory: Saving your SASS files will automatically put rendered CSS in the `.tmp/styles/main.css` file for displaying in the browser. The source map in this file is unruly, so the `gulp inject` function strips it out before it's sent to target.html.

## A Note About index.html

Note the `<div id="holder">` elements below.

The uncommented HTML element structure is setup to present your content for a _full width_ page.

The commented out version directly below will display your content _with a sidebar_.

Your content is injected into the container wrapped in the same HTML element structure used when displaying on a uniqlo.com page. This structure matches the site so your styling isn't busted once your content is inserted into the CMS.

```
<!-- ————————————————————————————————————o————————————————————————————————————o FULL WIDTH -->
<!-- ————————————————————————————————————o FULL WIDTH -->
<div class="pt_primary">
	<div id="main">
		<div class="primary-content">
			<div id="holder" style="max-width: 1280px; margin: 0 auto">UNIQLO Full Width Content Here</div>
		</div>
	</div>
</div>




<!-- ————————————————————————————————————o————————————————————————————————————o SIDEBARRED -->
<!-- ————————————————————————————————————o SIDEBARRED -->
<!-- <div id="main">
	<div id="main" class="primary-content">
	<div class="product-grid-slider">
		<div class="content-second-slot category-banner-slot">
		<div id="holder">UNIQLO Content *With Sidebar* Here</div>
		</div>
	</div>
	</div>
</div> -->
```

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
