# Web app generator for UNIQLO USA frontend projects

> [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [gulp](http://gulpjs.com/) for the build process

> This generator is an extension from the [Web app generator](https://github.com/yeoman/generator-webapp) 

![](nyc.jpg)

---


## Features

Please see our [gulpfile](app/templates/gulpfile.js) for up to date information on what we support.

* enable [ES2015 features](https://babeljs.io/docs/learn-es2015/) using [Babel](https://babeljs.io)
* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Automagically compile Sass with [libsass](http://libsass.org)
* Automagically lint your scripts
* Map compiled CSS to source stylesheets with source maps

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*



## Getting Started

Install Yeoman:
```sh
npm install -g yo
```

Install the UQUSDC generator:
```sh
npm install -g generator-uqusdc
```

Change to your working directory and run:
```sh
yo uqusdc
```

Run `gulp serve` to preview and watch for changes

Run `gulp inject` to package your code for sending to Business Manager


## Using Gulp Inject

In order to assemble the code your working on, edit your SASS file(s) as usual, and put all of your working HTML in the `originalHTML.html` file. A bit of jQuery injects content from originalHTML.html into index.html for rendering in the browser. This keeps that HTML clean and portable.

Running `gulp inject` will collate data from `originalHTML.html` and `.tmp/styles/main.css`, and will output that data to `target.html`. From there it's easy to copy and paste into content assets or slot configs in Business Manager.

Backstory: Saving your SASS files will automatically put rendered CSS in the .tmp/styles/main.css file for displaying in the browser. The source map in this file is out of control, so the "gulp inject" function strips it out before it's sent to target.html.



## Legacy Getting Started

Haven't dug into all of these, so I'm not sure what carries over from the original generator.
- ~~Install: `npm install --global yo gulp-cli generator-webapp`~~
- ~~Run `yo webapp` to scaffold your webapp~~
- ~~Run `npm start` to preview and watch for changes~~
- ~~Run `npm start -- --port=8080` to preview and watch for changes in port `8080`~~
- Run `npm install --save <package>` to install dependencies, frontend included
- Run `npm run  serve:test` to run the tests in the browser
- Run `npm run  serve:test -- --port=8085` to run the tests in the browser in port `8085`
- Run `npm run build` to build your webapp for production
- Run `npm run serve:dist` to preview the production build
- Run `npm run serve:dist -- --port=5000` to preview the production build in port `5000`


<!-- ## Docs

* [getting started](docs/README.md) with this generator
* [recipes](docs/recipes/README.md) for integrating other popular technologies like CoffeeScript -->


## Options

- `--skip-welcome-message`
  Skips Yeoman's greeting before displaying options.
- `--skip-install-message`
  Skips the the message displayed after scaffolding has finished and before the dependencies are being installed.
- `--skip-install`
  Doesn't automatically install dependencies after scaffolding has finished.
- `--test-framework=<framework>`
  Either `mocha` or `jasmine`. Defaults to `mocha`.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
