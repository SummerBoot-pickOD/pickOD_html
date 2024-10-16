
document.addEventListener('DOMContentLoaded',()=>{
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const saveimg_btn=document.querySelector('.saveimg');
  
  
  const images = [
    "../../img/place/placeDetail/samplePlace.jpg",
    "../../img/place/placeDetail/samplePlace2.jpg",
    "../../img/place/placeDetail/samplePlace3.jpg"
  ];

  let currentIndex = 0;

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.setAttribute('src', images[currentIndex]);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex =(currentIndex - 1+images.length) % images.length;
    slider.setAttribute('src', images[currentIndex]);
  });

  // 찜하기
  saveimg_btn.addEventListener('click',()=>{
      if(saveimg_btn.getAttribute('src')==="../../img/main/unsaved.png"){
        saveimg_btn.setAttribute('src',"../../img/main/saved.png");
      }else{
        saveimg_btn.setAttribute('src',"../../img/main/unsaved.png");
      } 
  });
 

 //nav 버튼
  document.querySelectorAll('.placeDetail-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); 
  
      const targetId = this.getAttribute('href'); 
      const targetElement = document.querySelector(targetId).offsetTop; 

      window.scrollTo({
        top:targetElement-69,
        behavior: 'smooth' // 부드러운 스크롤
      });
    });
  });
 
  $(function () {
    $("#header").load("../main/header.html");
  });
  
  $(function () {
    $("#footer").load("../main/footer.html");
  });
});
