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

export class Shop {
  items: Item[];

  constructor(items:Item[]=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      const isAcquiredTaste = item.name == 'Aged Brie';
      const isTicket = item.name == 'Backstage passes to a TAFKAL80ETC concert';
      const isLegendary = item.name == 'Sulfuras, Hand of Ragnaros';

      if (!isAcquiredTaste && !isTicket) {
        if (item.quality > 0) {
          if (!isLegendary) {
            item.quality = item.quality - 1;
          }
        }
      } else if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (isTicket) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
      if (!isLegendary) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (!isAcquiredTaste) {
          if (!isTicket) {
            if (item.quality > 0) {
              if (!isLegendary) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
