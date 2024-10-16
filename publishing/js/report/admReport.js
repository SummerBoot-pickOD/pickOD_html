$(function () {
  $("#header").load("../../html/admin/admHeader.html");
});

$(function () {
  $("#footer").load("../../html/main/footer.html");
});

$(function () {
  $("#report-detail-modal").load("../../html/report/admReportDetail.html");
});

$(".last-col").click(function(){
  if($("#report-detail-modal").css('display') == 'block'){
    $("#report-detail-modal").css('display','none');
  }
  //데이터 받아와서 내용 넣고
  setTimeout(() => {
    $("#report-detail-modal").css('display','block');
  }, 200);
})