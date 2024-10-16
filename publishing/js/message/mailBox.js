//헤더푸터
$(function () {
  $("#header").load("../main/header.html");
  });
  
  $(function () {
  $("#footer").load("../main/footer.html");
  });

// 전체클릭 기능
let checkAll = document.querySelector('.all');
let checkItem = document.querySelectorAll('.item');
// console.log(checkAll);
// console.log(checkItem);

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
const btnDelete = document.querySelector('.btn-delete');
console.log(btnDelete);
const mailboxList = document.querySelectorAll('.mailbox-container');
console.log(mailboxList);

btnDelete.addEventListener('click', function() {
  // const mailboxList = document.querySelector('mailbox-list');
  // console.log(mailboxList);
  // const trashList = document.getElementById('trashList');
  
  // 받은 쪽지 중 체크된 항목을 찾아서 휴지통으로 이동
  const checkboxes = document.querySelectorAll('.item');
  console.log(checkboxes);
  checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
          // const messageItem = checkbox.parentElement;
          // console.log(messageItem);
          // const msgDelList= messageItem.parentElement;
          // console.log(msgDelList);
          const messageItem = checkbox.closest('.mailbox-list');
          console.log(messageItem);
          mailboxList.forEach(list => {
            list.removeChild(messageItem);
          }); // 받은 쪽지함에서 삭제
          // trashList.appendChild(messageItem);   // 휴지통으로 이동
          checkbox.checked = false; // 체크 상태 초기화
      }
  });
});







document.addEventListener('DOMContentLoaded', function() {
  // 모든 mailbox-list 요소들을 가져오기
  var mailboxLists = document.querySelectorAll('.mailbox-list');

  // 각 mailbox-list 요소에 클릭 이벤트 추가
  mailboxLists.forEach(function(mailbox) {
    mailbox.addEventListener('click', function() {

      // 읽으면 편지 읽음표시기능
      var readMail =this.querySelector('.mail-open img');
      readMail.src = '../../img/message/받은편지.png';
      // 클릭한 mailbox-list 안의 mail-from 텍스트 가져오기
      var senderText = this.querySelector('.mail-from').innerText;
      // 클릭한 mailbox-list 안의 mail-content 텍스트 가져오기
      var contentText = this.querySelector('.mail-content').innerText;

      // 모달의 ppl-from 요소에 발신자 텍스트 설정
      document.querySelector('.ppl-from').innerText = senderText;
      // 모달의 nonmodal-textarea에 쪽지 내용 텍스트 설정
      document.querySelector('.nonmodal-textarea').innerText = contentText;

      // 모달 보이기
      document.querySelector('.getmsg-container').style.display = 'block';
    });
  });

  // // 모달 닫기 버튼 클릭 시 모달 숨기기 -> 따로 빼서만듦
  // document.querySelector('.btn-close').addEventListener('click', function() {
  //   document.querySelector('.getmsg-container').style.display = 'none';
  // });
});


let replyMsg = document.querySelector('.reply-msg');
replyMsg.addEventListener("click", function(){
    let sendMsgContainer = document.querySelector('.sendmsg-container');
    sendMsgContainer.style.display="block";
  });


// 쪽지닫기기능
let btnClose = document.querySelectorAll('.btn-close');
btnClose.forEach(btn => {
  btn.addEventListener("click", function() {
    let nonmodalContainers = this.closest('.nonmodal-container');
    
    if(nonmodalContainers){
      nonmodalContainers.style.display='none';
    }
  });
});

// 게시물 및 페이지네이션 처리
const mailNum = Array.from({ length: 50 });
const MailsPerPage = 10;
let currentPage = 1;
let totalPages;

function setupPagination() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  totalPages = Math.ceil(mailNum.length / MailsPerPage);

  const createButton = (pageNum, text) => {
      const button = document.createElement('button');
      button.textContent = text;
      button.disabled = (currentPage === pageNum);
      button.addEventListener('click', () => {
          currentPage = pageNum;
          setupPagination();
      });
      return button;
  };

  if (currentPage > 1) {
      const prevButton = createButton(Math.max(currentPage - 5, 1), '<'); // 1 이하로 내려가지 않도록 수정
      paginationContainer.appendChild(prevButton);
  }

  const startPage = Math.max(1, currentPage - 4);
  const endPage = Math.min(totalPages, currentPage + 4);

  for (let i = startPage; i <= endPage; i++) {
      const button = createButton(i, i);
      paginationContainer.appendChild(button);
  }

  if (currentPage < totalPages) {
      const nextButton = createButton(Math.min(currentPage + 5, totalPages), '>'); // 총 페이지 수 초과 방지
      paginationContainer.appendChild(nextButton);
  }
}

  // 초기 표시
  setupPagination();

