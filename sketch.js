var BG,greeting,button,database,Question;


function preload (){
BG = loadImage ("BG.jpg");
}
function setup(){
    canvas = createCanvas (400,400);
    //button =new Botton();
    button = createButton ('complited!!');
    database = firebase.database();

    var QuestionRef = database.ref('myTask/Q1');
    QuestionRef.on ("value",(data)=>{
    Question = data.val();})
    console.log (Question);
}

function draw (){
    background (BG);

   //button.display();
   button.position(300,300);

    fill(255);
    text (Question,60,150);
    
}