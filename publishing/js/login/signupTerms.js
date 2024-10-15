$(function () {
  $("#header").load("../../html/main/header.html");
});

$(function () {
  $("#footer").load("../../html/main/footer.html");
});

$("#next").click(function(){
  if(!($("#terms-of-use input").is(':checked') || $("#privacy-policy input").is(':checked'))){
    alert("약관에 모두 동의하여 주십시오.");
    return;
  }
  window.location.href="./signup.html"
});