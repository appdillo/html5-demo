if(localStorage.getItem('visits') == null)  localStorage.setItem('visits', 0);

function isOffline(){
  var visits = parseInt(localStorage.getItem('visits'));
  
  message =  '<p>Connected to internet?: '  +  window.navigator.onLine + "</p>";
  message += '<p>Visits: ' + visits + '</p>';
  
  $('#status-message').html(message);
  
  localStorage.setItem('visits', visits + 1);
}