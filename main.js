/* alert("안녕하세요!"); */

document.documentElement.style.setProperty('font-family','Quicksand');
  
function moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// 스크롤 위치에 따라 버튼 보이기/숨기기
window.addEventListener("scroll", function() {
  const moveTopBtn = document.querySelector(".moveTopBtn");
  if (window.pageYOffset > 100) {
    moveTopBtn.style.opacity = "1";
    moveTopBtn.style.transition = "opacity 0.5s ease";
  } else {
    moveTopBtn.style.opacity = "0";
    moveToTop.style.visibility="hidden";
    moveTopBtn.style.transition = "opacity 0.2s ease";
  }
});

/* 메인 페이지 버튼 함수 */
function music() {
  setTimeout(function(){
    window.location.href = "mymusic.html";}, 100);
}
function study() {
  setTimeout(function(){
    window.location.href = "mystudy.html";}, 100);
}
function memory() {
  setTimeout(function(){
    window.location.href = "mymemory.html";}, 100);
}
