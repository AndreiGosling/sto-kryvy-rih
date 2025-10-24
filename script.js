document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.spisok a');
  const button = document.getElementById('contact');

  links.forEach(link => {
    link.addEventListener('click', () => {
      
      setTimeout(() => {
        button.classList.add('jelly');
        setTimeout(() => button.classList.remove('jelly'), 600);
      }, 300);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("contact");
  const info = document.getElementById("call-info");

  if (btn && info) {
    btn.addEventListener("click", () => {
      info.classList.toggle("show");
    });
  }
});