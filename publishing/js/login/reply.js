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
$(".likes img[alt='좋아요']").click(function(){
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
})

// 더보기 누르면 스크롤 형태로 다 보여줌
$("#reply-more").click(function(){
  $("#reply").css('height','600px');
  $("#reply").css('overflow-y','scroll');
  $("#reply-more").css('display','none');
})

  //삭제 누르면 삭제되고
$(".reply-buttons>img[alt='삭제']").click(function(){
  if(confirm("정말 삭제하시겠습니까?") == false){
    return;
  }
    //db처리
  $(this).closest(".written").remove();
  alert("삭제가 완료되었습니다.")
})
//근데 추가한 댓글을 바로 삭제하는 법을 모르겠네;;



//신고하기
//이거는 같은 신고하기 모달을 쓰니까 같이 연결하는걸로
