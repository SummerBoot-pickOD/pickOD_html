$(function () {
    $("#header").load("../main/header.html", function() {
        // bindButtonClicks(); // 헤더 로드 후 클릭 이벤트 바인딩
    });
    $("#footer").load("../main/footer.html");
});

$(function() {
    // 시작일과 종료일에 달력 기능 적용
    $("#start-date").datepicker({
        dateFormat: "yy-mm-dd", // 원하는 날짜 형식
        changeMonth: true,
        changeYear: true
    });
    $("#end-date").datepicker({
        dateFormat: "yy-mm-dd", // 원하는 날짜 형식
        changeMonth: true,
        changeYear: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // saveimg 클래스를 가진 이미지를 선택
    const saveImage = document.querySelector('.saveimg');

    // saveimg 요소가 존재하는지 확인
    if (saveImage) {
        // 이미지 클릭 이벤트 추가
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

    // Day 버튼에 대한 이벤트 리스너 추가
    const addLocationButton = document.querySelector('.add-location-button');
    
    // add-location-button 요소가 존재하는지 확인
    if (addLocationButton) {
        addLocationButton.addEventListener('click', function() {
            const container = document.querySelector('.add-location'); // 추가할 요소의 부모 컨테이너
            const newInput = document.createElement('input');
            newInput.className = 'add-location-text';
            newInput.type = 'text';
            newInput.placeholder = '장소를 입력해주세요.';
            newInput.onfocus = function() { this.placeholder = ''; };
            newInput.onblur = function() { this.placeholder = '장소를 입력해주세요.'; };
            
            // 새로운 input 요소를 추가하고, 버튼도 같이 이동
            container.insertBefore(newInput, addLocationButton);
        });
    } else {
        console.warn('add-location-button 요소를 찾을 수 없습니다.');
    }
});
