const img0 = document.getElementById("0");
const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const comment = document.getElementById("comment");
const cmImage = document.getElementById("cmImage");
let holdvalu = null ;

img0.addEventListener("click",()=>{ holdvalu = `stone`;});
img1.addEventListener("click",()=>{ holdvalu = `paper` });
img2.addEventListener("click",()=>{ holdvalu = `scissor` });
const button = document.getElementById("button");


const SPS = [
    {
        id:0,
        name:"stone"
    },
    {
        id:1,
        name:"paper"
    },{
        id:2,
        name:"scissor"
    }
]

button.addEventListener("click",()=>{
    
    const userData =holdvalu;
    if (!userData) {
        comment.textContent = `you have to enter three of this 😑`;
        comment.style.fontSize = `150%`
        comment.style.fontFamily= ` 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;`
        return
    }
    function playGame(inform){

        let userIndex = null ;
        
        for(let i = 0 ; i<SPS.length ; i++){
            if (SPS[i].name === inform) {
                userIndex = i;
            }
        }
    
        const computerNumber = Math.floor(Math.random()*3);
        console.log(computerNumber,userIndex);
        if (userIndex>computerNumber) {
            if (userIndex==2&&computerNumber==0) {
                console.log(`computer win`,userIndex,computerNumber);
                cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`)
                comment.style.color = `red`
                comment.style.fontSize = `150%`
                comment.textContent = `computer win you chose ${SPS[userIndex].name} and compute chose ${SPS[computerNumber].name} 🥱 `
            }else{
                console.log(`user win`,userIndex,computerNumber );
                cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`)
                comment.style.color= `green`
                comment.style.fontSize = `150%`
                comment.textContent = `user win you chose ${SPS[userIndex].name} and compute chose ${SPS[computerNumber].name} 😎`
                
            }
            
        }
        
        if(computerNumber>userIndex){
           
            if (userIndex==0&&computerNumber==2) {
                console.log(`user win`,userIndex,computerNumber );
                cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`)
                comment.style.color = `green`
                comment.style.fontSize = `150%`
                comment.textContent = `user win you chose ${SPS[userIndex].name} and compute chose ${SPS[computerNumber].name} 😎 `
                
            }else{
                console.log(`computer win`,userIndex,computerNumber);
                console.log(`computer win`,userIndex,computerNumber);
                cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`)
                comment.style.color = `red`
                comment.style.fontSize = `150%`
                comment.textContent = `computer win  you chose ${SPS[userIndex].name} and compute chose ${SPS[computerNumber].name}
                🥱`
                
            }
            
        }

        if (userIndex==computerNumber){
            console.log(`computer win`,userIndex,computerNumber);
            cmImage.setAttribute("src",`${SPS[computerNumber].name}.png`)
            comment.style.color = `blue`
            comment.style.fontSize = `150%`
            comment.textContent = `draw you chose ${SPS[userIndex].name} and compute chose ${SPS[computerNumber].name } 😅`
            
        }
     

    }

    playGame(userData)

    
})