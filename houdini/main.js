if('registerProperty' in CSS){
	CSS.registerProperty({
		name: '--circle-color',
		syntax: '<color>',
		initialValue: 'pink',
		inherits: true
	});

	CSS.registerProperty({
		name: '--circle-spacing',
		syntax: '<length-percentage>',
		initialValue: '100px',
		inherits: true
	});

	CSS.registerProperty({
		name: '--circle-size',
		syntax: '<length-percentage>',
		initialValue: '100px',
		inherits: true
	});
}

if('paintWorklet' in CSS){
	CSS.paintWorklet.addModule('dots-worklet.js');
}