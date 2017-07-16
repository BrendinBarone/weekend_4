console.log('js is sourced');
var myApp = angular.module('myApp', []);

myApp.controller('WorldController', function() {
  var world = this;
  world.title = "Brendin's World";
  world.img = [];
  createImgs();

  world.buttonLike = function(index){
 world.img[index].likes += 1;
};
world.toggleShow = function(index){
 world.img[index].visible = !world.img[index].visible;
 console.log(world.img[index].visible);
};

  function createImgs() {
    world.img[0] = {
      pic: "/images/xmas.jpg",
      desc: "Me and the Little Elf :Bloomington MN",
      visible: true,
      likes: 19,
    };
    world.img[1] = {
      pic: "/images/love.jpg",
      desc: "My lovely girlfriend and me :Minneapolis, MN",
      visible: true,
      likes: 5,
    };
    world.img[2] = {
      pic: "/images/july.jpg",
      desc: "Me and the Little One watching Fireworks on the 4th, 2017: Shakoppee, MN",
      visible: true,
      likes: 3,
    };
    world.img[3] = {
      pic: "/images/aj_brendin_tony.jpg",
      desc: "The Boys: Chilling after Mondo Lucha :Milwaulke, WI",
      visible: true,
      likes: 2,
    };
    world.img[4] = {
      pic: "/images/atwrestling.jpg",
      desc: "A screen shot of a picture of Tony and Me at wrestling :Duluth, MN",
      visible: true,
      likes: 2,
    };
    world.img[5] = {
      pic: "/images/mick_foley.jpg",
      desc: "Meeting the Hardcore Legend, Mick Foley aka Mankind :Duluth, MN",
      visible: true,
      likes: 8,
    };
  }



});
