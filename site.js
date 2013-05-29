/* Create web page promoting our internship */
var internship = document.createElement('div');
internship.innerHTML = '<h1>Internship</h1>';
document.body.appendChild(internship);
var internshipText = document.createElement('div');
internshipText.innerHTML = '<p>We are looking for interns!</p>';
document.body.appendChild(internshipText);
var internshipLink = document.createElement('a');
internshipLink.innerHTML = '<a href="https://intern.deteact.ru/">Apply here!</a>';
document.body.appendChild(internshipLink);
