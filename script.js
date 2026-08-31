document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("menuBtn");
  const nav=document.getElementById("navMenu");
  if(btn&&nav){
    btn.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      btn.setAttribute("aria-expanded",String(open));
      btn.textContent=open?"✕":"☰";
    });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded","false");
      btn.textContent="☰";
    }));
  }
});