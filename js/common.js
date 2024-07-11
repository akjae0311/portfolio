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

  //가로스크롤

     // 가로 스크롤 애니
     const horizontal = document.querySelector(".horizontal"); 
        const sections = gsap.utils.toArray(".horizontal > section");

        gsap.to(sections, {
            xPercent: -100 * (sections.length -1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => "+=" + (horizontal.offsetWidth - innerWidth),
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1/(sections.length -1),
                    inertia: false,
                    duration: {min: 0.1, max: 0.1},
                },
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });


    });

    //이거뭐지

    $("header h1 a").click(function(){
      $("html, body").stop().animate({scrollTop:0},1000,"swing")
    });

    // 마우스 휠 방향
    $(window).bind('wheel', function(event){
      if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
          // scroll up
          $("header").removeClass("on");
      }
      else {
          // scroll down
          $("header").addClass("on");
      }

      var location = $(window).scrollTop();
      
      if(location < 100 ){
        $("header").addClass("on");
      }
    });

    //뭐지이거

    var menu = $(".gnb li")

    menu.click(function(){
        event.preventDefault();
        var idx = $(this).index();
        var Link = $(this).find("a").attr("href");
        var tt = $(Link).offset().top
        $("html, body").stop()
        .animate({scrollTop:tt},1000,"swing",function(){
            quick(idx);
        })
    });

    function quick(n){
    $(".gnb li").removeClass("on");
    $(".gnb li").eq(n).addClass("on");
    }


  


//end