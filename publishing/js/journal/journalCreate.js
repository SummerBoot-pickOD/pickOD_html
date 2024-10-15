let dayCount = 1;

// + 버튼 클릭 시 새로운 DAY 추가
document.getElementById('addButton').addEventListener('click', () => {
    dayCount++;
    
    const dayContainer = document.getElementById('dayContainer');
    const newDay = document.createElement('span');
    newDay.textContent = `DAY ${dayCount}`;
    newDay.classList.add('day');
    
    // 새로운 DAY에 클릭 이벤트 추가
    newDay.addEventListener('click', function() {
        updateActiveDay(newDay);
    });
    
    dayContainer.appendChild(newDay);
});

// 눌린 DAY를 활성화하고 나머지를 비활성화하는 함수
function updateActiveDay(activeDay) {
    const days = document.querySelectorAll('.day');
    
    days.forEach(day => {
        day.classList.remove('active'); // 모든 DAY의 활성화 해제
        day.style.backgroundColor = '#7C7C7C'; // 기본 배경 색상으로
        day.style.color = 'white';
    });
    
    activeDay.classList.add('active'); // 눌린 DAY 활성화
    activeDay.style.backgroundColor = '#FEF2F2'; // 눌린 DAY 배경 색상
    activeDay.style.color = 'black'; // 눌린 DAY 글자 색상
}

// 기본으로 DAY 1에 클릭 이벤트 추가
document.querySelector('.day').addEventListener('click', function() {
    updateActiveDay(this);
});