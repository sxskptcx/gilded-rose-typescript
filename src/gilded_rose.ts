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
  if (canIncreaseQuality(item)) {
    return item.quality += 1;
  }
}

function decreaseItemQuality(item) {
  if(!isMinimumQuality(item)) {
    return item.quality -= 1;
  }
}

function decreaseSellIn(item) {
  return item.sellIn -= 1;
}

function updateForBackstage(item) {
    increaseItemQuality(item)
    if (item.sellIn < 11) {
      increaseItemQuality(item)
    }
    if (item.sellIn < 6) {
      increaseItemQuality(item)
    }
    if (isExpired(item)) {
      setQualityToZero(item)
    }
}

function updateForAgedBrie(item) {
  increaseItemQuality(item)

  if (isExpired(item)) {
    increaseItemQuality(item)
  }
}



function updateForRegularItem(item) {
  decreaseItemQuality(item)
  if (isExpired(item)) {
    decreaseItemQuality(item)
  }
}

function isExpired(item) {
  return item.sellIn < 0
}


function canIncreaseQuality(item) {
  return item.quality < 50
}

function isMinimumQuality(item) {
  return item.quality === 0
}

function setQualityToZero(item) {
  return item.quality = 0;
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
      if (item.name === SULFURAS) return;

      decreaseSellIn(item);

      if (item.name === AGED_BRIE) {
        updateForAgedBrie(item);
        return;
      }

      if (item.name === BACKSTAGE) {
        updateForBackstage(item);
        return;
      }

      updateForRegularItem(item)
    })

    return this.items;
  }
}
