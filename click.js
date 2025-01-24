
if (userIndex>computerNumber) {
    if (userIndex!==2&&computerNumber!==0) {
     console.log(userIndex , computerNumber);
     cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`);
     comment.style.color= `green`
     comment.textContent = `you win that game you chose ${SPS
         [userIndex].name} and computer chose ${SPS[computerNumber].name}`;
     
 }else{
         
         cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`);
         comment.style.color = `red`
         comment.textContent = `mechine win that game you chose ${SPS[userIndex].name} and computer chose ${SPS[computerNumber].name}`;
     }
}else if(computerNumber>userIndex){
    
 if (userIndex!==0&&computerNumber!==2) {
         cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`);
         comment.style.color = `red`
         comment.textContent = `mechine win that game you chose ${SPS[userIndex].name} and computer chose ${SPS[computerNumber].name}`;
     }else{
         cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`);
         comment.style.color= `green`
         comment.textContent = `you win that game you chose ${SPS
             [userIndex].name} and computer chose ${SPS[computerNumber].name}`;
     }
     
}else{
  cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`);
 comment.style.color = "blue";
  comment.textContent = `mechine and you draw that game you chose ${SPS[userIndex].name} and computer chose ${SPS[computerNumber].name}`;
}