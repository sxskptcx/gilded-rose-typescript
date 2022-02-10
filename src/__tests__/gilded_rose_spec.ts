import {Shop, Item} from '../gilded_rose';

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
const MAX_QUALITY = 50;
describe("Gilded Rose", () => {
    describe('Regular item', () => {
        it("should decrease sellin by 1 of regular item if quality>0", () => {
            const gildedRose = new Shop([new Item("foo", 0, 0)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).toEqual(-1);
        });

        it("doesn't change the quality of an regular item to below 0", () => {
            const gildedRose = new Shop([new Item("foo", 0, MIN_QUALITY)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(MIN_QUALITY);
        });

        it("decreases the quality by 2 of a regular item if expired", () => {
            const initialQuality = 10;
            const gildedRose = new Shop([new Item("foo", -1, initialQuality)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(initialQuality - 2);
        });

        it("should not increase quality of regular item if it's already 50", () => {
            const gildedRose = new Shop([new Item("foo", 1, MAX_QUALITY)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).not.toBeGreaterThan(MAX_QUALITY);
        });
    })

    describe('Aged Brie', () => {
        it("should decrease sellin by 1 of Aged Brie and increase quality by 1 if <50", () => {
            const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(1);
        });

        it("should increase quality of Aged Brie by 2 if expired", () => {
            const gildedRose = new Shop([new Item('Aged Brie', -1, 0)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(2);
        });

        it("should not increase quality of Aged Brie if it's already 50", () => {
            const gildedRose = new Shop([new Item('Aged Brie', -1, MAX_QUALITY)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(MAX_QUALITY);
        });
    });

    describe('legendary items', ()=>{
        const LEGENDARY_FIXED_80 = 80;

        it("doesn't change the quality of legendary items if not expired", ()=>{
            const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, LEGENDARY_FIXED_80)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(LEGENDARY_FIXED_80);
        });

        it("doesn't change the sellin of legendary items if not expired", ()=>{
            const initialSellIn = 1;
            const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', initialSellIn, LEGENDARY_FIXED_80)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].sellIn).toEqual(initialSellIn);
        });

    })
    describe('backstage passes', ()=>{

        it("increases the quality by 1 if quality <50 and sellin >10", ()=>{
            const initialQuality = 20;
            const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, initialQuality)]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(initialQuality + 1);
        });

        it("increases the quality by 2 if quality <50 and sellin 6-10", ()=>{
            const initialQuality = 20;
            const gildedRose = new Shop([
                new Item('Backstage passes to a TAFKAL80ETC concert', 10, initialQuality),
                new Item('Backstage passes to a TAFKAL80ETC concert', 6, initialQuality)
            ]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(initialQuality + 2);
            expect(updatedItems[1].quality).toEqual(initialQuality + 2);
        });

        it("increases the quality by 3 if quality <50 and sellin <=5 & >0", ()=>{
            const initialQuality = 20;
            const gildedRose = new Shop([
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, initialQuality),
                new Item('Backstage passes to a TAFKAL80ETC concert', 1, initialQuality)
            ]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(initialQuality + 3);
            expect(updatedItems[1].quality).toEqual(initialQuality + 3);
        });

        it("sets the quality to min quality if sellin <=0", ()=>{
            const MIN_QUALITY = 0;
            const initialQuality = 20;
            const gildedRose = new Shop([
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, initialQuality),
                new Item('Backstage passes to a TAFKAL80ETC concert', -1, MAX_QUALITY)
            ]);

            const updatedItems = gildedRose.updateQuality();

            expect(updatedItems[0].quality).toEqual(MIN_QUALITY);
            expect(updatedItems[1].quality).toEqual(MIN_QUALITY);
        });

    })
});

