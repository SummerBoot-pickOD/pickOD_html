
document.addEventListener('DOMContentLoaded',()=>{
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  
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

  
 
  $(function () {
    $("#header").load("../main/header.html");
  });
  
  $(function () {
    $("#footer").load("../main/footer.html");
  });
});
