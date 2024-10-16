//헤더푸터
$(function () {
  $("#header").load("../main/header.html");
  });
  
  $(function () {
  $("#footer").load("../main/footer.html");
  });


// 모달 열기
const modal = document.getElementById("dateRangeModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveDateBtn = document.getElementById("saveDateBtn");
const displayDateRange = document.getElementById("displayDateRange");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

openModalBtn.onclick = function() {
  modal.style.display = "flex";
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

saveDateBtn.onclick = function() {
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  if (startDate && endDate) {
    if (new Date(startDate) <= new Date(endDate)) {
      displayDateRange.textContent = `${startDate} ~ ${endDate}`;
      modal.style.display = "none";
    } else {
      alert("출발일은 도착일보다 이전이어야 합니다.");
    }
  } else {
    alert("출발일과 도착일을 모두 선택해주세요.");
  }
}

// 모달 외부를 클릭하면 닫기
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.addEventListener('DOMContentLoaded', function () {
  let placeCount = 0; // 장소 순번 관리
  let currentDaySpotContainer = null; // 현재 선택된 dayspot-container를 저장하는 변수

  // 장소 추가 모달 관련 요소
  const addSpotModal = document.querySelector('.addspot-container');
  const closeAddSpotBtn = document.querySelector('.addspot-container .close-btn');
  const savedPlaces = document.querySelectorAll('.place-list button');

  // 이벤트 위임을 사용하여 동적으로 생성된 '장소추가' 버튼에 이벤트 핸들러 적용
  document.addEventListener('click', function (e) {
    // 장소추가 버튼 클릭 시
    if (e.target && e.target.classList.contains('add-spot-btn')) {
      addSpotModal.style.display = 'flex'; // 모달창 표시
      currentDaySpotContainer = e.target.closest('.dayplan-container').querySelector('.dayspot-container'); // 선택된 dayspot-container
    }
  });

  // 모달 닫기 버튼
  closeAddSpotBtn.onclick = function () {
    addSpotModal.style.display = 'none'; // 모달창 숨기기
  };

  // 장소 리스트에서 '추가' 버튼 클릭 시 해당 장소를 day-spot에 추가
  savedPlaces.forEach(button => {
    button.onclick = function () {
      placeCount += 1; // 장소 순번 증가
      const spotName = this.parentElement.textContent.trim(); // 장소 이름 가져오기
      console.log(spotName);
      // 기존 비어있는 day-spot이 있다면 그곳에 추가
      let existingDaySpot = currentDaySpotContainer.querySelector('.day-spot');
  

      // 만약 기존에 빈 day-spot이 있으면 그곳에 장소를 추가
      if (existingDaySpot && !existingDaySpot.querySelector('.order-spot').textContent) {
        existingDaySpot.querySelector('.order-num').textContent = placeCount; // 순번 추가
        existingDaySpot.querySelector('.order-spot').textContent = spotName; // 장소 이름 추가
      } else {
        // day-spot이 비어 있지 않거나 없는 경우, 새로운 day-spot을 생성
        const daySpotDiv = document.createElement('div');
        daySpotDiv.classList.add('day-spot'); // day-spot 클래스 추가

        // 순번 div 생성
        const orderNumDiv = document.createElement('div');
        orderNumDiv.classList.add('order-num');
        orderNumDiv.textContent = placeCount; // 순번 추가

        // 장소 이름 div 생성
        const orderSpotDiv = document.createElement('div');
        orderSpotDiv.classList.add('order-spot');
        orderSpotDiv.textContent = spotName; // 장소 이름 추가

        // day-spot에 order-num과 order-spot 추가
        daySpotDiv.appendChild(orderNumDiv);
        daySpotDiv.appendChild(orderSpotDiv);

        // 선택된 dayspot-container에 새로운 day-spot 추가
        currentDaySpotContainer.appendChild(daySpotDiv);
      }

      // 장소 추가 후 모달창 닫기
      addSpotModal.style.display = 'none';
    };
  });
});
// 메모수정부분
// 메모 추가 부분
document.addEventListener('DOMContentLoaded', function () {
  // 메모 추가 모달 관련 요소
  const memoModal = document.querySelector('.memo-container');
  const memoTextarea = document.getElementById('textarea');
  const saveMemoBtn = document.querySelector('.save');
  const closeMemoBtn = document.querySelector('.btn-close');
  let currentDaySpotContainer = null; // 현재 선택된 dayspot-container를 저장하는 변수

  // 이벤트 위임을 사용하여 동적으로 생성된 '메모추가' 버튼에 이벤트 핸들러 적용
  document.addEventListener('click', function (e) {
    // '메모추가' 버튼 클릭 시 모달 열기
    if (e.target && e.target.classList.contains('add-memo-btn')) {
      memoModal.style.display = 'flex'; // 메모 모달 표시
      currentDaySpotContainer = e.target.closest('.dayplan-container').querySelector('.dayspot-container'); // 선택된 dayspot-container 저장
    }

    // '닫기' 버튼 클릭 시 모달 닫기
    if (e.target && e.target.classList.contains('btn-close')) {
      memoModal.style.display = 'none';
      memoTextarea.value = ''; // 메모창 닫힐 때 텍스트 비우기
    }
  });

  // '확인' 버튼 클릭 시 메모를 추가하는 기능
  saveMemoBtn.onclick = function () {
    const memoText = memoTextarea.value.trim(); // 입력된 메모 내용

    if (memoText && currentDaySpotContainer) {
      // 기존에 비어 있는 memo-area가 있는지 확인
      let existingMemoArea = currentDaySpotContainer.querySelector('.memo-area');

      if (existingMemoArea && existingMemoArea.textContent.trim() === '') {
        // 기존 memo-area가 비어 있으면 그곳에 메모 추가
        existingMemoArea.textContent = memoText;
      } else {
        // 새로운 memo-area 생성 후 추가
        const memoDiv = document.createElement('div');
        memoDiv.classList.add('memo-area'); // 메모 내용이 들어갈 div (클래스명 .memo-area 적용)
        memoDiv.textContent = memoText;

        // 마지막 day-spot의 다음에 메모 추가
        const lastDaySpot = currentDaySpotContainer.querySelector('.day-spot:last-child');
        if (lastDaySpot) {
          lastDaySpot.insertAdjacentElement('afterend', memoDiv); // 마지막 day-spot 바로 다음에 메모 추가
        } else {
          // 만약 day-spot이 없으면 dayspot-container에 메모 바로 추가
          currentDaySpotContainer.appendChild(memoDiv);
        }
      }

      memoModal.style.display = 'none'; // 메모 모달 닫기
      memoTextarea.value = ''; // 메모창 닫힐 때 텍스트 비우기
    } else {
      alert('메모를 입력하세요.');
    }
  };
});


// 여기까지
// // 메모 추가 부분
// document.addEventListener('DOMContentLoaded', function () {
//   // 메모 추가 모달 관련 요소
//   const memoModal = document.querySelector('.memo-container');
//   const memoTextarea = document.getElementById('textarea');
//   const saveMemoBtn = document.querySelector('.save');
//   const closeMemoBtn = document.querySelector('.btn-close');
//   let currentMemoArea = null; // 현재 메모가 추가될 .memo-area를 저장하는 변수

//   // 이벤트 위임을 사용하여 동적으로 생성된 '메모추가' 버튼에 이벤트 핸들러 적용
//   document.addEventListener('click', function (e) {
//     // '메모추가' 버튼 클릭 시 모달 열기
//     if (e.target && e.target.classList.contains('add-memo-btn')) {
//       memoModal.style.display = 'flex'; // 메모 모달 표시
//       currentMemoArea = e.target.closest('.dayplan-container').querySelector('.memo-area'); // 선택된 .memo-area 저장

//       // 만약 .memo-area가 존재하지 않으면 새로 생성해 추가
//       if (!currentMemoArea) {
//         currentMemoArea = document.createElement('div');
//         currentMemoArea.classList.add('memo-area');
//         e.target.closest('.dayplan-container').appendChild(currentMemoArea);
//       }
//     }

//     // '닫기' 버튼 클릭 시 모달 닫기
//     if (e.target && e.target.classList.contains('btn-close')) {
//       memoModal.style.display = 'none';
//       memoTextarea.value = ''; // 메모창 닫힐 때 텍스트 비우기
//     }
//   });

//   // '확인' 버튼 클릭 시 메모를 추가하는 기능
//   saveMemoBtn.onclick = function () {
//     const memoText = memoTextarea.value.trim(); // 입력된 메모 내용

//     if (memoText && currentMemoArea) {
//       const memoDiv = document.createElement('div');
//       memoDiv.classList.add('memo-entry'); // 메모 내용이 들어갈 div
//       memoDiv.textContent = memoText;

//       currentMemoArea.appendChild(memoDiv); // .memo-area에 메모 추가
//       memoModal.style.display = 'none'; // 메모 모달 닫기
//       memoTextarea.value = ''; // 메모창 닫힐 때 텍스트 비우기
//     } else {
//       alert('메모를 입력하세요.');
//     }
//   };
// });


// 날짜의 길이만큼 div박스 추가
document.addEventListener('DOMContentLoaded', function () {
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  const displayDateRange = document.getElementById('displayDateRange');
  const saveDateBtn = document.getElementById('saveDateBtn');
  const main = document.querySelector('main'); // 메인 컨테이너에 dayplan-container 추가

  // 날짜 차이 계산 함수
  function calculateDaysBetween(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // 양쪽 날짜 포함
    return diffDays;
  }

  // 날짜 형식 변환 함수 (YYYY-MM-DD -> MM/DD 형식)
  function formatDateToMD(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();
    return `${month}/${day}`;
  }

  // 저장 버튼 클릭 시 실행
  saveDateBtn.addEventListener('click', function () {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (startDate && endDate) {
      // 날짜 범위 표시
      displayDateRange.innerHTML = `<div>여행 날짜: ${startDate} ~ ${endDate}</div>`;

      // 기존 dayplan-container 삭제 (있다면)
      document.querySelectorAll('.dayplan-container').forEach(container => container.remove());

      // 날짜 차이 계산
      const numDays = calculateDaysBetween(startDate, endDate);

      // 날짜만큼 dayplan-container 추가
      for (let i = 0; i < numDays; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + i); // 날짜 증가

        const dayPlanContainer = document.createElement('div');
        dayPlanContainer.classList.add('dayplan-container');

        // 각 daybox 생성 및 날짜 표시
        const dayBox = document.createElement('div');
        dayBox.classList.add('day-box');
        const dayNumber = i + 1;
        const formattedDate = formatDateToMD(currentDate.toISOString().split('T')[0]);

        dayBox.innerHTML = `<span class="daynum">Day ${dayNumber}</span> <span class="datenum">${formattedDate}</span>`;
        dayPlanContainer.appendChild(dayBox);

        // dayspot-container 추가
        const dayspotContainer = document.createElement('div');
        dayspotContainer.classList.add('dayspot-container');

        // 기본 day-spot을 dayspot-container에 추가
        const daySpot = document.createElement('div');
        daySpot.classList.add('day-spot');
        daySpot.innerHTML = `
          <div class="order-num"></div>
          <div class="order-spot"></div>
        `;
        dayspotContainer.appendChild(daySpot);

        dayPlanContainer.appendChild(dayspotContainer);

        // dayspot-container 추가
        const memoArea = document.createElement('div');
        memoArea.classList.add('memo-area');
        // 버튼 영역 추가
        const btnArea = document.createElement('div');
        btnArea.classList.add('btn-area');
        btnArea.innerHTML = `
          <button type="button" class="add-spot-btn">장소추가</button>
          <button type="button" class="add-memo-btn">메모추가</button>
        `;
        dayPlanContainer.appendChild(btnArea);

        // dayplan-container를 main에 추가
        main.appendChild(dayPlanContainer);
      }
    } else {
      alert('날짜를 선택해주세요.');
    }
  });
});