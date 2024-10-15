//헤더푸터
$(function () {
  $("#header").load("../main/header.html");
  });
  
  $(function () {
  $("#footer").load("../main/footer.html");
  });


let btnCheckList = document.querySelector('.btn-checklist');
let checkListContainer = document.querySelector('.checklist-container');

let btnTripList = document.querySelector('.btn-triplist');
let myTripContainer = document.querySelector('.mytrip-container');

let btnPlanList = document.querySelector('.btn-planlist');
let myPlanContainer = document.querySelector('.myplan-container');

// console.log(btnCheckList);
// console.log(checkListContainer);

btnCheckList.addEventListener("click", function() {
  checkListContainer.style.display = 'grid';
  myTripContainer.style.display = 'none';
  myPlanContainer.style.display = 'none';
  btnCheckList.style.color = 'black';
  btnTripList.style.color = '#a1a1a1';
  btnPlanList.style.color = '#a1a1a1';
});

btnTripList.addEventListener("click", function() {
  myTripContainer.style.display = 'grid';
  checkListContainer.style.display = 'none';
  myPlanContainer.style.display = 'none';
  btnTripList.style.color = 'black';
  btnCheckList.style.color = '#a1a1a1';
  btnPlanList.style.color = '#a1a1a1';
});

btnPlanList.addEventListener("click", function(){
  myPlanContainer.style.display = 'grid';
  myTripContainer.style.display = 'none';
  checkListContainer.style.display = 'none';
  btnPlanList.style.color = 'black';
  btnTripList.style.color = '#a1a1a1';
  btnCheckList.style.color = '#a1a1a1';
});

