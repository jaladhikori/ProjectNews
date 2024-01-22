// Your JavaScript code goes here (if needed)
// Function to toggle between "Read more" and "Read less"
function toggleText(cardId) {
    var dots = document.getElementById(`dots-${cardId}`);
    var moreText = document.getElementById(`more-${cardId}`);
    var btnText = document.getElementById(`toggleBtn-${cardId}`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
