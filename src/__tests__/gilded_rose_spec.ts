import { Shop, Item } from '../gilded_rose';

describe("CommonItem", () => {
  it("should have lower values of SellIn and Quality after update", () => {
    const STARTING_SELL_IN = 30;
    const STARTING_QUALITY = 90;

    const gildedRose = new Shop([
      new Item("foo", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(29);
    expect(items[0].quality).toBe(89);
  });

  it("should degrade Quality by 2 if SellIn reaches 0", () => {
    const STARTING_SELL_IN = 0;
    const STARTING_QUALITY = 100;

    const gildedRose = new Shop([
      new Item("foo", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(98);
  });

  it("should not decrease Quality below 0", () => {
    const STARTING_SELL_IN = 0;
    const STARTING_QUALITY = 0;

    const gildedRose = new Shop([
      new Item("foo", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });
});

describe("AgedBrie", () => {
  it("should increase Quality if item is 'Aged Brie'", () => {
    const STARTING_SELL_IN = 10;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Aged Brie", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBeGreaterThan(STARTING_QUALITY);
  });

  it("should increase Quality by 2 if SellIn is below 0", () => {
    const STARTING_SELL_IN = -10;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Aged Brie", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
  });

  it("should not have Quality higher than 50", () => {
    const STARTING_SELL_IN = 10;
    const STARTING_QUALITY = 50;

    const gildedRose = new Shop([
      new Item("Aged Brie", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });
});

describe("LegendaryItem", () => {
  it("should never change Quality", () => {
    const STARTING_SELL_IN = 10;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(STARTING_QUALITY);
  });

  it("should never change SellIn", () => {
    const STARTING_SELL_IN = 10;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(STARTING_SELL_IN);
  });
});

describe("Backstage pass", () => {
  it("should drop Quality to 0 after SellIn reaches 0", () => {
    const STARTING_SELL_IN = 0;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it("should increase Quality by 3 if SellIn is 5 or less", () => {
    const STARTING_SELL_IN = 4;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(43);
  });

  it("should increase Quality by 2 if SellIn is 10 or less", () => {
    const STARTING_SELL_IN = 8;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
  });

  it("should increase Quality by 1 if SellIn is more than 10", () => {
    const STARTING_SELL_IN = 12;
    const STARTING_QUALITY = 40;

    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(41);
  });

  it("should not have Quality higher than 50", () => {
    const STARTING_SELL_IN = 5;
    const STARTING_QUALITY = 50;

    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", STARTING_SELL_IN, STARTING_QUALITY),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });
});
