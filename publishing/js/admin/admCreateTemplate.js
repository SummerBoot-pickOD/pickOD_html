document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $("#header").load("../../html/admin/admHeader.html");
  });

  $(function () {
    $("#footer").load("../../html/main/footer.html");
  });

  //placeholder 클릭 여부에 따라 노출 처리 바꾸기
  const tempTitle = document.getElementById('temp-title');

  tempTitle.addEventListener('focus', function () {
    this.placeholder = '';
  });

  tempTitle.addEventListener('blur', function () {
    this.placeholder = '템플릿 제목';
  });

  // DAY1..., 장소1... 태그 
  let currDay = 1;
  let currLocation = 1;
  let days = {
    1: {
      locations: {
        1: '',
        2: '',
        3: ''
      }
    }
  };

  window.switchDay = function (day) {
    currDay = day;
    currLocation = 1;
    updateDayTabs();
    updateLocationTabs();
    loadDescription();
  };

  window.switchLocation = function (day, location) {
    currLocation = location;
    loadDescription();
    updateLocationTabs();
  };

  window.addDay = function () {
    const newDay = Object.keys(days).length + 1;
    days[newDay] = { locations: { 1: '', 2: '', 3: '' } }; // New day with default 3 locations

    const dayTab = document.createElement('button');
    dayTab.className = 'days';
    dayTab.innerText = `DAY ${newDay}`;
    dayTab.onclick = () => switchDay(newDay);

    document.querySelector('.add-day').before(dayTab);
    switchDay(newDay);
  };

  window.addLocation = function (day) {
    const locationCount = Object.keys(days[day].locations).length + 1;
    days[day].locations[locationCount] = ''; // Add new empty location to this day

    const locationTab = document.createElement('button');
    locationTab.className = 'places';
    locationTab.innerText = `장소${locationCount}`;
    locationTab.onclick = () => switchLocation(day, locationCount);

    document.querySelector('.add-place').before(locationTab);
    switchLocation(day, locationCount); // Switch to new location
  };

  function updateDayTabs() {
    document.querySelectorAll('.days').forEach((tab, index) => {
      tab.classList.toggle('active', index + 1 === currDay);
    });
    updateLocationTabs();
  }

  function updateLocationTabs() {
    const locationsTabsContainer = document.getElementById('place-tabs');
    locationsTabsContainer.innerHTML = '';

    const locations = days[currDay].locations;
    Object.keys(locations).forEach((locationNum) => {
      const locationTab = document.createElement('button');
      locationTab.className = 'places';
      locationTab.innerText = `장소${locationNum}`;
      locationTab.classList.toggle('active', locationNum == currLocation);
      locationTab.onclick = () => switchLocation(currDay, locationNum);
      locationsTabsContainer.appendChild(locationTab);
    });

    const addPlaceBtn = document.createElement('button');
    addPlaceBtn.className = 'add-place';
    addPlaceBtn.innerText = '+';
    addPlaceBtn.onclick = () => addLocation(currDay);
    locationsTabsContainer.appendChild(addPlaceBtn);
  }

  function loadDescription() {
    const info = days[currDay].locations[currLocation];
    document.getElementById('place-info').value = info;
  }

  document.getElementById('place-info').addEventListener('input', function () {
    days[currDay].locations[currLocation] = this.value;
  });

  // Initialize
  updateDayTabs();

});