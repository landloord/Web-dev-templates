const themeToggle = document.querySelector(".toggle");
const body = document.querySelector(".bdy");
const navPopup = document.querySelector(".sub-services");
const navList = document.querySelectorAll(".nav-items");
const listParent = document.querySelector(".list");
const dropdown = document.querySelector(".dropdown");
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.classList.toggle("active");
});

navList.forEach((item) => {
  item.addEventListener("click", (event) => {
    for (const element of navList) {
      element.classList.remove("active");
      if (item.classList.contains("list")) {
        navPopup.classList.remove("hidden");
        dropdown.classList.add("dropped");
        navPopup.addEventListener("mouseout", () => {
          setTimeout(() => {
            navPopup.classList.add("hidden");
            dropdown.classList.remove("dropped");
          }, 600);
        });
      } else {
        navPopup.classList.add("hidden");
        dropdown.classList.remove("dropped");
      }
    }
    item.classList.add("active");
  });
});
