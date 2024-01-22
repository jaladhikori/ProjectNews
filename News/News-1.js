document.addEventListener('DOMContentLoaded', function () {
    var readMoreButtons = document.querySelectorAll('.read-more');
  
    readMoreButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = this.getAttribute('data-target');
        var newsContent = document.getElementById(target).querySelector('.card-body');
  
        if (newsContent.style.display === 'none' || newsContent.style.display === '') {
          newsContent.style.display = 'block';
          this.textContent = 'Read less';
        } else {
          newsContent.style.display = 'none';
          this.textContent = 'Read more';
        }
      });
    });
  });