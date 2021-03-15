var BG,greeting,button,database,Question,input;


function preload (){
BG = loadImage ("BG.jpg");
}
function setup(){
    canvas = createCanvas (400,400);
    //button =new Botton();
    button = createButton ('Enter');
    database = firebase.database();

    input = createInput("question");

  
}

function draw (){
    background (BG);

    input.position(40 ,80);
    
   //button.display();
   button.position(300,300);

    fill(255);
    text (Question,60,150);

    button.mousePressed(()=>{
        Question = input.value();

        database.ref('myTask/').update({
            Q1: Question
        });
        });
    
}