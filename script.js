/* =================================

 STARLIGHT GAME ACADEMY

 Cinematic Interaction System V2.0


 GSAP + ScrollTrigger

================================= */





// ================================
// GSAP 初始化
// ================================


gsap.registerPlugin(
    ScrollTrigger
);







// ================================
// 页面加载动画
// ================================


window.addEventListener(

"load",

()=>{


const tl = gsap.timeline();




tl.from(

".hero-tag",

{


opacity:0,

y:50,

duration:1.2,


ease:"power4.out"


}


)





.from(

".hero-content h1",

{


opacity:0,

y:120,

duration:2,


ease:"power4.out"


},


"-=.5"


)







.from(

".hero-content p",

{


opacity:0,

y:50,


duration:1


},


"-=1"


)







.from(

".hero-content span",

{


opacity:0,


duration:1



},


"-=.5"



)








.from(

".hero-buttons",

{


opacity:0,

y:50,

duration:1


},


"-=.5"


);



});











// ================================
// Hero 镜头推进
// ================================




gsap.to(

".hero-bg",

{


scale:1.25,



scrollTrigger:{


trigger:".hero",


start:"top top",


end:"bottom top",


scrub:2



}



}

);









// 城堡远近变化


gsap.to(

".castle",

{


y:-180,

scale:1.15,



scrollTrigger:{


trigger:".hero",


start:"top top",


end:"bottom top",


scrub:2



}



}

);










// 月球移动


gsap.to(

".moon",

{


y:-250,

x:-120,



scrollTrigger:{


trigger:".hero",


start:"top top",


end:"bottom top",


scrub:3



}


}

);











// ================================
// 理念区域
// ================================



gsap.to(

".galaxy",

{


x:-220,

scale:1.15,



scrollTrigger:{


trigger:".idea",


start:"top bottom",


end:"bottom top",


scrub:3


}



}

);








gsap.from(

".section-tag",

{


opacity:0,


y:60,



scrollTrigger:{


trigger:".idea",


start:"top 70%"



}


}

);









gsap.from(

".text h2",

{


opacity:0,


y:120,



scrollTrigger:{


trigger:".idea",


start:"top 60%"



}


}

);










gsap.from(

".text p",

{


opacity:0,


y:80,



scrollTrigger:{


trigger:".idea",


start:"top 50%"



}


}

);








// ================================
// 探索创造之路 卡片动画
// ================================


gsap.fromTo(

".item",


{

opacity:0,

y:80

},



{

opacity:1,

y:0,


duration:1,


ease:"power4.out",


stagger:0.25,



scrollTrigger:{


trigger:".system",


start:"top 75%",


toggleActions:"play none none none"



}


}

);









// ================================
// 学院数据
// ================================


gsap.from(

".stats div",

{


opacity:0,


scale:.8,


stagger:.2,



scrollTrigger:{


trigger:".stats",


start:"top 70%"


}



}

);



















// ================================
// 关于我们
// ================================



gsap.from(

".about-title",

{


opacity:0,


x:-150,



scrollTrigger:{


trigger:".about",


start:"top 70%"


}



}

);










gsap.from(

".about-content p",

{


opacity:0,


y:80,


stagger:.3,



scrollTrigger:{


trigger:".about",


start:"top 60%"


}



}

);











// ================================
// 加入学院
// ================================




gsap.from(

".join h1",

{


opacity:0,


scale:.8,



scrollTrigger:{


trigger:".join",


start:"top 70%"


}



}

);






gsap.from(

".join button",

{


opacity:0,


y:50,



scrollTrigger:{


trigger:".join",


start:"top 60%"


}



}

);












// ================================
// 鼠标空间视差
// ================================



document.addEventListener(

"mousemove",

(e)=>{


const x =

e.clientX /

window.innerWidth

-

0.5;




const y =

e.clientY /

window.innerHeight

-

0.5;







if(
document.querySelector(".castle")
){


gsap.to(

".castle",

{


x:x*40,


y:y*25,


duration:1.5


}


);


}








if(
document.querySelector(".moon")
){


gsap.to(

".moon",

{


x:x*70,


y:y*40,


duration:2


}


);


}





}

);









// ================================
// 星空跟随鼠标
// ================================



const stars =

document.querySelector(".stars");




if(stars){


window.addEventListener(

"mousemove",

(e)=>{



const x =

e.clientX /

window.innerWidth;




const y =

e.clientY /

window.innerHeight;






stars.style.transform =

`

translate(

${x*20}px,

${y*20}px

)

`;




}



);



}









// ================================
// 导航高亮
// ================================



const sections =

document.querySelectorAll(

"section[id]"

);





const links =

document.querySelectorAll(

"nav a"

);







window.addEventListener(

"scroll",

()=>{


let current="";





sections.forEach(

section=>{


const top =

window.scrollY;



if(

top >= section.offsetTop -250

){


current =

section.id;


}



}

);







links.forEach(

link=>{


link.style.color="#bbb";




if(

link.getAttribute("href")

===

"#"+current

){


link.style.color="#c6a15b";


}



}


);



}

);










// ================================
// 防止窗口变化错位
// ================================



window.addEventListener(

"resize",

()=>{


ScrollTrigger.refresh();


}

);


window.addEventListener(
"load",
()=>{

ScrollTrigger.refresh();

}
);