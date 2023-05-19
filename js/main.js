// ----------
// ----------
// Navigation
// ----------
// ----------

// Selecting navigation links and the triggered toggle
const navLinks = document.querySelectorAll(".nav-links");
const navToggle = document.getElementById("page-nav-toggle");
const openPhased = document.getElementById("open-phased");

// Looping through each link
navLinks.forEach((link) => {
   // If you click a link the menu will disappear
   link.addEventListener("click", () => {
      if (navToggle.checked == true) { navToggle.checked = !navToggle.checked }
   });
});

openPhased.addEventListener("click", () => {
   if (navToggle.checked == true) { navToggle.checked = !navToggle.checked }
});

// Nav fix
function updateHorizontalMargin() {
   const hero = document.querySelector('.hero');
   const computedStyle = getComputedStyle(hero);
   const horizontalMargin = computedStyle.marginInlineStart;
   document.documentElement.style.setProperty('--horizontal-margin', horizontalMargin);
}
 
window.addEventListener('resize', updateHorizontalMargin);
