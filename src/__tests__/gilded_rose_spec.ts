import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {

    it("descreases sell in", () => {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    it("descreases quality in", () => {
        const gildedRose = new Shop([new Item("foo", 10, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(4);
    });

    it("descreases quality twice as fast", () => {
        const gildedRose = new Shop([new Item("foo", 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
    });

    it("doesn't descrease further when quality is already 0", () => {
        const gildedRose = new Shop([new Item("foo", 10, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it("increases quality for Aged Brie the older it gets", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 10, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(31);
    });

    it("increases quality for Aged Brie the older it gets", () => {
        const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it("increases quality for Aged Brie if the sellIn is is already passed 0", () => {
        const gildedRose = new Shop([new Item("Aged Brie", -1, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(32);
    });

    it("does not increase quality for Aged Brie the older it gets if its already at 50 quality", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it("does not decrease sellIn value of Sulfuras", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(10);
    });

    it("does not decrease quality value of Sulfuras", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it("increases quality for Backstage passes the older it gets", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 50, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(31);
    });

    it("does not increase quality for Backstage the older it gets if its already at 50 quality", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it("increases quality for Backstage passes by 2 if 10 days or less left", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(32);
    });

    it("increases quality for Backstage passes by 2 if 5 days or less left", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(33);
    });

    it("drops the quality to 0 for Backstage passes if concert ended", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
    // it("decreses quality by 2 for Conjured Item", () => {
    //     const gildedRose = new Shop([new Item("Conjured", 10, 30)]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].quality).toEqual(28);
    // });


    it('has all required fields', () => {
        const item = new Item('test', 30, 50)

        expect(item.name).toBe('test');
        expect(item.sellIn).toBe(30);
        expect(item.quality).toBe(50);
    })
});
