var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var adam;
var speed = 6;

demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        // load images
        game.load.image('adam', 'assets/sprites/adam.png');
        game.load.image('street', 'assets/backgrounds/street.jpg');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#80ff80";
        console.log('state0');

        addChangeStateEventListeners();


        // set bounds to help camera follow adam
        game.world.setBounds(0, 0, 1920, 1000);


        // make window responsive
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // add sprite background
        var streetBG = game.add.sprite(0, 0, 'street');


        // add adam
        adam = game.add.sprite(centerX, centerY + 250, 'adam');
        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(0.5, 0.5);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;


        // set camera follow adam
        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);

    },
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            adam.scale.setTo(0.5, 0.5);
            adam.x += speed;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            adam.scale.setTo(-0.5, 0.5);
            adam.x -= speed;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            adam.y -= speed;

            if (adam.y < 654) {
                adam.y = 654;
            }
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            adam.y += speed;
        }
    }
};



function changeState(i, numState) {
    game.state.start('state' + numState);
};


function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};


function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
};
