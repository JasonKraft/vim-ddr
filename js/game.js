
/////////////////
//PreBoot state//
/////////////////

var PrebootState = {

    preload:function() {
        this.load.image('logo', 'assets/load_screen.png');
        this.load.image('load_bar', 'assets/load_bar.png');
    },
    create:function() {
        this.game.state.backgroundColo = '#fff';

        this.state.start('PreloadState');
    },

}

/////////////////
//Preload state//
/////////////////

var PreloadState = {
    preload: function() {

        this.logo = this.add.sprite(0, 0, 'logo');

        this.loadBar = this.add.sprite(this.game.world.centerX, this.game.world.height - 20, 'load_bar');
        this.load.setPreloadSprite(this.loadBar);

        //load image assets
        game.load.image('arrowUp', 'assets/UpArrow.png');
        game.load.image('arrowDown', 'assets/DownArrow.png');
        game.load.image('arrowLeft', 'assets/LeftArrow.png');
        game.load.image('arrowRight', 'assets/RightArrow.png');
        game.load.image('background', 'assets/Background.png');
        game.load.image('killzone', 'assets/Killzone.png');

        game.load.image('upOutline','assets/UpArrow_outline.png');
        game.load.image('rightOutline','assets/RightArrow_outline.png');
        game.load.image('downOutline','assets/DownArrow_outline.png');
        game.load.image('leftOutline','assets/LeftArrow_outline.png');

        //load audio assets
        game.load.audio('song1', ['assets/harder_better_faster_stronger.mp3', 'assets/harder_better_faster_stronger.ogg']);
    },

    update:function(){
        if (this.cache.isSoundDecoded('song1'))
        {
            this.state.start('GameState');
        }
    }
}

//////////////
//Game State//
//////////////

var GameState = { preload: preload, create: create, update: update };

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('PrebootState', PrebootState);
game.state.add('PreloadState', PreloadState);
game.state.add('GameState', GameState);
game.state.start('PrebootState');

var LeftArrows;
var DownArrows;
var UpArrows;
var RightArrows;
var score = 0;
var scoreText;
var killzone;

var songSpeed = -125;

var song;

function preload() {

    
}

function create() {
    song = game.sound.play('song1');
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0,0,'background');

    killzone = game.add.sprite(0, -65, 'killzone');
    game.physics.arcade.enable(killzone);

    //adding outlines to the canvas
    outlines = game.add.group();
    outlines.enableBody = true;
    leftOutline = outlines.create(150, 15, 'leftOutline');
    leftOutline.scale.setTo(.75,.75);
    downOutline = outlines.create(293, 15, 'downOutline');
    downOutline.scale.setTo(.75,.75);
    upOutline = outlines.create(436, 15, 'upOutline');
    upOutline.scale.setTo(.75,.75);
    rightOutline = outlines.create(581, 15, 'rightOutline');
    rightOutline.scale.setTo(.75,.75);

    //creating respective groups for the different arrows
    LeftArrows = game.add.group();
    LeftArrows.enableBody = true;

    DownArrows = game.add.group();
    DownArrows.enableBody = true;

    UpArrows = game.add.group();
    UpArrows.enableBody = true;

    RightArrows = game.add.group();
    RightArrows.enableBody = true;

    scoreText = game.add.text(10, game.world.height-40, 'Score: 0', { fontSize: '32px', fill: '#e9f6fd', font: '32pt New' });


    //creating key press events for H,J,K,L
    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.H);
    tempKey.onDown.add(HPress);

    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.J);
    tempKey.onDown.add(JPress);

    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.K);
    tempKey.onDown.add(KPress);

    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.L);
    tempKey.onDown.add(LPress);

    //game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
    game.time.events.add(Phaser.Timer.SECOND * 0.25, function(){createArrow('left')}, this);
    game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){createArrow('down')}, this);
    game.time.events.add(Phaser.Timer.SECOND * 0.75, function(){createArrow('up')}, this);
    game.time.events.add(Phaser.Timer.SECOND * 1, function(){createArrow('right')}, this);

}
function HPress(){
    LeftArrows.forEach(function(arrow){
        if(arrow.alive){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
        }
    }, this);
}

function JPress(){
    DownArrows.forEach(function(arrow){
        if(arrow.alive){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
        }
    }, this);
}

function KPress(){
    UpArrows.forEach(function(arrow){
        if(arrow.alive){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
        }
    }, this);
}

function LPress(){
    RightArrows.forEach(function(arrow){
        if(arrow.alive){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
            }
        }
    }, this);
}

function createArrow(direction){
    switch(direction){
        case 'left':
            //creates left arrow
            var newArrow = LeftArrows.create(155, game.world.height+ 32, 'arrowLeft');
            newArrow.scale.setTo(.65,.65);
            newArrow.body.velocity.y = songSpeed;
            break;
        case 'down':
        //creates down arrow
        var newArrow = DownArrows.create(298, game.world.height+ 32, 'arrowDown');
            newArrow.scale.setTo(.65,.65);
            newArrow.body.velocity.y = songSpeed;
            break;
        case 'up':
            //creates up arrow
            var newArrow = UpArrows.create(441, game.world.height+ 32, 'arrowUp');
            newArrow.scale.setTo(.65,.65);
            newArrow.body.velocity.y = songSpeed;
            break;
        case 'right':
            //creates right arrow
            var newArrow = RightArrows.create(586, game.world.height+ 32, 'arrowRight');
            newArrow.scale.setTo(.65,.65);
            newArrow.body.velocity.y = songSpeed;
            break;
    }
}

function update() {
    game.physics.arcade.overlap(killzone, LeftArrows, destroyArrow, null, this);
    game.physics.arcade.overlap(killzone, UpArrows, destroyArrow, null, this);
    game.physics.arcade.overlap(killzone, DownArrows, destroyArrow, null, this);
    game.physics.arcade.overlap(killzone, RightArrows, destroyArrow, null, this);

}

function destroyArrow (killzone, arrow) {
    arrow.destroy();
    score -= 5;
    scoreText.text = 'Score: ' + score;
}