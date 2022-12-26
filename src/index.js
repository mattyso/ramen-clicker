import Phaser from "phaser";

function preload() {
  this.load.image(
    "bug1",
    "https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png"
  );
}

function create() {

}

function update() {

}

const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 500,
  backgroundColor: "b9eaff",
  autoCenter: true,
  parent: "app",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      enableBody: true
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);
