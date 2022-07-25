const MAX_QUALITY = 50;

const MIN_QUALITY = 0;

export const guardQuality = (newQuality: number) => {
	if (newQuality > MAX_QUALITY) {
		return MAX_QUALITY;
	} else if (newQuality < 0) {
		return MIN_QUALITY;
	}
	return newQuality;
}

export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name: string, sellIn: number, quality: number) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}