 
MailerApp.factory('emailService',['$window','env', function($window,env){

  var obj = {};

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
      response.messages.forEach(function() {
        var messageRequest = $window.gapi.client.gmail.users.messages.get({
          'userId': 'me',
          'id': this.id
        });

        messageRequest.execute(obj.appendMessageRow);
      });
   });
  }

  obj.appendMessageRow = function(message) {
        $('.table-inbox tbody').append(
          '<tr>\
            <td>'+getHeader(message.payload.headers, 'From')+'</td>\
            <td>\
              <a href="#message-modal-' + message.id +
                '" data-toggle="modal" id="message-link-' + message.id+'">' +
                getHeader(message.payload.headers, 'Subject') +
              '</a>\
            </td>\
            <td>'+getHeader(message.payload.headers, 'Date')+'</td>\
          </tr>'
        );
        $('body').append(
          '<div class="modal fade" id="message-modal-' + message.id +
              '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
            <div class="modal-dialog modal-lg">\
              <div class="modal-content">\
                <div class="modal-header">\
                  <button type="button"\
                          class="close"\
                          data-dismiss="modal"\
                          aria-label="Close">\
                    <span aria-hidden="true">&times;</span></button>\
                  <h4 class="modal-title" id="myModalLabel">' +
                    getHeader(message.payload.headers, 'Subject') +
                  '</h4>\
                </div>\
                <div class="modal-body">\
                  <iframe id="message-iframe-'+message.id+'" srcdoc="<p>Loading...</p>">\
                  </iframe>\
                </div>\
              </div>\
            </div>\
          </div>'
        );
        $('#message-link-'+message.id).on('click', function(){
          var ifrm = $('#message-iframe-'+message.id)[0].contentWindow.document;
          $('body', ifrm).html(getBody(message.payload));
        });
  }

  return obj;
}]);