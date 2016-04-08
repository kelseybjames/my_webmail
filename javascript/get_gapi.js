  function handleClientLoad() {

    //var gapi;
    //var y = $window.gapi;
    console.log(gapi);
    console.log(gapi.client);
    gapi.client.setApiKey(env.apiKey);
    setTimeout(obj.checkAuth, 1);
  }
