module.exports = {
  options: {
    'skip-welcome-message': {
      desc: 'Skips the welcome message',
      type: Boolean
    },
    'skip-install-message': {
      desc: 'Skips the message after the installation of dependencies',
      type: Boolean
    }
  },
  prompts: [
    {
      type: 'checkbox',
      name: 'features',
      message: 'Which additional features would you like to include?',
      choices: [
        {
          name: 'Sass',
          value: 'includeSass',
          checked: true
        },
        {
          name: 'Bootstrap',
          value: 'includeBootstrap',
          checked: true
        },
        {
          name: 'Google Analytics',
          value: 'includeAnalytics',
          checked: true
        }
      ]
    },
    {
      type: 'confirm',
      name: 'includeJQuery',
      message: 'Would you like to include jQuery?',
      default: true,
      when: answers => !answers.features.includes('includeBootstrap')
    }
  ],
  dirsToCreate: ['app/images', 'app/fonts'],
  filesToCopy: [
    {
      input: 'babelrc',
      output: '.babelrc'
    },
    {
      input: 'gitignore',
      output: '.gitignore'
    },
    {
      input: 'gitattributes',
      output: '.gitattributes'
    },
    {
      input: 'editorconfig',
      output: '.editorconfig'
    },
    {
      input: 'favicon.ico',
      output: 'app/favicon.ico'
    },
    {
      input: 'apple-touch-icon.png',
      output: 'app/apple-touch-icon.png'
    },
    {
      input: 'robots.txt',
      output: 'app/robots.txt'
    }
  ],
  filesToRender: [
    {
      input: 'gulpfile.js',
      output: 'gulpfile.js'
    },
    {
      input: '_package.json',
      output: 'package.json'
    },
    {
      input: 'main.js',
      output: 'app/scripts/main.js'
    },
    {
      input: 'index.html',
      output: 'app/index.html'
    },
    {
      input: 'originalHtml.html',
      output: 'app/originalHtml.html'
    },
    {
      input: 'target.html',
      output: 'app/target.html'
    }
  ]
};
