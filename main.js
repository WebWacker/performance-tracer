let btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
  // Load saved grade on page load
  const savedGrade = localStorage.getItem(btn.id);
  if (savedGrade) {
    btn.textContent = savedGrade;
    setGradeStyle(btn, savedGrade);
  }
  // On page load
btn.textContent = savedGrade || '-';

  btn.addEventListener('click', function() {
    let grade = prompt('Enter grade!');
    if (['A', 'B', 'C', 'D', 'E', 'U'].includes(grade.toUpperCase())) {
      grade = grade.toUpperCase();
      btn.textContent = grade;
      setGradeStyle(btn, grade);
      localStorage.setItem(btn.id, grade);
    } else {
      alert('Please enter a suitable grade!');
      btn.textContent = '';
      localStorage.removeItem(btn.id);
    }
  });
})

// Helper function for styles
function setGradeStyle(btn, grade) {
  const colors = {
    A: 'lime',
    B: 'blue',
    C: 'blue',
    D: 'red',
    E: 'red',
    U: 'red',
  };
  btn.style.color = colors[grade];
    }
