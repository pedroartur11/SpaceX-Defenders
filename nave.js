let pontos = 0;
let xNave = 300;
let yNave = 350;

posicoesLaser = []

function mostraNave(){
  image(imagemNave, xNave, yNave, 40, 40)
}

function movimentaNave(){
  if (keyIsDown(UP_ARROW)){
    if (yNave > 287) 
      yNave -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yNave < 366)
      yNave += 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(xNave < 552)
      xNave += 5
  }
  if (keyIsDown(LEFT_ARROW)){
    if(xNave > 0)  
      xNave -= 5
  }
} 
function keyPressed(){
  if (keyIsDown(32)) 
   posicoesLaser.push(createVector(xNave + 19, yNave))
  if (keyIsDown(32))
    somTiro.play();
}

function desenharLaser(){
  for(let posicao of posicoesLaser){
    rect(posicao.x, posicao.y, 4, 10)
   
 }
}

function moverLaser(){
  for(let posicao of posicoesLaser){
    posicao.y -= 10
    
  }
}

function mostraPontos(){
  text(pontos, 560 ,27)
  textSize(25)
  fill(255)
}

function venceu(){
  if (pontos === 40){
    image(youWin,0,0,600,400)
  }
}