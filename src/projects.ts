export type Project = {
	name: string;
	description: string;
	url: string;
	githubUrl: string;
	hasWebsite: boolean;
};

export const projects: Project[] = [
	{
		name: 'Cubdeck',
		description:
			'A web app for cubers to keep track of their solve times and compete with their friends with group solves.',
		url: 'https://cubedeck.netlify.app',
		githubUrl: 'https://github.com/carrotfarmer/cubedeck',
		hasWebsite: true
	},
	{
		name: 'kitty.js',
		url: 'https://www.npmjs.com/package/@kittyjs/kitty-js',
		description:
			'A JavaScript library to provide information about cats, specific breeds and other characteristic traits. Also provides random images of cats and their breeds. API wrapper for TheCatAPI.',
		githubUrl: 'https://github.com/carrotfarmer/kitty-js',
		hasWebsite: true
	},
	{
		name: 'TicTacToe',
		description: 'A simple TicTacToe game written in Swift using the MVVM architecture.',
		url: 'ded',
		githubUrl: 'https://github.com/carrotfarmer/TicTacToe',
		hasWebsite: false
	},
	{
		name: 'Bruh Button',
		description: 'A sophisticated bruh audio player with one purpose: to annoy people to death.',
		url: 'https://bruhbutton.vercel.app',
		githubUrl: 'https://github.com/carrotfarmer/bruh',
		hasWebsite: true
	}
];
