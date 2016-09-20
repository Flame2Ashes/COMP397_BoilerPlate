var canvas : HTMLElement;
var stage : createjs.Stage;
var test: createjs.Bitmap;
var width = document.getElementById("canvas").offsetWidth;
var height = document.getElementById("canvas").offsetHeight;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this);
}

function gameLoop(event : createjs.TickerEvent) : void {

    var myNewText : createjs.Text = new createjs.Text("Test", "60px Consolas", "#000000");
    stage.addChild(myNewText);
    test = new createjs.Bitmap("Assets/Test object.png");
    test.x = width * 0.5;
    test.y = height * 0.5;
    test.image.onload = function() {
        stage.update();
    }

    canvas.onclick = function(event) {
        test.x = event.offsetX;
        test.y = event.offsetY;
        stage.addChild(test);
    }
    stage.addChild(test);
    stage.update();
}

