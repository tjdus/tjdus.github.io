// 스크롤 시 네비게이션 하이라이트
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  // 현재 뷰포트에 있는 섹션을 찾아 네비게이션 하이라이트
  function highlightNavigation() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "";
      link.style.backgroundColor = "";

      if (link.getAttribute("href") === "#" + currentSection) {
        link.style.color = "var(--primary-color)";
        link.style.backgroundColor = "var(--bg-gray)";
      }
    });
  }

  // 스크롤 이벤트 리스너
  window.addEventListener("scroll", highlightNavigation);

  // 초기 실행
  highlightNavigation();

  // 부드러운 스크롤 (이미 CSS에서 처리되지만 추가 제어)
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // 프린트 전 준비 (옵션)
  window.addEventListener("beforeprint", function () {
    console.log("포트폴리오를 PDF로 출력합니다...");
  });

  window.addEventListener("afterprint", function () {
    console.log("PDF 출력이 완료되었습니다.");
  });
});
