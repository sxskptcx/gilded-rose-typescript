import {ItemNames} from "./ItemNames";
import {guardQuality, Item} from "./Item";
import isConjured from "./isConjured";

export class Shop {
  items: Item[];

  constructor(items:Item[]=[]){
    this.items = items;
  }

  updateQuality() {
    return this.items.map(({name, sellIn, quality}: Item) => {
      const newSellIn = sellIn - 1;
      switch(name) {
        case ItemNames.AGED_BRIE:
          if (sellIn >= 0) {
            return new Item(name, newSellIn, guardQuality(quality +1));
          } else {
            return new Item(name, newSellIn, guardQuality(quality + 2));
          }
        case ItemNames.SULFURAS:
          return new Item(name, sellIn, quality);
        case ItemNames.BACKSTAGE:
          if (sellIn > 10) {
            return new Item(name, newSellIn, guardQuality(quality + 1));
          } else if (sellIn > 5) {
            return new Item(name, newSellIn, guardQuality(quality + 2));
          } else if (sellIn > 0) {
            return new Item(name, newSellIn, guardQuality(quality + 3));
          } else {
            return new Item(name, newSellIn, guardQuality(0));
          }
        default:
           if (sellIn >= 0) {
             return new Item(name, newSellIn, guardQuality(quality + (isConjured(name) ? -2 : -1)));
           } else {
             return new Item(name, newSellIn, guardQuality(quality + (isConjured(name) ? -4 : -2)));
           }
      }
    });
  }
}
