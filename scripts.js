// scripts.js
document.querySelectorAll('.feedback-icon').forEach(item => {
  item.addEventListener('click', function() {
      document.getElementById('response-message').textContent = "Thank you for your response!";
      document.querySelector('.comment-box').style.display = 'block';
  });
});
