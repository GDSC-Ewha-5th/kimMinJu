//첫번째 드롭다운 (프로필 우측)
document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox and the dropdown content
    const checkbox = document.getElementById("check");
    const dropdownContent = document.querySelector(".dropdown-content-top");

    // Get the check_label element
    const checkLabel = document.querySelector(".check_label");

    // Add a click event listener to the check_label
    checkLabel.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the default behavior of the label
      checkbox.checked = !checkbox.checked; // Toggle the checkbox
    });

    // Add a click event listener to the document to close the dropdown when clicking outside
    document.addEventListener("click", function(event) {
      if (checkbox.checked && event.target !== checkLabel) {
        checkbox.checked = false;
      }
    });

    // Prevent the dropdown from closing when clicking inside
    dropdownContent.addEventListener("click", function(event) {
      event.stopPropagation();
    });
});

//두번째 드롭다운 (오늘/이번주..)
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("week");
    const label = document.querySelector(".week");
    const dropdownContent = document.querySelector(".dropdown-content-main");
    const dropdownItems = document.querySelectorAll(".dropdown-content-main a");
  
    // Handle click on the label
    label.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the checkbox from changing when clicking the label
      checkbox.checked = !checkbox.checked; // Toggle the checkbox
    });
  
    // Handle click on a dropdown item
    dropdownItems.forEach(function (item) {
      item.addEventListener("click", function () {
        label.querySelector("b").textContent = item.textContent; // Update the label text
        checkbox.checked = false; // Close the dropdown
    });
});
});

//modal창
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const contentCards = document.querySelectorAll(".content");
  const modalContent = modal.querySelector(".modal-content");
  const closeButton = modal.querySelector(".close-button");
  const modalContentInner = modal.querySelector(".modal-content-inner");

  contentCards.forEach((contentCard) => {
    contentCard.addEventListener("click", function () {
      const contentToDisplay = contentCard.cloneNode(true);
      modalContentInner.innerHTML = "";
      modalContentInner.appendChild(contentToDisplay);

      modal.style.display = "block";
      document.body.style.overflowY = "hidden";

    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";

  });

  // window.addEventListener("click", function (event) {
  //   if (event.target === modal) {
  //     modal.style.display = "none";
  //   }
  // });
});

// darkmode 구현
// 로컬스토리지 데이터 읽기(darkMode keyName 읽기)
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkModeToggle');

const enableDarkMode = () => {
  // body 태그에 다크모드 클래스 추가
  document.body.classList.add('dark-mode');
  // 로컬스토리지에 다크모드 키-값 생성
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // body 태그에 다크모드 클래스 제거
  document.body.classList.remove('dark-mode');
  // 로컬스토리지에 다크모드 키의 값을 null로 업데이트
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') enableDarkMode();

darkModeToggle.addEventListener('click', () => {
  // 클릭 시마다 초기화
  darkMode = localStorage.getItem('darkMode');
  // 만약 다크모드가 활성화 되어 있지 않다면
  if (darkMode !== 'enabled') {
    // 다크모드 활성화 함수 호출
    enableDarkMode();
    darkModeToggle.textContent = '다크모드 비활성화';
  } else {
    // 그렇지 않다면(활성화 되어 있다면) 비활성화 함수 호출
    disableDarkMode();
    darkModeToggle.textContent = '다크모드 활성화';
  }
});