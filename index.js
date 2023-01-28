
let btn = document.getElementById('valid');
btn.addEventListener('click', (e) => {
    var content = document.getElementById("password");
    content.innerText = generatePassword();

})

// generator password 
 function generatePassword() {
      var len = 8;
      var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqtuvwxyz1234567890?§/*$"
      var pwd = "";
      for (var i = 0, n = charset.length; i < len; i++){
        pwd += charset.charAt(Math.floor(Math.random() * n))
      } 
      return pwd;
 }