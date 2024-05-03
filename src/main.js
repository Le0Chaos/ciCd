import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Jane Butler',
		// In the following fields you can either give a single string,
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'four random letters',
			'hope that copilot can write it for me',
		],
		// Which CI/CD tools do you use in your project?
		tools: 'github actions',
		// What do you want to learn in this workshop? 
		expectations: [
			'finally understand what exactly CI/CD is',
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'renovating/building',
			'sports'
		]
	}
});
