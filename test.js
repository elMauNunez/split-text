var test = require('tape');
var splitText = require('./index');

var canvas = document.createElement('canvas');
var cx = canvas.getContext('2d');
var phrase = 'several lines test';
var width = 45;

test('no text test', function(t) {
  var result = splitText('', 45, cx);
  t.plan(1);
  t.equal(result.length, 0);
});

test('one word test', function(t) {
  var result = splitText('word', 45, cx);
  t.plan(2);
  t.equal(result[0], 'word');
  t.equal(result.length, 1);
});

test('several lines test', function(t) {
  var result = splitText(phrase, width, cx);
  t.plan(3);
  t.equal(result.length, 2);
  t.equal(result[0], 'several');
  t.equal(result[1], 'lines test');
});

test('bigger font test', function(t) {
  cx.font = '15px sans-serif';
  var result = splitText(phrase, width, cx);
  t.plan(4);
  t.equal(result.length, 3);
  t.equal(result[0], 'several');
  t.equal(result[1], 'lines');
  t.equal(result[2], 'test');
})
