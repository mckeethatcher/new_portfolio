const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
 
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
const links = document.querySelectorAll('header ul li a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'white';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = 'black';
  });
});
const welcome = document.querySelector('.welcome');
const text = welcome.textContent;
welcome.textContent = '';

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i];
  span.style.opacity = 0;
  welcome.appendChild(span);

  setTimeout(() => {
    span.style.opacity = 1;
  }, i * 50);
}


ejs 