import { Shop, Item } from '../gilded_rose';

const itemsGlobal = [];

itemsGlobal.push(new Item('+5 Dexterity Vest', 10, 20));
itemsGlobal.push(new Item('Aged Brie', 2, 0));
itemsGlobal.push(new Item('Elixir of the Mongoose', 5, 7));
itemsGlobal.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
itemsGlobal.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
itemsGlobal.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
itemsGlobal.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
itemsGlobal.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));


const MIN_QUALITY = 0;
describe("Gilded Rose", () => {

    it("should decrease sellin by 1 of item foo if quality>0", () => {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(-1);
    });

    it("should decrease sellin by 1 of Aged Brie and quality by 1 if <50", () => {
        const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).toEqual(1);
    });

    it("should increase quality of Aged Brie by 2 if expired", () => {
        const gildedRose = new Shop([new Item('Aged Brie', -1, 0)]);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).toEqual(2);
    });

    it("doesn't change the quality of an item to below 0", () => {
        const gildedRose = new Shop([new Item("foo", 0, MIN_QUALITY)]);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).toEqual(MIN_QUALITY);
    });

    it("doesn't change the quality of an item to below 0", () => {
        const gildedRose = new Shop([new Item("foo", 0, MIN_QUALITY)]);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).toEqual(MIN_QUALITY);
    });

});
