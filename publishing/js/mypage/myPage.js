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

let ResultDetail = document.querySelector('.result-detail');
let ResultDetail2 = document.querySelector('.result-detail2');
let ResultDetail3 = document.querySelector('.result-detail3');

btnCheckList.addEventListener("click", function() {
  checkListContainer.style.display = 'grid';
  myTripContainer.style.display = 'none';
  myPlanContainer.style.display = 'none';
  btnCheckList.style.color = 'black';
  btnTripList.style.color = '#a1a1a1';
  btnPlanList.style.color = '#a1a1a1';
  ResultDetail.style.display = 'flex';
  ResultDetail2.style.display = 'none';
  ResultDetail3.style.display = 'none';
});

btnTripList.addEventListener("click", function() {
  myTripContainer.style.display = 'grid';
  checkListContainer.style.display = 'none';
  myPlanContainer.style.display = 'none';
  btnTripList.style.color = 'black';
  btnCheckList.style.color = '#a1a1a1';
  btnPlanList.style.color = '#a1a1a1';
  ResultDetail2.style.display = 'flex';
  ResultDetail.style.display = 'none';
  ResultDetail3.style.display = 'none';
});

btnPlanList.addEventListener("click", function(){
  myPlanContainer.style.display = 'grid';
  myTripContainer.style.display = 'none';
  checkListContainer.style.display = 'none';
  btnPlanList.style.color = 'black';
  btnTripList.style.color = '#a1a1a1';
  btnCheckList.style.color = '#a1a1a1';
  ResultDetail.style.display = 'none';
  ResultDetail2.style.display = 'none';
  ResultDetail3.style.display = 'flex';
});

let searchFp = document.querySelector('.search-fp');
let searchSp = document.querySelector('.search-sp');
let searchTpl = document.querySelector('.search-tpl');

searchFp.addEventListener('click', ()=>{
  searchFp.style.fontWeight = 'bold';
  searchSp.style.fontWeight = 'normal';
  searchTpl.style.fontWeight = 'normal';

  // db연결하면 색인기능 들어감
});

searchSp.addEventListener('click', ()=>{
  searchSp.style.fontWeight = 'bold';
  searchFp.style.fontWeight = 'normal';
  searchTpl.style.fontWeight = 'normal';
  
  // db연결하면 색인기능 들어감
});

searchTpl.addEventListener('click', ()=>{
  searchTpl.style.fontWeight = 'bold';
  searchSp.style.fontWeight = 'normal';
  searchFp.style.fontWeight = 'normal';
  
  // db연결하면 검색기능 들어감
});


let searchRecent = document.querySelector('.search-recent');
let searchDate = document.querySelector('.search-date');

searchRecent.addEventListener('click', ()=>{
  searchRecent.style.fontWeight = 'bold';
  searchDate.style.fontWeight = 'normal';
  
  // db연결하면 색인기능 들어감
});

searchDate.addEventListener('click', ()=>{
  searchDate.style.fontWeight = 'bold';
  searchRecent.style.fontWeight = 'normal';
  
  // db연결하면 검색기능 들어감
});

// 찜하기 해제하면 리스트삭제

document.querySelectorAll('.checklist-check').forEach(function(checkElement) {
  checkElement.addEventListener('click', function() {
    // 클릭된 요소의 부모의 부모(.check-list)를 찾고 제거
    const checkListElement = this.closest('.check-list');
    if (checkListElement) {
      checkListElement.remove();
    }
  });
});