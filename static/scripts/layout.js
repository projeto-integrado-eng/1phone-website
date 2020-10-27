// Initialize header
const header = document.getElementsByTagName("header")[0];

// Enable header shadow based on whether or not user has scrolled farther than header height.
window.onscroll = () => {
  header.style.boxShadow =
    window.scrollY < header.offsetHeight ? "none" : "var(--shadow)";
};

// Initialize RellaxJS
const rellax = new Rellax(".rellax");
