import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {

    it("should decrease sellin by 1 of item foo if quality>0", () => {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(-1);
    });

});
