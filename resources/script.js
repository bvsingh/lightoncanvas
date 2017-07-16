$(document).ready(function(){
  $('#toggleButton').click(function(){
    $('#downloadRequester').slideToggle('slow');
  });
  $('#registerButton').click(function(){
    var emailControl = document.getElementById('emailAddress');
    request(emailControl.value);
  });

});

function isValidEmail(str) 
{
   return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
}

function request(emailAddress) {
    var statusCtrl = document.getElementById('status');
    if (isValidEmail(emailAddress)) {
        statusCtrl.innerHTML = "Thank you!!!";
        sendRequest(emailAddress);
    }else {
        statusCtrl.innerHTML = "Invalid email address!!!";
    }
}

function sendRequest(emailAddress) {
    var url = "../../cgi-bin/downloadRequest.cgi";

    var dataTosend = "emailAddress="+emailAddress;

    var callback = function(dataReceived) {
        $('#downloadRequester').slideToggle('slow');
        console.log(dataReceived);
    }
    var typeOfDataToReceive = 'html';
    $.get(url, dataTosend, callback, typeOfDataToReceive);
}             

