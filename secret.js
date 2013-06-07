var secret = []
var secret_shuffled = secret.sort(function() { return 0.5 - Math.random(); });
var secret_div = document.createElement('div');
document.body.appendChild(secret_div);
var secret_interval = setInterval(function() {
  if (secret_shuffled.length > 0) {
    var secret_char = secret_shuffled.pop();
    var secret_char_div = document.createElement('div');
    secret_char_div.innerHTML = secret_char;
    secret_div.appendChild(secret_char_div);
  } else {
    clearInterval(secret_interval);
  }
}, 100);
