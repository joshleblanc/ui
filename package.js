Package.describe({
  name: 'cereal:ui',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Common UI elements',
  description: "Common UI elements",
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.9.2');
  api.use('ecmascript@0.14.3');
  api.use('typescript@3.7.6');
  api.use('react-meteor-data@2.1.0')
  api.mainModule('ui.js');
  api.addAssets("public/resources/background-colored.jpg", "client")
});


Npm.depends({
  "@babel/core": "7.4.3",
  "@babel/plugin-proposal-decorators": "7.8.3"
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ui');
  api.mainModule('ui-tests.js');
});
