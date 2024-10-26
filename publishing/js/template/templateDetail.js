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
document.addEventListener('DOMContentLoaded', function () {
  // saveimg 클래스를 가진 이미지를 선택
  const saveImage = document.querySelector('.saveimg');

  // 이미지 클릭 이벤트 추가
  if (saveImage) {
      saveImage.addEventListener('click', function () {
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
  // const reportImg = document.querySelector('.reportimg');
  // if (reportImg) {
  //     reportImg.addEventListener('click', function () {
  //         // 모달을 열기
  //         $(".modal-container").css("display", "block");
  //     });
  // }
});
$(".reportimg").click(function(){
  $(".modal-container").css("display","block");
});

 // 모달 닫기 버튼 이벤트
 $(".close-modal").click(function() {
  $(".modal-container").css("display", "none");
});

// 모달 영역 외부 클릭 시 모달 닫기
$(window).click(function(event) {
  if ($(event.target).hasClass('modal-container')) {
      $(".modal-container").css("display", "none");
  }
});


    // 모든 .place 요소에 대해 클릭 이벤트 리스너 추가
    document.querySelectorAll('.place').forEach(place => {
        const places = document.querySelectorAll('.place');
        const triangle = document.querySelector('.triangle'); // 삼각형 요소 선택
        const container = document.querySelector('.template-detail-container'); // 컨테이너 요소 선택
    
        // 각 요소에 클릭 이벤트 리스너 추가
        places.forEach(place => {
            place.addEventListener('click', () => {
                // 모든 .place 요소에서 clicked 클래스를 제거
                places.forEach(p => {
                    p.classList.remove('clicked');
                });
    
                // 클릭한 요소에 clicked 클래스 추가
                place.classList.add('clicked');
    
                // 클릭된 요소의 중앙 좌표 계산
                const placeRect = place.getBoundingClientRect(); // 클릭된 요소의 위치 정보
                const placeCenter = placeRect.left + (placeRect.width / 2); // 중앙 좌표 계산
                const containerRect = container.getBoundingClientRect(); // 컨테이너의 위치 정보
    
                // 삼각형을 클릭된 요소의 중앙으로 이동
                const leftOffset = placeCenter - containerRect.left; // 컨테이너 기준으로 좌표 계산
                triangle.style.left = `${leftOffset}px`; // 삼각형 위치 업데이트
            });
        });
    });



//작성자가 본인이 아니라면 휴지통 아이콘 지우는 버튼 없애야하고
//$(".reply-buttons>img[alt='삭제']").css('display','none');


//등록버튼 누르면 아래에 댓글 추가
$("#submit-reply").click(function(){
    text = $("#reply-write>input").val();
    if (text.length == 0){
      alert("댓글을 작성하고 등록 버튼을 눌러주세요.");
      return;
    }
    //작성자의 정보를 끌고 온 다음 적절히 넣어야겠지
    newReply = `<li class = "written">
          <div class="reply-image"><img src="../../img/place/sample_place.png" alt="프사"></div>
          <div class="reply-content">
            <div class = "content">`+text+`</div>
            <div class = "user"><span id = "nick">김카디</span>&nbsp;&nbsp;<span id = "date">24.10.16</span></div>
            <div class = "likes"><img src="../../img/journal/footprint.png" alt="좋아요"><span>35</span></div>
          </div>
          <div class="reply-buttons">
            <img src="../../img/message/쪽지함휴지통.png" alt="삭제">
            <img src="../../img/message/report.png" alt="신고">
          </div>
        </li>`
  
    $("#reply").prepend(newReply);
    //맨 앞에 넣게 할거면 append 대신 prepend도 가능
  })
  
  
  // 좋아요 누르면 등록 + 숫자 하나 올라감
  picked = "../../img/journal/footprint_pick.png"
  Npicked = "../../img/journal/footprint.png"
  $("#reply").on('click', ".likes img[alt='좋아요']",function(){
    //좋아요가 여러개이기 때문에, $(this)로 클릭당한 자신을 기준으로 해야 됨
    now = $(this).attr('src');
    cnt = Number($(this).siblings('span').text())
    if (now == picked){
      $(this).attr('src',Npicked);
      $(this).siblings('span').text(String(cnt-1));
    }else{
      $(this).attr('src',picked);
      $(this).siblings('span').text(String(cnt+1));
    }
    return;
  });
  
  //삭제 누르면 삭제되고
  $("#reply").on('click', ".reply-buttons>img[alt='삭제']", function(){
    if(confirm("정말 삭제하시겠습니까?") == false){
      return;
    }
      //db처리
    $(this).closest(".written").remove();
    alert("삭제가 완료되었습니다.")
  })
  
  //여기서 $("#reply").on('click', 선택자, function(){}) 이렇게 한 이유는,
  //js에서 새로 작성한 html에는 이벤트가 직접적으로는 등록이 안됨.
  //그래서 원래 html에 있던 요소를 매개로 등록해줘야함.
  //#reply의 자손 중에 선택자에 해당하는 모든 요소에게 해당 이벤트를 부여한다 - 이런 뜻임.
  
  // 더보기 누르면 스크롤 형태로 다 보여줌
  $("#reply-more").click(function(){
    $("#reply").css('height','600px');
    $("#reply").css('overflow-y','scroll');
    $("#reply-more").css('display','none');
  })
  
  //추가한 댓글 바로 삭제 서
  
  //신고하기
  //이거는 같은 신고하기 모달을 쓰니까 같이 연결하는걸로