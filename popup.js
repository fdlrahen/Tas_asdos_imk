document.getElementById('open-popup').addEventListener('mousemove', function() {
    document.getElementById('popup').style.display = 'flex';
  });
  
  document.getElementsByClassName('close-btn')[0].addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });