const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");

    if (index === 0) panels[0].classList.add("active"); // Overview
    if (index === 1) panels[1].classList.add("active"); // Sessions
    if (index === 2) panels[2].classList.add("active"); // Engagement
    if (index === 3) panels[3].classList.add("active"); // Q&A
  });
});



