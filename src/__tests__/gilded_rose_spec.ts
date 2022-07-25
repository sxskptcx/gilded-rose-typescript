import { Shop, Item } from '../gilded_rose';



describe("Gilded Rose", () => {

    it("Once the sell by date has passed, Quality degrades twice as fast", () => {
        const gildedRose = new Shop([new Item("foo", -1, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });

    it("should decrease the sellIn value", () => {
        const gildedRose = new Shop([new Item("foo", 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });

    it("should decrease the sellIn value", () => {
        const gildedRose = new Shop([new Item("foo", 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });

    it("The Quality of should decrease", () => {
        const gildedRose = new Shop([new Item("foo", 0, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it("The Quality of can not be negative", () => {
        const gildedRose = new Shop([new Item("foo", 0, 1)]);
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it("`Aged Brie` actually increases in Quality the older it gets", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 11, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
    });

    it("if sellin is below zero then quality of Aged Brie increases by two", () => {
        const gildedRose = new Shop([new Item("Aged Brie", -1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
    });

    it("The Quality of an item is never more than 50", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it("The Quality of an item is never more than 50", () => {
        const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it("'Sulfuras, Hand of Ragnaros', being a legendary item, never has to be sold or decreases in Quality", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(10);
        expect(items[0].quality).toEqual(50);
    });

    it("`Backstage passes to a TAFKAL80ETC concert`, like aged brie, increases in Quality as its SellIn value approaches", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(10);
        expect(items[0].quality).toEqual(11);
    });

    it("Quality increases by 2 when there are 10 days or less", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
    });

    it("Quality increases by 3 when there are 5 days or less", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(13);
    });

    it("Quality drops to 0 after the concert", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it("`Sulfuras, Hand of Ragnaros` is legendary item and as such its Quality is 80 and it never alters", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it("`Conjured` items degrade in Quality twice as fast as normal items", () => {
        const gildedRose = new Shop([new Item("Conjured", 1, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });
});
