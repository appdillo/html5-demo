function updateLocation(coordinates){
  var errorHandler = function(error) {  
     switch(error.code){  
         case error.PERMISSION_DENIED: alert("User did not share geolocation data");  
         break;  
         case error.POSITION_UNAVAILABLE: alert("Could not detect current position");  
         break;  
         case error.TIMEOUT: alert("retrieving position timed out");  
         break;  
         default: alert("WTF apple?");  
         break;  
     }  
  };  
  
  var locationHandler = function(location){
    message = '';
    message +="<p>Longitude: " + location.coords.longitude + "</p>";
    message +="<p>Accuracy: "  + location.coords.accuracy + "</p>";
    message +="<p>Latitude: "  + location.coords.latitude + "</p>";
    $('#location').html(message);
  };
  
  navigator.geolocation.getCurrentPosition(locationHandler, errorHandler);   
}    
    
