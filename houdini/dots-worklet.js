class Dots {
	static get inputProperties(){
		return [
			'--circle-color',
			'--circle-size',
			'--circle-spacing'
		];
	}

	paint(ctx, geometry, properties){
		ctx.fillStyle = properties.get('--circle-color');

		let { width, height } = geometry;
		let { value: size, unit: sizeUnit } = properties.get('--circle-size');
		let { value: spacing, unit: spacingUnit } = properties.get('--circle-spacing');
		let x = 0;
		let y = 0;

		if (size === 0 || spacing === 0){
			return
		}

		size = Math.abs(size);
		spacing = Math.abs(spacing);

		if(sizeUnit === 'percent'){
			size = (width * 0.01) * size
		}

		if(spacingUnit === 'percent'){
			spacing = (width * 0.01) * spacing
		}

		ctx.beginPath();

		while( y < height + size){
			while(x < width + size){
				ctx.moveTo(x, y);
				ctx.arc(x, y, size / 2, 0, Math.PI * 2);
				x += spacing;
			}
			x = 0;
			y += spacing;
		}

		ctx.fill();
	}
}

registerPaint('dots', Dots)