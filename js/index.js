let velocity ={
    x:0,
    y:0
};
let speed=6;
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



function main(ctime)
{   window.requestAnimationFrame(main);
    //music.play();
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
        music.pause();
        alert("Game Over ,press any key to continue");
        snakarr=[
            {x:13,
            y:15
            }
        ];
        music.play();
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
    switch (e.key) {
        case "ArrowUp":
                velocity.x=0;
                velocity.y=-1;
                console.log("ArrowUp");
            break;
        case "ArrowDown":
                velocity.x=0;
                velocity.y=1;
                console.log("ArrowDown");
            break;
        case "ArrowLeft":
                velocity.x=-1;
                velocity.y=0;
                console.log("ArrowLeft");
            break;
        case "ArrowRight":
                velocity.x=1;
                velocity.y=0;
                console.log("ArrowRight");
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