//헤더푸터
$(function () {
$("#header").load("../main/header.html");
});

$(function () {
$("#footer").load("../main/footer.html");
});


let checkAll = document.querySelector('.all');
let checkItem = document.querySelectorAll('.item');
console.log(checkAll);
console.log(checkItem);

checkAll.addEventListener('click', function() {
  checkItem.forEach(function(e) {
    e.checked = checkAll.checked;
  });
});

checkItem.forEach(function(e) {
  e.addEventListener('click', function() {
      if (!e.checked) {
        checkAll.checked = false;
      } else {
          const allChecked = Array.from(checkItem).every(function(checkItem) {
              return checkItem.checked;
          });
          checkAll.checked = allChecked;
      }
  });
});

//휴지통 이동
// 왜...하나만제거가 되는거냐.....
const btnDelete = document.querySelector('.btn-delete-all');
console.log(btnDelete);
const mailboxList = document.querySelectorAll('.mailbox-container');
console.log(mailboxList);

btnDelete.addEventListener('click', function() {
  // const mailboxList = document.querySelector('mailbox-list');
  // console.log(mailboxList);
  // const trashList = document.getElementById('trashList');
  if (confirm("영구삭제하시겠습니까?")) {
     // 받은 쪽지 중 체크된 항목을 찾아서 휴지통으로 이동(삭제처리)
  const checkboxes = document.querySelectorAll('.item');
  // console.log(checkboxes);
  checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
          // const messageItem = checkbox.parentElement;
          // console.log(messageItem);
          // const msgDelList= messageItem.parentElement;
          // console.log(msgDelList);
          const messageItem = checkbox.closest('.mailbox-list');
          mailboxList.forEach(list => {
            list.removeChild(messageItem);
          }); // 받은 쪽지함에서 삭제
          // trashList.appendChild(messageItem);   // 휴지통으로 이동
          checkbox.checked = false; // 체크 상태 초기화
      }
  });
} else {
  alert("취소되었습니다")
}

});

//쪽지클릭시 쪽지내용보기
let mailContent = document.querySelectorAll('.mail-content');
mailContent.forEach(btn => {
  btn.addEventListener("click", function(){
    let getMsgContainer = document.querySelector('.getmsg-container');
    getMsgContainer.style.display="block";
  })
});

//쪽지 닫기 기능
let btnClose = document.querySelectorAll('.btn-close');
btnClose.forEach(btn => {
  btn.addEventListener("click", function() {
    let nonmodalContainers = document.querySelectorAll('.nonmodal-container');
    
    nonmodalContainers.forEach(container => {
      container.style.display = 'none';
    });
  });
});
