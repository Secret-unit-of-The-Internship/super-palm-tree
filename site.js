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

/* Add a hacker theme to it */
var hackerTheme = document.createElement('div');
hackerTheme.innerHTML = '<h1>Hacker Internship</h1>';
document.body.appendChild(hackerTheme);
var hackerThemeText = document.createElement('div');
hackerThemeText.innerHTML = '<p>We are looking for hackers!</p>';
document.body.appendChild(hackerThemeText);
var hackerThemeLink = document.createElement('a');
hackerThemeLink.innerHTML = '<a href="https://intern.deteact.ru/">Apply here!</a>';
document.body.appendChild(hackerThemeLink);

/* Create a feedback form at the bottom */
var feedbackForm = document.createElement('div');
feedbackForm.innerHTML = '<form>Name: <input type="text" name="name"><br>Email: <input type="text" name="email"><br>Message:<br><textarea rows="5" cols="40"></textarea><br><input type="submit" value="Submit"></form>';
document.body.appendChild(feedbackForm);

/* Share some secrets */
var secrets = document.createElement('div');
secrets.innerHTML = '<p>The password is "password".</p><p>The secret is "secret".</p>';
document.body.appendChild(secrets);
