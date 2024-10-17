$(function () {
    $("#header").load("../main/header.html");
});

$(function () {
    $("#footer").load("../main/footer.html");
});

$(function () {
    $("#report").load("../report/reportSend.html");
});

// 이미지 클릭 시 모달 열기 이벤트
document.addEventListener('DOMContentLoaded', function() {
    // saveimg 클래스를 가진 이미지를 선택
    const saveImage = document.querySelector('.saveimg');

    // 이미지 클릭 이벤트 추가
    if (saveImage) {
        saveImage.addEventListener('click', function() {
            // 현재 이미지의 src를 확인하여 변경
            if (saveImage.src.includes('unsaved.png')) {
                saveImage.src = '../../img/main/saved.png'; // 이미지 변경
            } else {
                saveImage.src = '../../img/main/unsaved.png'; // 원래 이미지로 복원
            }
        });
    } else {
        console.warn('saveimg 요소를 찾을 수 없습니다.');
    }

    // reportimg 클릭 이벤트
    const reportImg = document.querySelector('.reportimg');
    if (reportImg) {
        reportImg.addEventListener('click', function() {
            // 모달을 열기
            $(".modal-container").css("display", "block");
        });
    }

    // message-button 클릭 시 동작 추가
    document.querySelectorAll('.message-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 동작 방지

            // data-username 속성에서 사용자 이름 가져오기
            const username = this.querySelector('a').getAttribute('data-username');

            // sendmsg-container 요소 가져오기
            const sendMsgContainer = document.querySelector('.sendmsg-container');
            if (sendMsgContainer) {
                // To. 옆에 사용자 이름 추가
                const peopleToElement = sendMsgContainer.querySelector('.ppl-to');
                if (peopleToElement) {
                    peopleToElement.innerText = username; // 사용자 이름 설정
                }

                // sendMsgContainer 표시
                sendMsgContainer.style.display = 'block';
            } else {
                console.warn('sendmsg-container 요소를 찾을 수 없습니다.');
            }
        });
    });

    // 모든 mailbox-list 요소들을 가져오기
    var mailboxLists = document.querySelectorAll('.mailbox-list');

    // 각 mailbox-list 요소에 클릭 이벤트 추가
    mailboxLists.forEach(function(mailbox) {
        mailbox.addEventListener('click', function(event) {
            // 체크박스 클릭 시 함수 종료
            if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
                return; // 체크박스를 클릭하면 함수 실행을 멈춤
            }

            // 읽으면 편지 읽음 표시 기능
            var readMail = this.querySelector('.mail-open img');
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

            // 답장기능
            let replyMsg = document.querySelector('.reply-msg');
            replyMsg.addEventListener("click", function() {
                let sendMsgContainer = document.querySelector('.sendmsg-container');
                sendMsgContainer.style.display = "block";

                // To. 옆에 발신자 이름 추가
                document.querySelector('.ppl-to').innerText = senderText;
            });
        });
    });
});

