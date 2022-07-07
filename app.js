const correctAnswears = ['B', 'D', 'A', 'A', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let points = 0;
    const userAnswears = [form.question1.value, form.question2.value, form.question3.value, form.question4.value, form.question5.value];

    for (let i = 0; i < userAnswears.length; i++) {
        if (userAnswears[i] == correctAnswears[i]) {
            points++;
        }
    }

    result.querySelector('span').textContent = points;
    result.classList.remove('none');
});