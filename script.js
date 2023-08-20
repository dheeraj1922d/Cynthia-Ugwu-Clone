const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

const crcl=document.querySelector(".circle");


function circleMouseFollower(){
  window.addEventListener('mousemove',function(dets){
    crcl.style.left=dets.clientX+"px";
    crcl.style.top=dets.clientY+ "px";
  })
}
  
  circleMouseFollower();
  


gsap.from("#nav", {
    y:'-10',
    opacity:0,
    duration:1,
    ease:'expo.easeInOut'
})

gsap.from(".animate-up", {
    y:'100',
    duration:1,
    ease:'expo.easeInOut',
    delay:'-0.1',
    stagger:.2,

})

gsap.from(".animate-down", {
    y:'-100',
    duration:1,
    ease:'expo.easeInOut',
    
    stagger:.2,

})



//

  var prevRot=0;
  var diffRot=0;
document.querySelectorAll(".elem").forEach(function(elm){
  elm.addEventListener("mousemove", function(dets){
    var diff=dets.clientY-elm.getBoundingClientRect().top;

    diffRot=dets.clientX-prevRot;
    prevRot=dets.clientX;

    gsap.to(elm.querySelector(".pic"),{
       scale: 1,
       opacity:1,
       
      //  ease:power1,
       top:diff-185,
       left:dets.clientX-300,
       ease: Power3,
       rotate:gsap.utils.clamp(-15, 25, diffRot),

      
    })


  })

  elm.addEventListener("mouseleave", function(){

    gsap.to(elm.querySelector(".pic"),{
      scale:0,
      opacity:0,
     
      duration: 0.5,
     
    })
  })
})
