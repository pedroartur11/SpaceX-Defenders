let imagemEspaco;
let imagemNave;
let imagemMissil;
let somTiro;
let GameOver;
let youWin;
let trilha;

function preload(){
  imagemEspaco = loadImage("imagens/espaco.jpg")
  imagemNave = loadImage("imagens/nave.png")
  imagemMissil = loadImage("imagens/missil1.png")
  imagemMisseis = [imagemMissil, imagemMissil, imagemMissil, imagemMissil, imagemMissil]
  somTiro = loadSound("imagens/tiro.mp3")
  GameOver = loadImage("imagens/gameover.jpg")
  youWin = loadImage("imagens/venceu.jpg")
  trilha = loadSound("imagens/trilha.mp3")
}