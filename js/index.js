alert("use ↑ ↓ → ← if u r using keybord also u can turn  on or off audio  using button in top right corner");

let velocity ={
    x:0,
    y:0
};
let speed=6;
let smoving="";
let lastspeed=0;
let snakarr=[
    {x:13,y:15}
];
let foodeat=new Audio("music/food.mp3");
let gameOver=new Audio("music/gameover.mp3");
let move=new Audio("music/move.mp3");
let music=new Audio("music/music.mp3");
let food={
    x:6,
    y:5
};
let score=0;
let audios=false;



function main(ctime)
{   window.requestAnimationFrame(main);
    
    if((ctime-lastspeed)/1000 <1/speed)
        return;
    
    
       lastspeed=ctime;
       gameEngine();
       
    
}


function iscollide(sarr){
   for (let i= 1; i< snakarr.length; i++) {
       
        if(sarr[i].x===snakarr[0].x && sarr[i].y===snakarr[0].y)
        return true;       
   }
   if(sarr[0].x>=18 || sarr[0].x<=0 || sarr[0].y>=18 || sarr[0].y<=0)
       return true;
}


function gameEngine(){

    if(iscollide(snakarr)){
        gameOver.play();
        if(audios){
            music.pause();
        }
        alert("Game Over ,press any key to continue");
        snakarr=[
            {x:13,
            y:15
            }
        ];
        if(audios){
            music.play();
        }
        score=0;
        scoreBox.innerHTML="score: "+score;
        speed=6;
        velocity={x:0,y:0};
    }


    if(snakarr[0].x===food.x && snakarr[0].y===food.y)
    {    foodeat.play();
        score+=1;
        
        if(score>hiscoreval)
        {    hiscoreval=score;
            console.log(hiscoreval)
            localStorage.setItem("Hiboxs",JSON.stringify(hiscoreval));
            HiBox.innerHTML="HighScore :"+hiscoreval;

        }
        scoreBox.innerHTML="score: "+score;
        speed=speed+0.5;
        snakarr.unshift({x:snakarr[0].x+velocity.x,y:snakarr[0].y+velocity.y});
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),
        y:Math.round(a+(b-a)*Math.random())}
    };


        for (let i = snakarr.length-2; i>=0; i--) {
           
            snakarr[i+1]={...snakarr[i]}
            
        }
        
        snakarr[0].x+=velocity.x;
        snakarr[0].y+=velocity.y;




    board.innerHTML="";
    snakarr.forEach((e,index)=>{
         snakeElement=document.createElement("div");
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0)
        snakeElement.classList.add("head");
        else
        snakeElement.classList.add("snake");
        board.appendChild(snakeElement);
    }
    );

    FoodElement=document.createElement("div");
        FoodElement.style.gridRowStart=food.y;
        FoodElement.style.gridColumnStart=food.x;
        FoodElement.classList.add("food");
        board.appendChild(FoodElement);

}
let hiscores=localStorage.getItem("HiBoxs");
if(hiscores===null)
{   hiscoreval=0;
    localStorage.setItem("Hiboxs",JSON.stringify(hiscoreval));
}
else
{    hiscoreval=JSON.parse(HiBoxs);
    HiBox.innerHTML="HighScore: "+hiscoreval;
}
//main
window.requestAnimationFrame(main);

window.addEventListener('keydown',e=>{
    velocity={x:0,y:0};
    move.play();
   
    var c="true";
    
    switch (e.key) {
        case "ArrowUp":
            for (let i= 1; i< snakarr.length; i++) {

                if(snakarr[i].x===snakarr[0].x)
                {
                    c="false";
                   
                  
                    
                    

                    

                if(smoving==="d")
                {  
                    
                    velocity.x=0;
                    velocity.y=1;
                    smoving="d";
                    console.log(smoving);
                }
                else if(smoving==="u")
                {    
                    velocity.x=0;
            velocity.y=-1;
                console.log(smoving);
                console.log("in");
                }


            }
        }
                
                    
           
           console.log("c is "+c);
           
           if(c==="true")
           {
            velocity.x=0;
            velocity.y=-1;
            smoving="u";
            console.log("ArrowDown");
           }















                // velocity.x=0;
                // velocity.y=-1;
                // console.log("ArrowUp");
            break;
        case "ArrowDown":

            for (let i= 1; i< snakarr.length; i++) {

                if(snakarr[i].x===snakarr[0].x)
                {
                    c="false";
                   
                  
                  
                if(smoving==="d")
                {  
                   
                    velocity.x=0;
            velocity.y=1;
                    smoving="d";
                    console.log(smoving);
                }
                else if(smoving==="u")
                {    
                    velocity.x=0;
                    velocity.y=-1;
                console.log(smoving);
                console.log("in");
                }


            }
        }
                
                    
           
           console.log("c is "+c);
           
           if(c==="true")
           {
            velocity.x=0;
            velocity.y=1;
            smoving="d";
            console.log("ArrowDown");
           }














               
            break;
        case "ArrowLeft":

               
            for (let i= 1; i< snakarr.length; i++) {

                if(snakarr[i].y===snakarr[0].y)
                {
                    c="false";
                     console.log("c is "+c);
                if(smoving==="l")
                {  
                    velocity.x=-1;
                    velocity.y=0;
                    smoving="l";
                   
                }
                else if(smoving==="r")
                {    
                    velocity.x=1;
                    velocity.y=0;
                   
                }


            }
                
                    
           }
              if(c==="true")          
           {
               velocity.x=-1;
                velocity.y=0;
                smoving="l";
                console.log(smoving);
           }

           
            break;
        case "ArrowRight":
          

            for (let i= 1; i< snakarr.length; i++) {

                if(snakarr[i].y===snakarr[0].y)
                {
                    c="false";
                   
                  
                  
                if(smoving==="r")
                {  
                   
                    velocity.x=1;
                velocity.y=0;
                    smoving="r";
                    console.log(smoving);
                }
                else if(smoving==="l")
                {    
                    velocity.x=-1;
                velocity.y=0;
                console.log(smoving);
                console.log("in");
                }


            }
        }
                
                    
           
           console.log("c is "+c);
           
           if(c==="true")
           {
                velocity.x=1;
                velocity.y=0;
               smoving="r";
                console.log(smoving);
                console.log("in");
           }
                break;
        default:
            break;
    }
})




function moveup()
{    
    velocity={x:0,y:0};
    move.play();
    velocity.x=0;
    velocity.y=-1;
}
 function movedown(){
    velocity={x:0,y:0};
    move.play();
    velocity.x=0;
    velocity.y=1;

 }
function moveleft(){
    velocity={x:0,y:0};
    move.play();
    velocity.x=-1;
    velocity.y=0;

}
function moveright(){
    velocity={x:0,y:0};
    move.play();
    velocity.x=1;
    velocity.y=0;
}

function audiop(){
    if(audios)
    {    audio.innerHTML="on";
        music.pause();
        audios=false;
    }
    else
    {     audio.innerHTML="Off";
        music.play();
        audios=true;
    }
}