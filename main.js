javascript
// Animate on click for project cards
const projects = document.querySelectorAll('.project-card');
projects.forEach(project => {
  project.addEventListener('click', () => {
    alert("✨ Here's more about this project — stay tuned for magic!");
  });
});
