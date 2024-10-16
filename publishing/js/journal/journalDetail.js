$(function () {
    $("#header").load("../main/header.html", function() {
        bindButtonClicks(); // 헤더 로드 후 클릭 이벤트 바인딩
    });
    $("#footer").load("../main/footer.html");
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.place').forEach(button => {
        button.addEventListener('click', function() {
            console.log("Button clicked!"); // 클릭 시 로그
            this.classList.toggle('clicked'); // 클릭 시 클래스 토글
        });
    });
});
