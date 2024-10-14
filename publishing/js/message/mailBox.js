
//휴지통 이동 기능(참고용)
// document.getElementById('deleteButton').addEventListener('click', function() {
//   const messageList = document.getElementById('messageList');
//   const trashList = document.getElementById('trashList');
  
//   // 받은 쪽지 중 체크된 항목을 찾아서 휴지통으로 이동
//   const checkboxes = document.querySelectorAll('.message-checkbox');
//   checkboxes.forEach((checkbox, index) => {
//       if (checkbox.checked) {
//           const messageItem = checkbox.parentElement;
//           messageList.removeChild(messageItem); // 받은 쪽지함에서 삭제
//           trashList.appendChild(messageItem);   // 휴지통으로 이동
//           checkbox.checked = false; // 체크 상태 초기화
//       }
//   });
// });

// 전체클릭 기능
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