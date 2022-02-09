import { Item } from './Item';

const AGED_BRIE = 'Aged Brie';
const CONCERT_TICKET = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const MAX_CONCERT_SELL_IN = 11;
const MIN_CONCERT_SELL_IN = 6;

const MIN_SELL_IN_QUALITY = 0;

const incrementQuality = (item: Item): void => {
  if (item.quality < MAX_QUALITY) {
    item.quality = item.quality + 1;
  }
};

const decrementQuality = (item: Item): void => {
  if (item.quality > MIN_QUALITY) {
    item.quality = item.quality - 1;
  }
};

const isCommonItem = (item: Item): boolean => {
  return item.name !== AGED_BRIE && item.name !== CONCERT_TICKET && item.name !== SULFURAS;
};

const adjustConcertQuality = (item: Item): void => {
  if (item.sellIn < MAX_CONCERT_SELL_IN) {
    incrementQuality(item);
  }

  if (item.sellIn < MIN_CONCERT_SELL_IN) {
    incrementQuality(item);
  }
};

const isExpired = (item: Item): boolean => {
  return item.sellIn < MIN_SELL_IN_QUALITY;
};

const isLegendary = (item: Item): boolean => {
  return item.name === SULFURAS;
};

export class Shop {

  public items: Item[] = [];

  public constructor(items: Item[]) {
    this.items = items;
  }

  public updateQuality(): Item[] {
    this.items.forEach((item: Item) => {
      if (isCommonItem(item)) {
        decrementQuality(item);
      } else {
        incrementQuality(item);
      }

      if (item.name === CONCERT_TICKET) {
        adjustConcertQuality(item);
      }

      if (!isLegendary(item)) {
        item.sellIn = item.sellIn - 1;
      }

      // When expired
      if (isExpired(item)) {
        if (item.name !== AGED_BRIE) {
          if (item.name !== CONCERT_TICKET) {
            if (item.name !== SULFURAS) {
              decrementQuality(item);
            }
          } else {
            item.quality = MIN_QUALITY;
          }
        } else {
          incrementQuality(item);
        }
      }
    });

    return this.items;
  }

}
