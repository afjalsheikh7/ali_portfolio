const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-left');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const roleEl=document.getElementById('typing-role');
const roles=['Full Stack Developer','Web Developer','Creative Coder'];
let roleIndex=0,charIndex=0,deleting=false;
function typeRole(){
  const current=roles[roleIndex];
  roleEl.textContent=current.substring(0,charIndex);
  if(!deleting){
    charIndex++;
    if(charIndex>current.length){deleting=true;setTimeout(typeRole,1200);return;}
  }else{
    charIndex--;
    if(charIndex<0){deleting=false;roleIndex=(roleIndex+1)%roles.length;charIndex=0;}
  }
  setTimeout(typeRole,deleting?55:95);
}
typeRole();

const sections=document.querySelectorAll('section[id]');
const internalLinks=document.querySelectorAll('.nav-link[href^="#"]');
window.addEventListener('scroll',()=>{
  let active='home';
  sections.forEach(section=>{if(window.scrollY>=section.offsetTop-150)active=section.id;});
  internalLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+active));
});
