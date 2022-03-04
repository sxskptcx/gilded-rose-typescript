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

const isLegendaryItem = (item: Item): boolean => item.name === 'Sulfuras, Hand of Ragnaros';

const isAgedBrie = (item: Item): boolean => item.name === 'Aged Brie';

const isBackstagePass = (item: Item): boolean => item.name === 'Backstage passes to a TAFKAL80ETC concert';

const isMaximumQuality = (item: Item): boolean => item.quality >= MAXIMUM_QUALITY;
const isMinimumQuality = (item: Item): boolean => item.quality === MINIMUM_QUALITY;

const increaseQuality = (item: Item): Item => {
  item.quality = item.quality + 1;
  return item;
};

const decreaseQuality = (item: Item): Item => {
  item.quality = item.quality - 1;
  return item;
};

const MAXIMUM_QUALITY = 50;
const MINIMUM_QUALITY = 0;

const BACKSTAGE_PASS_10_DAYS = 10;
const BACKSTAGE_PASS_5_DAYS = 5;
const SELL_IN_EXPIRED = 0;

export class Shop {
  items: Item[];

  constructor(items:Item[]=[]){
    this.items = items;
  }

  updateQuality() {
    return this.items.map((item: Item): Item => {
      if (isLegendaryItem(item)) {
        return item;
      }

      if (!isAgedBrie(item) && !isBackstagePass(item) && !isMinimumQuality(item)) {
        item = decreaseQuality(item);
      } else if (!isMaximumQuality(item)) {
        item = increaseQuality(item);

        if (isBackstagePass(item)) {
          if (item.sellIn <= BACKSTAGE_PASS_10_DAYS && !isMaximumQuality(item)) {
            item = increaseQuality(item);
          }

          if (item.sellIn <= BACKSTAGE_PASS_5_DAYS && !isMaximumQuality(item)) {
            item = increaseQuality(item);
          }
        }
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn >= SELL_IN_EXPIRED) {
        return item;
      }

      if (isAgedBrie(item) && !isMaximumQuality(item)) {
        item = increaseQuality(item);
        return item;
      }

      if (!isBackstagePass(item)) {
        if (!isMinimumQuality(item)) {
          item = decreaseQuality(item);
        }

        return item;
      }

      item.quality = MINIMUM_QUALITY;
      return item;
    });
  }
}
