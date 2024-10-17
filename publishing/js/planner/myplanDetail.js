//헤더푸터
$(function () {
  $("#header").load("../main/header.html");
  });
  
  $(function () {
  $("#footer").load("../main/footer.html");
  });


  const btnSave = document.querySelector('.save-btn');
  const btnCancle = document.querySelector('.cancel-btn');

  btnSave.addEventListener('click', function () {

    if (confirm('편집하시겠습니까?')) {
  
      window.location.href = '../myplan/myplan.html';
    } 
  
  });
  
   

  btnCancle.addEventListener('click', function () {

  if (confirm('삭제하시겠습니까?')) {

    window.location.href = '../mypage/mypage.html';
  } 

});

 