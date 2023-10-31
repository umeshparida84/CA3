document.querySelector('form').addEventListener("submit",save)


function save(e){
  e.preventDefault();
  let name1=document.getElementById("name").value;
  let course=document.getElementById("course").value;
  let email=document.getElementById("email").value;
  const obj={
    email:email,
    name:name1,
course:course
  }
  var sobj=JSON.stringify(obj)
localStorage.setItem(obj.email,sobj)
screen(obj)
 
}
function screen(obj){
  console.log("hy");
  let ul=document.getElementById("list");
 
  let li=document.createElement('li');
li.className='li';
 
  ul.appendChild(li)

  let text=document.createTextNode(`email-{${obj.email}-name-${obj.name}-course-${obj.course}`);

  li.appendChild(text);

}
window.addEventListener("DOMContentLoaded",()=>{
  const ls=localStorage;
 const lskeys=Object.keys(ls);
 for(let i=0;i<lskeys.length;i++){
     const key=lskeys[i];
     const details=ls[key];
     const detailsobj=JSON.parse(details);
     screen(detailsobj);
 }
});