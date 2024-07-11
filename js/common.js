$(document).ready(function(){ //start


 $(".ham").click(function(){

  if($(this).hasClass("on") == true){
    $(this).removeClass("on");
    $(".mgnb-wrap").animate({
      right : "-2000PX"
    }, 500);
  }else{
    $(this).addClass("on");
    $(".mgnb-wrap").animate({
      right : "0"
    }, 500);
  }

})


const $text = document.querySelector(".typing .text");

const letters = [
  "Welcome to my PERSONA",
  "SONG EUN YEONG",
  "PORTFOLIO"
];


const speed = 100;
let i = 0;

const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }

  await wait(800);
  
  remove();
}

const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);

 
$(window).scroll(function(){
       
  if($(window).scrollTop() > 70){
    
   $("header").addClass("scroll")
  }
  else{
   $("header").removeClass("scroll")
  }
  });

  AOS.init();

})//end