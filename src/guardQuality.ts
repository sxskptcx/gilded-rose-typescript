const MAX_QUALITY = 50;

const MIN_QUALITY = 0;

const guardQuality = (newQuality: number) => {
	if (newQuality > MAX_QUALITY) {
		return MAX_QUALITY;
	} else if (newQuality < 0) {
		return MIN_QUALITY;
	}
	return newQuality;
}

export default guardQuality;