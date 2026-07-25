// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

/* i just wanna see if i can make random greetings every time i reload the page
const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

if (hour >= 23 || hour < 6) {
	document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('greetings').innerText = gree3 + name;
} else {
	document.getElementById('greetings').innerText = gree4 + name;
}
*/

const greeLines = [
	"No alarms and no surprises.",
	"Faces of you, is that what you call a muse?",
	"Can you love your everything too, for me?"
	"

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper accumsan lacus, sed volutpat sem sollicitudin eget. Suspendisse et scelerisque mi. Duis egestas odio et ullamcorper aliquet. Aliquam vitae nisi eu ipsum lobortis ullamcorper at vitae erat. Duis ultricies lorem at nisl tempus, et convallis odio euismod. Morbi sapien mauris, cursus eu enim et, maximus finibus risus. Donec nec orci arcu. Aenean condimentum enim a tristique ultrices. Vestibulum non rutrum tellus. "
	];

/* const greeRand = Math.floor(Math.random() * greeLines.length);
console.log(random, greeLines[random]); */

var greeRand = greeLines[~~(Math.random() * greeLines.length)];

document.getElementById('greetings').innerText = greeRand;
