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