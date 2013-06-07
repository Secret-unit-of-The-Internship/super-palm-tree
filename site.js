/* Add a navigation bar at the top of the web page */
var navBar = document.createElement('div');
navBar.innerHTML = '<nav>Home | About | Contact</nav>';
document.body.appendChild(navBar);

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

/* Create a feedback form at the bottom */
var feedbackForm = document.createElement('div');
feedbackForm.innerHTML = '<form>Name: <input type="text" name="name"><br>Email: <input type="text" name="email"><br>Message:<br><textarea rows="5" cols="40"></textarea><br><input type="submit" value="Submit"></form>';
document.body.appendChild(feedbackForm);
