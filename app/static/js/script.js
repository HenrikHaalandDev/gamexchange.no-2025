function sendMelding() {
    alert("Melding sendt!");
}


// theme switch
document.addEventListener('DOMContentLoaded',() => {
    const savedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', savedTheme || 'light');
});

const toggleButton = document.getElementById('theme-switch')

toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light': 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
})



document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('comment').value;
    document.getElementById('comment-section').innerHTML += `<p>${input}</p>`;
});
