// Example of handling form submit
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thanks for contacting us, ' + document.getElementById('name').value + '!');
        form.reset();
      });
    }
  });