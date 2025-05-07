function sendMelding() {
    alert("Melding sendt!");
}

function darkmode() {
    /* funker ikke :() */
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('comment').value;
    document.getElementById('comment-section').innerHTML += `<p>${input}</p>`;
});
