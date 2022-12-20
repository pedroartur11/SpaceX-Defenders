xmisseis = [10, 200, 344, 540, 400]
ymisseis = [-30,-20, -50, -100, 0]
speed = [1, 1.3, 1.9, 1.4, 1.0]
let vida = 0
let colisao = true

function criaMissil(){
  for(let i = 0; i < imagemMisseis.length; i++){
    image(imagemMisseis[i], xmisseis[i], ymisseis[i], 20, 40)
  }
}

function moverMissil(){
  for(let i = 0;i < imagemMisseis.length; i++){
    ymisseis[i] += speed[i]
   if (ymisseis[i] > 450){
     ymisseis[i] = 0
    if (vida > 0){
      vida--
     }
    }
   }
 }

function gameover(){
  if(vida == 0){
    image(GameOver,-100,0)
  }  
}

function verificaColisaoNave(){
  for(let i = 0;i < imagemMisseis.length; i++){
    colisao = collideRectRect(xmisseis[i], ymisseis[i], 20, 40, xNave, yNave, 25, 25)
   if (colisao){
     print("colidiu")
  }
 }
}

function colisaoTiroMissil() {
  
  for(let laser of posicoesLaser) {
    
    for(let i = 0;i < imagemMisseis.length; i++){
      // nao atingiu
      if((laser.x)+9 < xmisseis[i] || (xmisseis[i])+ 20 < laser.x || laser.y > (ymisseis[i]+30) || laser.y <= -37) {
        
      } else {
        // atingiu
          ymisseis[i] = -150
          laser.y = -37 
          pontos += 1
      } 
    } 
  }
}

function mostraVida(){
  text("Vida da Terra:", 30, 27 )
  text(vida, 187, 27)
}