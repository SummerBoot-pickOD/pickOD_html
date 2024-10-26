$(function () {
  $("#header").load("../main/header.html");
});

$(function () {
  $("#footer").load("../main/footer.html");
});

$(function () {
  $("#report").load("../report/reportSend.html");
});


//작성자가 본인이 아니라면 휴지통 아이콘 지우는 버튼 없애야하고
//$(".reply-buttons>img[alt='삭제']").css('display','none');

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
  
  