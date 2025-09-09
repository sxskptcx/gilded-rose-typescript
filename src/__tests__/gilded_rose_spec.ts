import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {
    it("ConjuredQualityCheck", () => {
        const gildedRose = new Shop([new Item('Conjured Mana Cake', 3, 6)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(2);
    });

    it("RegularItemCheck", () => {
        const regular = new Item('+5 Dexterity Vest', 10, 20);

        expect(regular.quality).toEqual(18);
    });
});
