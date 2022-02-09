import { Item } from './Item';

const AGED_BRIE = 'Aged Brie';
const CONCERT_TICKET = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

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

export class Shop {

  public items: Item[] = [];

  public constructor(items: Item[]) {
    this.items = items;
  }

  public updateQuality(): Item[] {
    this.items.forEach((item: Item) => {
      if (item.name !== AGED_BRIE && item.name !== CONCERT_TICKET && item.name !== SULFURAS) {
        decrementQuality(item);
      } else {
        incrementQuality(item);

        // CONCERT_TICKET
        if (item.name == CONCERT_TICKET) {
          if (item.sellIn < 11) {
            incrementQuality(item);
          }

          if (item.sellIn < 6) {
            incrementQuality(item);
          }
        }
      }

      if (item.name !== SULFURAS) {
        item.sellIn = item.sellIn - 1;
      }

      // When expired
      if (item.sellIn < 0) {
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
