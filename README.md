# split-text

Split text given a maximum width and a CanvasRenderingContext2D

# usage

``` js
var canvas = canvas.createElement('canvas');
var cx = canvas.getContext('2d');
var fontSize = 10;
var width = 40;
var text = 'Split This Text, Please';
var y = 20;
var padding = 2;
var renderText = function (t, i) {
  var yi = y + (i * fontSize) + padding;
  cx.fillText(t, x, yi, width);
};

cx.font = fontSize + 'px sans-serif';
splitText(text, width, cx).forEach(renderText);
