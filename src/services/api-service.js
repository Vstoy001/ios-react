var shwApiUrl = "https://portals.test.selfhelpworks.com/";

export default class {
  static login() {
    console.log("login?")
    var params = {
      grant_type: 'password',
      username: 'fizzgig63port',
      password: 'helpMe888!'
    };

    var formData = [];
    for (var k in params) {
      var encKey = encodeURIComponent(k);
      var encVal = encodeURIComponent(params[k]);
      formData.push(encKey + '=' + encVal);
    }
    formData = formData.join('&');
    console.log('sending...', formData)
    fetch(shwApiUrl + 'public/account/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9"
      },
      data: formData
    }).then((res) => {
      //console.log(res);
    })
  }

  static logout() {
    console.log('exported logout')
  }

}
