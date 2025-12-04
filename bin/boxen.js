import boxen from 'boxen';
 
console.log(boxen('Sea Green', {title: 'TheSea', padding: 1, borderColor: '#09814A', borderStyle: {
    topLeft: '╭',
	topRight: '╮',
	bottomLeft: '╰',
	bottomRight: '╯',
	top: 'ꕀ',
	bottom: 'ꕀ',
	left: '⌇',
	right: '⌇'
 }}));
 
console.log(boxen('Cinnabar', {title: 'TheFire', titleAlignment: 'right', float: 'center', padding: 2, borderColor: '#DB4C40', borderStyle: 'doubleSingle'}));
 
console.log(boxen('Golden Glow', {title: 'TheSun', titleAlignment:'center', padding: 3, borderColor: '#EAD637', borderStyle: {
	topLeft: '⋄',
	topRight: '⋄',
	bottomLeft: '⋄',
	bottomRight: '⋄',
	top: '⋏',
	bottom: '⋎',
	left: '≺',
	right: '≻'
}}));

console.log(boxen('Light Blue', {title: 'Cloudy', padding: 1, borderColor: '#93B7BE', float: 'right', borderStyle: {
    topLeft: '╭',
	topRight: '╮',
	bottomLeft: '╰',
	bottomRight: '╯',
	top: '◠',
	bottom: '◡',
	left: '⁽',
	right: '⁾'
}}));

console.log(boxen('Powder Blush', {title: 'Meow!', titleAlignment: 'right', padding: 1, borderColor: '#FFA69E', height: 5, width: 50, borderStyle: 'bold'}));

console.log(boxen('Slate Blue', {title: 'TheCliffs', titleAlignment: 'center', padding: 3, borderColor: '#546A7B', float: 'center', borderStyle: {
    topLeft: '+',
	topRight: '+',
	bottomLeft: '+',
	bottomRight: '+',
	top: '≏',
	bottom: '=',
	left: '≬',
	right: '≬'
}}));