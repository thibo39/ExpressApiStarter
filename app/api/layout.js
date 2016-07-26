'use strict';

var express = require('express');
var routes = require('./../routes');
var each = require('lodash').each;
var render = require('mithril-node-render');

var app = express();

function base(options) {
  return [
    '<!doctype html>',
    '<html>',
      '<head>',
        '<title>' + options.meta_title + '</title>',
        '<meta name="description" content="' + options.meta_description + '"/>',
        '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">',
        '<script src="/js/vendor/head.min.js"></script>',
        '<script>',
          'head.js(',
            'head.load("/js/index.js", function () {',
              'console.log("All JS files loaded")',
            '})',
          ');',
        '</script>',
        '<link rel="stylesheet" href="/css/main.css"/>',
      '</head>',
      '<body>',
        options.content,
      '</body>',
    '</html>'
  ].join('');
}

each(routes, function(module, route) {
  app.get(route, function(req, res, next) {
    res.type('html');

    function send(scope) {
      var options = {
        content: render(module.view(scope)),
        meta_title: scope.meta_title || '',
        meta_description: scope.meta_description || ''
      };
      res.end(base(options));
      scope && scope.onunload && scope.onunload();
    }

    if (module.controller.length < 2) { //sync, response imedeatly
      return send(module.controller(req.params));
    }
    // async, call with callback
    return module.controller(req.params, function(err, scope) {
      if (err) {
        return next(err);
      }
      send(scope);
    });
  });
});

module.exports = app;
