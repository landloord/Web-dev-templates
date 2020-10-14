const open = document.querySelectorAll(".skills-list-subitem");
const mainplus = document.querySelectorAll(".skills-list-item span");
function acordian(item) {
  item.addEventListener("click", (e) => {
    let openClass = item.children[1];
    let plus = item.children[0].children[0];
    let section = item.children[0];
    if (e.target.classList.contains("subitem")) {
      return;
    } else {
      var panel = item.children[1];
      if (openClass.classList.contains("open")) {
        openClass.classList.remove("open");
        mainplus.forEach((i) => {
          i.textContent = "+";
          i.parentNode.style.backgroundColor = "#ffff";
          panel.style.maxHeight = null;
        });
      } else {
        open.forEach((e) => {
          e.classList.remove("open");
          e.style.maxHeight = null;
          e.parentNode.children[0].style.backgroundColor = "#ffffff";
        });
        mainplus.forEach((i) => {
          i.textContent = "+";
        });
        plus.textContent = "-";
        openClass.classList.add("open");
        section.style.backgroundColor = "#ffd4e1";
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
}
export default acordian;
