function validatePurchase(){
  //This is not secure and is only meant to illustrate how you can authenticate purhcases. This should ideally be done on the server side in the lanugage of your choice. 
  var developer_username = 'appdillo_username';
  var developer_password = 'password';
  
  var user_id = params()['user_id'];
  var app_id  = params()['app_id'];
  if(user_id != null && app_id != null){
  
    var url = 'http://api.appdillo.com/purchase?user_id=' + user_id + '&app_id' + app_id;
    var auth = "Basic " + Base64.encode(developer_username + ":" + developer_password);
    $.ajax({
        url : url,
        method : 'GET',
        beforeSend : function(req) {
            req.setRequestHeader('Authorization', auth);
        },
        complete : function(req, textStatus){
          switch(req.status){
            case 403: $('#purchase-message').html('<p>This user has purchased this app</p>');
            break;
            case 404: $('#purchase-message').html('<p>This user did not purchase this app</p>');
            break;
            case 403: $('#purchase-message').html('<p>Your credentials are not correct or you do not have access to validate this purchase.</p>');
            break;
          }        
        }
    });
  }
}

function params(){
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
  }
  return vars;
}
