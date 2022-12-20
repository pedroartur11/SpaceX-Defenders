function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {background(imagemEspaco);
  mostraNave();
  movimentaNave();
  moverLaser();
  desenharLaser();
  criaMissil();
  moverMissil();
  colisaoTiroMissil();
  verificaColisaoNave();
  mostraPontos();
  mostraVida();
  gameover();
  venceu();              
                }



