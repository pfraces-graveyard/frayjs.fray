'use strict';

var parser = require('../dist/parser');
var compiler = require('../dist/compiler/compile');

var stdout = function (output) {
  process.stdout.write(output + '\n');
};

var stdin = function (callback) {
  var data = '';
  process.stdin.setEncoding('utf-8');

  process.stdin.on('readable', function () {
    var chunk;

    while (chunk = process.stdin.read()) {
      data += chunk;
    }
  });

  process.stdin.on('end', function () {
    callback(data);
  });
};

var compile = function (expr) {
  stdout(compiler(parser.parse(expr)));
};

if (!process.stdin.isTTY) {
  stdin(compile);
  return;
}

// TODO: parse args with minimist

