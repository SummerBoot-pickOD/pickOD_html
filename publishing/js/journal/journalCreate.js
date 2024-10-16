// Flatpickr 달력 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 시작일 달력
    flatpickr("#start-date", {
        dateFormat: "Y-m-d", // 날짜 형식 (예: 2024-10-13)
        locale: "ko",        // 한국어 로케일
        position: "auto"     // 달력의 위치를 자동으로 조정
    });

    // 종료일 달력
    flatpickr("#end-date", {
        dateFormat: "Y-m-d", // 날짜 형식 (예: 2024-10-13)
        locale: "ko",        // 한국어 로케일
        position: "left"    // 달력을 왼쪽에 고정
    });

    // 헤더와 푸터 로드
    $(function () {
        $("#header").load("../main/header.html");
    });

    $(function () {
        $("#footer").load("../main/footer.html");
    });
});