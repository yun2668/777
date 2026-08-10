const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");


// ==========================================
// 手機版選單
// ==========================================

if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", () => {

    const open = mainNav.classList.toggle("active");

    menuBtn.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

    menuBtn.textContent = open ? "✕" : "☰";

  });


  // 點擊選單項目後，自動收合
  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    });

  });


  // 從手機版切回電腦版時，自動關閉選單
  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

      mainNav.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    }

  });

}



// ==========================================
// 常見問題 FAQ
// ==========================================

document.querySelectorAll(".faq-item").forEach(item => {

  const button =
    item.querySelector(".faq-question");


  if (!button) return;


  button.addEventListener("click", () => {

    const isOpen =
      item.classList.contains("active");


    // 先關閉全部 FAQ
    document
      .querySelectorAll(".faq-item")
      .forEach(otherItem => {

        otherItem.classList.remove("active");

      });


    // 如果目前這題原本沒有打開
    // 就開啟目前這一題
    if (!isOpen) {

      item.classList.add("active");

    }

  });

});
