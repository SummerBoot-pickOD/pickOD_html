document.addEventListener('DOMContentLoaded',()=>{
  const saveimg_btn2=document.querySelectorAll(".checklist-check img");
  const saveimg_btn1=document.querySelectorAll(".tp_saveimg img");
  

  saveimg_btn2.forEach(button=>{
    button.addEventListener('click',()=>{
      if(button.getAttribute('src')==="../../img/main/unsaved.png"){
      button.setAttribute('src',"../../img/main/saved.png");
      }else{
        button.setAttribute('src',"../../img/main/unsaved.png");
      } 
    })
  });

  saveimg_btn1.forEach(button=>{
    button.addEventListener('click',()=>{
      if(button.getAttribute('src')==="../../img/main/unsaved.png"){
      button.setAttribute('src',"../../img/main/saved.png");
      }else{
        button.setAttribute('src',"../../img/main/unsaved.png");
      } 
    })
  });


  $(function () {
    $("#header").load("../../html/main/header.html");
  });
  
  $(function () {
    $("#footer").load("../../html/main/footer.html");
  });
});
