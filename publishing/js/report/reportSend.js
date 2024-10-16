$("#report-modal-tail>button").click(function(){
  //name = report-type에서 선택된게 없으면 컷
  if($("input[name='report-type']:checked").length == 0){
    alert("신고 분류를 선택해주세요.");
    return;
  }

  alert("신고가 정상적으로 등록되었습니다.");
  $(".modal-container").css('display','none');
});

$("#modal-exit").click(function(){
  $(".modal-container").css('display','none');
});