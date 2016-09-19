var canvas;
var stage;
var test;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this);
}
function gameLoop(event) {
    var myNewText = new createjs.Text("Test", "60px Consolas", "#000000");
    stage.addChild(myNewText);
    test = new createjs.Bitmap("Assets/Test object.png");
    test.image.onload = function () {
        stage.update();
    };
    stage.addChild(test);
    stage.update();
}
//# sourceMappingURL=game.js.map