document.addEventListener("DOMContentLoaded", function () {
  // === 外部連結按鈕功能 ===
  document.querySelectorAll(".link-button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });

  // === 夜間模式切換功能 ===
  const darkBtn = document.getElementById("toggle-dark");
  if (darkBtn) {
    darkBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }

  // === 排版方向切換功能 ===
  const layoutBtn = document.getElementById("toggle-layout");
  if (layoutBtn) {
    layoutBtn.addEventListener("click", function () {
      const main = document.getElementById("main-content");
      if (main) {
        main.classList.toggle("horizontal-layout");
      }
    });
  }
});
