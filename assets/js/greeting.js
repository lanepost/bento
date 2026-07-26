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
	"Can you love your everything too, for me?",
	"Watch as we all fly away.",
	"Whatever tomorrow brings, I'll be there.",
	"Can you take me higher?",
	"Sometimes goodbye is a second chance.",
	"I think I thought I saw you try.",
	"You're out of touch, I'm out of time.",
	"And you don't seem to understand...",
	"You are an idiot!",
	"I'm alive, I still remember the people I love.",
	"But pride's gonna be the death of you, and you and me,"
	"If truly free, be stopped never, through all that's happening!",
	"Who's gonna rock the place?",
	"Open your heart, it's gonna be alright!",
	"Make believes reborn!"
	"Wish I may, wish I might, be someone else tonight.",
	"I'm the chosen one.",
	"'Cause every night, I will save your life.",
	"Take my lead, I'll set you free!",
	"Will the whole world know your name when we dance with destiny?",
	"You'll find your flame!",
	"In his world of worlds, every step meets the rest!",
	"I am all of me.",
	"And I live to rule by the sword,"
	"Live and learn!",
	"Hold on to what if?",
	"We're only at the beginning of this one way dream.",
	"Can you feel the sunshine?",
	"You ready to go in space? Help me get the emeralds.",
	"I'm what you get when the stars collide.",
	"I'm hanging on to the other side.",
	"Vandalize my heart.",
	"Let me show you who I am and what I'm here for.",
	"So break through it all, and don't look down!",
	"Catch me if you can.",
	"I am your biggest fan.",
	"I am my biggest fan."
	];

var greeRand = greeLines[Math.floor(Math.random() * greeLines.length)];

document.getElementById('greetings').innerText = greeRand; 
