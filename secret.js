var secret = ['d', 'e', 't', 'e', 'a', 'c', 't', '{', '6', '6', '2', '8', 'e', '6', '3', 'f', 'f', '0', 'e', '7', 'e', 'd', '4', '5', '1', 'f', '7', '6', '0', 'b', '3', '2', '5', '5', 'a', '1', 'c', '0', '8', 'a', '}'];
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
