var gato,rato;
var backgroundImg, gatoImg1, ratoImg1, ratoImg2, gatoImg2, gatoImg3, ratoImg3;

function preload() {
    backgroundImg = loadImage("images/garden.png");
    gatoImg1 = loadAnimation("images/cat1.png");
    ratoImg1 = loadAnimation("images/mouse1.png");
    gatoImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    ratoImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    gatoImg3 = loadAnimation("images/cat4.png");
    ratoImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   
}

function draw() {

    background(backgroundImg);
    
   
    drawSprites();

}

function keyPressed(){

    // ESCREVA AQUI O QUE ACONTECE AO PRESSIONAR A SETA ESQUERDA DO TECLADO


}
