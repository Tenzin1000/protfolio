// coffee site
var visitbtn=document.getElementById('show')
var projectImg=document.getElementById('project-img')
projectImg.addEventListener('mouseover',function(){
    projectImg.style.filter='none';
    visitbtn.style.padding='8px 20%';
    visitbtn.style.visibility='visible';

});
projectImg.addEventListener('mouseout',function(){
    projectImg.style.filter='blur(1px)';
    visitbtn.style.padding='8px 20px';
    visitbtn.style.visibility='hidden';
})
//corona data
var visitbtn1=document.getElementById('show1')
var projectImg1=document.getElementById('project-img1')
projectImg1.addEventListener('mouseover',function(){
    projectImg1.style.filter='none';
    visitbtn1.style.padding='8px 20%';
    visitbtn1.style.visibility='visible';
});
projectImg1.addEventListener('mouseout',function(){
    projectImg1.style.filter='blur(1px)';
    visitbtn1.style.padding='8px 20px';
    visitbtn1.style.visibility='hidden';
})
//global tech
var visitbtn2=document.getElementById('show2')
var projectImg2=document.getElementById('project-img2')
projectImg2.addEventListener('mouseover',function(){
    projectImg2.style.filter='none';
    visitbtn2.style.visibility='visible';
    visitbtn2.style.padding='8px 20%';
});
projectImg2.addEventListener('mouseout',function(){
    projectImg2.style.filter='blur(1px)';
    visitbtn2.style.padding='8px 20px';
    visitbtn2.style.visibility='hidden';
})
//trek nepal style for btn hide
var visitbtn3=document.getElementById('show3')
var projectImg3=document.getElementById('project-img3')
projectImg3.addEventListener('mouseover',function(){
    projectImg3.style.filter='none';
    visitbtn3.style.padding='8px 20%';
    visitbtn3.style.visibility='visible';
});
projectImg3.addEventListener('mouseout',function(){
    visitbtn3.style.padding='8px 20px';
    projectImg3.style.filter='blur(1px)';
    visitbtn3.style.visibility='hidden';
})
//dark mode
var moon =document.getElementById('moon');
var sun= document.getElementById('sun');
var body=document.getElementById('body')

moon.addEventListener('click',()=>{
    moon.style.display='none';
    sun.style.display='block';
    document.getElementById('skill-title').style.color='rgba(255,2,2,.8)'
    document.getElementById('skill-title').style.textShadow='none';

    document.getElementById('homenav').style.color="rgb(177 177 38)";
    document.getElementById('aboutnav').style.color="rgb(177 177 38)";
    document.getElementById('projectnav').style.color="rgb(177 177 38)";
    document.getElementById('contactnav').style.color="rgb(177 177 38)";
    
    document.getElementById('navico').style.color="#52d2a7";
    document.getElementById('navico1').style.color="#52d2a7";
    document.getElementById('navico2').style.color="#52d2a7";

    document.getElementById('myimage').style.border="3px solid #551A8B";

    
    body.style.background='black';
    body.style.color='rgba(247, 229, 229, 0.79)';
    document.getElementById('about').style.background="black"
    document.getElementById('contact-para').style.background="black"
    document.getElementById('contact-para').style.color="#d4d44c"

});

sun.addEventListener('click',function(){
    moon.style.display='block';
    sun.style.display='none';
    document.getElementById('skill-title').style.color='rgb(16, 155, 16)'
    document.getElementById('skill-title').style.textShadow='0px 3px 8px rgb(24 228 24)';

    document.getElementById('homenav').style.color="#1a93b5";
    document.getElementById('aboutnav').style.color="#1a93b5";
    document.getElementById('projectnav').style.color="#1a93b5";
    document.getElementById('contactnav').style.color="#1a93b5";
    


    document.getElementById('navico').style.color="#551A8B";
    document.getElementById('navico1').style.color="#551A8B";
    document.getElementById('navico2').style.color="#551A8B";

    document.getElementById('myimage').style.border="2px solid black";
    
    body.style.background='#fff';
    body.style.color='black';
    document.getElementById('about').style.background="rgba(184, 177, 177, 0.548)"
    document.getElementById('contact-para').style.background="rgba(184, 177, 177, 0.548)"
    document.getElementById('contact-para').style.color="#551A8B"

})