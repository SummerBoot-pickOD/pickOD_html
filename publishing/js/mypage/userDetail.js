$(function () {
  $("#header").load("../../html/main/header.html");
});

$(function () {
  $("#footer").load("../../html/main/footer.html");
});


function test() {
  var pswdFirst = document.getElementById('pswd-first').value;
  var pswdAgain = document.getElementById('pswd-again').value;
  if( pswdFirst != pswdAgain ) {
  
    let invalidPw = document.getElementById('pswd-again');
    invalidPw.innerText = '비밀번호가일치하지않습니다';
  } else{
    invalidPw.innerText = '비밀번호가일치합니다';
    return true;
  }

}