document.addEventListener('DOMContentLoaded', function() {
    $(function () {
        $("#header").load("../main/header.html");
    });

    $(function () {
        $("#footer").load("../main/footer.html");
    });

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
});