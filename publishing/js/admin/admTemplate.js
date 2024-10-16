document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $("#header").load("../../html/admin/admHeader.html");
  });

  $(function () {
    $("#footer").load("../../html/main/footer.html");
  });

  //템플릿 상세보기 > 템플릿 상세 페이지로 이동
  const toTemplate = document.querySelectorAll('.to-template');

  toTemplate.forEach(btn => {
    btn.addEventListener("click", function () {
      window.location.href = "../../html/admin/admTemplateDetails.html";
    })
  });
});


