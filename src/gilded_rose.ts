/*
  BaseItem that implements an ItemInterface interface
  ItemInterface should required method of class ( decrease q, etc..)

  Child classes that extend from BaseItem: (Item SulfuraItem Brie Backstage Conjured)

  Each class would define required method

 */

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

function increaseItemQuality(item) {
  return item.quality += 1;
}

function decreaseItemQuality(item) {
  return item.quality -= 1;
}

// function increaseSellIn(item) {
//   return item.sellIn += 1;
// }

function decreaseSellIn(item) {
  return item.sellIn -= 1;
}


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
    this.items.forEach((item) => {
      if (item.name != AGED_BRIE && item.name != BACKSTAGE) {
        if (item.quality > 0) {
          if (item.name != SULFURAS) {
            decreaseItemQuality(item)
          }
        }
      } else {
        if (item.quality < 50) {
          increaseItemQuality(item)
          if (item.name == BACKSTAGE) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                increaseItemQuality(item)
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                increaseItemQuality(item)
              }
            }
          }
        }
      }
      if (item.name != SULFURAS) {
        decreaseSellIn(item);
      }
      if (item.sellIn < 0) {
        if (item.name != AGED_BRIE) {
          if (item.name != BACKSTAGE) {
            if (item.quality > 0) {
              if (item.name != SULFURAS) {
                decreaseItemQuality(item)
              }
            }
          } else {
            item.quality -= item.quality;
          }
        } else {
          if (item.quality < 50) {
            increaseItemQuality(item)
          }
        }
      }
    })

    return this.items;
  }
}
