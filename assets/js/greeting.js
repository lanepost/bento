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
	"But pride's gonna be the death of you, and you and me",
	"If truly free, be stopped never, through all that's happening!",
	"Who's gonna rock the place?",
	"Open your heart, it's gonna be alright!",
	"Make believes reborn!",
	"Wish I may, wish I might, be someone else tonight.",
	"I'm the chosen one.",
	"'Cause every night, I will save your life.",
	"Take my lead, I'll set you free!",
	"Will the whole world know your name when we dance with destiny?",
	"You'll find your flame!",
	"In his world of worlds, every step meets the rest!",
	"I am all of me.",
	"And I live to rule by the sword,",
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
	"I am my biggest fan.",
	"I won't let this build up inside of me.",
	"Do you have to let it linger?",
	"I drag you down, I use you up.",
	"I am falling, I am fading,",
	"And you don't seem to understand.",
	"I'd give up forever to touch you.",
	"I just want you to know who I am.",
	"Take my hand, we'll make it, I swear.",
	"I know the pieces fit.",
	"The world undergoes photosynthesia.",
	"Step through the gate into Utopia.",
	"I just can't stop.",
	"Reincarnated!",
	"Now darling, where do we go from here?",
	"My compass was swallowed by the sea.",
	"Hey, gunner in the rain!",
	"Lemonade sinks into the floor.",
	"You're the only perfect human for me.",
	"Since when have I, have I became me?",
	"Does it feel good to hate?",
	"Ga1ahad, you shall never collapse.",
	"I will run the execution.",
	"We're invited to a lifelong party.",
	"Now it's time for another vendetta.",
	"I desperately wish to be noticed by the city's night.",
	"For you, angels have fallen.",
	"Your desires convince me you've always been human.",
	"A eulogistic lullaby.",
	"All my life, all my poetry leaving me.",
	"Why you so obsessed with me?",
	"I am just a freak!",
	"The less you feel, the more you know.",
	"I lead my life within a lie.",
	"Won't you be my cherry now?",
	"This is your alterlife.",
	"All of the pain and pleasure is you.",
	"Put me together one more time.",
	"'Bustin makes me feel good!",
	"(Shakira, Shakira)",
	"Barely on my mind all the fucking time.",
	"Hit me with your kill shot baby.",
	"Can you make my heart stop?",
	"I can cure your disease.",
	"You know what I want, and I got what you need.",
	"Mesmerized the simple minded.",
	"Don't you know that you're toxic?",
	"There's a she-wolf in disguise.",
	"She's a maneater!",
	"Born to be down.",
	"Aerials, so up high.",
	"Somewhere between the sacred silence and sleep..."
 ]; // god. i should probably figure out how to move this somewhere else.

var greeRand = greeLines[Math.floor(Math.random() * greeLines.length)];

// console.log(greeRand, greeLines[greeRand]);
// testing purposes ^^^

document.getElementById('greetings').innerText = greeRand; 
