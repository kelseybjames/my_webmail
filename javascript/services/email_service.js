 
MailerApp.factory('emailService',['$window','env', function($window,env){

  var obj = {};
  var msgs = [];

  var getMsgs = function(){
    return msgs;
  };

  obj.loadGmailApi = function() {
    $window.gapi.client.load('gmail', 'v1', obj.displayInbox);
  };

  obj.displayInbox = function() {
    var request = gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'labelIds': 'INBOX',
      'maxResults': 100
    })
  
    request.execute(function(response) {
      response.messages.forEach(function(item) {
        var messageRequest = $window.gapi.client.gmail.users.messages.get({
          'userId': 'me',
          'id': item.id
        });

        messageRequest.execute(obj.appendMessageRow);
      });
   });
  }

  obj.appendMessageRow = function(message) { 
    var currMsg;

    currMsg.header = obj.getHeader(message.payload.headers, 'From');
    currMsg.id = message.id;
    currMsg.subject = obj.getHeader(message.payload.headers, 'Subject');
    currMsg.dates = obj.getHeader(message.payload.headers, 'Date');

    msgs.push(currMsg);
  }

  var getHeader = function() (headers, index) {
      var header = '';
      $.each(headers, function(){
        if(this.name === index){
          header = this.value;
        }
      });
      return header;
  }
  
  var getBody = function(message) {
      var encodedBody = '';
      if(typeof message.parts === 'undefined')
      {
        encodedBody = message.body.data;
      }
      else
      {
        encodedBody = getHTMLPart(message.parts);
      }
      encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
      return decodeURIComponent(escape(window.atob(encodedBody)));
  }
  

  var getHTMLPart = function(arr) {
    for(var x = 0; x <= arr.length; x++)
    {
      if(typeof arr[x].parts === 'undefined')
      {
        if(arr[x].mimeType === 'text/html')
        {
          return arr[x].body.data;
        }
      }
      else
      {
        return getHTMLPart(arr[x].parts);
      }
    }
    return '';
  }


  return obj;
}]);