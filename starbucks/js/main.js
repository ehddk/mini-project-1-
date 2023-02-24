const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector(".search input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY); //화면이 위에서부터 몇 px 지점에 위치해있는지? 확인 가능
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  //fadein이라는 요소들의 갯수만큼 forEach에 인수에 적을 함수가 실행됨.
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자,옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
 // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
 isHidePromotion = !isHidePromotion
 // 요소를 숨겨야 하면,
 if (isHidePromotion) {
   promotionEl.classList.add('hide')
 // 요소가 보여야 하면,
 } else {
   promotionEl.classList.remove('hide')
 }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector){
  //gsap.to(요소,시간,옵션); 애니메이션 라이브러리
  gsap.to(selector, 1, {
      y:20,
      repeat: -1, //무한반복
      yoyo:true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut,
      delay:1
  });
}
floatingObject('.floating');