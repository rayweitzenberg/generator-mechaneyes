#  Web app generator for UNIQLO USA frontend projects

  

>  [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [gulp](http://gulpjs.com/) for the build process

  

>  This generator is an extension from the [Web app generator](https://github.com/yeoman/generator-webapp)

  

<!-- ![](nyc.jpg) -->

![](https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)

  

---

  
  

##  Features

  

Please see our [gulpfile](app/templates/gulpfile.js) for up to date information on what we support.

  

*  enable [ES2015 features](https://babeljs.io/docs/learn-es2015/) using [Babel](https://babeljs.io)

*  CSS Autoprefixing

*  Built-in preview server with BrowserSync

*  Automagically compile Sass with [libsass](http://libsass.org)

*  Automagically lint your scripts

*  Map compiled CSS to source stylesheets with source maps

  

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*

  
  
  

<!-- ## Getting Started

  

Install Yeoman:

```sh

npm install -g yo

```

  

Install the UQUSDC generator:

```sh

npm install generator-uqusdc

```

  

Change to your working directory and run:

```sh

yo uqusdc

```

  

Run `gulp serve` to preview and watch for changes

  

Run `gulp inject` to package your code for sending to Business Manager -->

  
  

##  Getting Started

  

-  Install: `npm install --global yo gulp-cli generator-uqusdc`

-  Run `yo uqusdc` to scaffold your webapp

-  Run `npm start` to preview and watch for changes

-  Run `npm start -- --port=8080` to preview and watch for changes in port `8080`

-  Run `npm install --save <package>` to install dependencies, frontend included

-  Run `npm run serve:test` to run the tests in the browser

-  Run `npm run serve:test -- --port=8085` to run the tests in the browser in port `8085`

-  Run `npm run build` to build your webapp for production

-  Run `npm run serve:dist` to preview the production build

-  Run `npm run serve:dist -- --port=5000` to preview the production build in port `5000`

  
  

##  Using Gulp Inject

  

In order to assemble the code your working on, edit your SASS files as usual, and put all of your working HTML in the `originalHTML.html` file. jQuery `load()` injects content from originalHTML.html into index.html for rendering in the browser. This keeps that HTML clean and portable.

  

Running `gulp inject` will collate data from `originalHTML.html` and `.tmp/styles/main.css`, and will output that data to `target.html`. From there it's easy to copy and paste into content assets or slot configs in Business Manager.

  

Backstory: Saving your SASS files will automatically put rendered CSS in the `.tmp/styles/main.css` file for displaying in the browser. The source map in this file is unruly, so the `gulp inject` function strips it out before it's sent to target.html.



##  A Note About index.html

Note the `<div id="holder">`  elements below.

The uncommented HTML element structure is setup to present your content with a *sidebar*.

The commented out version directly below will display your content *full width*.

With the sidebar version, your content is injected into the container wrapped in the same HTML element structure used when displaying on a uniqlo.com page that has a sidebar. This structure matches the site so your styling isn't busted once your content is inserted into the CMS.

```
<div id="main">
	<div id="main" class="primary-content">
		<div class="product-grid-slider">
			<div class="content-second-slot category-banner-slot">
				<div id="holder">UNIQLO Content *With Sidebar* Here</div>
			</div>
		</div>
	</div>
</div>

<!-- <div id="holder">UNIQLO Full Width Content Here</div> -->
```

  
  

<!-- ## Docs

  

* [getting started](docs/README.md) with this generator

* [recipes](docs/recipes/README.md) for integrating other popular technologies like CoffeeScript -->

  

##  License

  

[BSD license](http://opensource.org/licenses/bsd-license.php)