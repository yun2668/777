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


  // 點選選單後，自動收合
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
// 常見問題 FAQ 展開 / 收合
// ==========================================

document.querySelectorAll(".faq-item").forEach(item => {

  const button =
    item.querySelector(".faq-question");


  // 找不到 FAQ 按鈕就跳過
  if (!button) return;


  button.addEventListener("click", () => {

    const isOpen =
      item.classList.contains("active");


    // 先把全部 FAQ 關閉
    document
      .querySelectorAll(".faq-item")
      .forEach(otherItem => {

        otherItem.classList.remove("active");

      });


    // 如果目前這一題原本沒開，就打開
    if (!isOpen) {

      item.classList.add("active");

    }

  });

});



// ==========================================
// 官方統計數字跳動動畫
// ==========================================

const counters =
  document.querySelectorAll(".count");


function animateCounter(element) {

  const target =
    Number(element.dataset.target || 0);


  // 沒有設定數字就停止
  if (!target) return;


  const duration = 1100;

  const start =
    performance.now();


  function update(now) {

    const progress =
      Math.min(
        (now - start) / duration,
        1
      );


    // 讓動畫開始慢、後面變快再慢下來
    const eased =
      1 - Math.pow(
        1 - progress,
        3
      );


    const currentValue =
      Math.floor(
        target * eased
      );


    element.textContent =
      currentValue.toLocaleString("zh-TW");


    // 尚未完成就繼續動畫
    if (progress < 1) {

      requestAnimationFrame(update);

    }

  }


  requestAnimationFrame(update);

}



// ==========================================
// 滑到數據區時才開始跳數字
// ==========================================

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting &&
            !entry.target.dataset.animated
          ) {

            entry.target.dataset.animated =
              "true";


            animateCounter(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.4
      }

    );


  counters.forEach(counter => {

    observer.observe(counter);

  });

}


// 舊版瀏覽器不支援 IntersectionObserver
// 就直接顯示動畫
else {

  counters.forEach(counter => {

    animateCounter(counter);

  });

}
