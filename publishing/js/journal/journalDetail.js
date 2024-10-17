$(function () {
    $("#header").load("../main/header.html", function() {
        bindButtonClicks(); // 헤더 로드 후 클릭 이벤트 바인딩
    });
    $("#footer").load("../main/footer.html");
});

document.addEventListener('DOMContentLoaded', function() {
    // saveimg 클래스를 가진 이미지를 선택
    const saveImage = document.querySelector('.saveimg');

    // 이미지 클릭 이벤트 추가
    saveImage.addEventListener('click', function() {
        // 현재 이미지의 src를 확인하여 변경
        if (saveImage.src.includes('unsaved.png')) {
            saveImage.src = '../../img/main/saved.png'; // 이미지 변경
        } else {
            saveImage.src = '../../img/main/unsaved.png'; // 원래 이미지로 복원
        }
    });
});

