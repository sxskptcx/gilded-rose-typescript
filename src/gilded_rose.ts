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

function increaseQuality(item: Item) {
    if (item.quality < 50) {
        item.quality += 1;
    }
}

function decreaseQuality(item: Item) {
    if (item.quality > 0) {
        item.quality -= 1;
    }
}

export class Shop {
    items: Item[];

    constructor(items: Item[] = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach((item)=>{
            const isAcquiredTaste = item.name == 'Aged Brie';
            const isTicket = item.name == 'Backstage passes to a TAFKAL80ETC concert';
            const isLegendary = item.name == 'Sulfuras, Hand of Ragnaros';

            if (isLegendary) {
                return;
            }

            if (isAcquiredTaste || isTicket) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                    if (isTicket) {
                        if (item.sellIn < 11) {
                            increaseQuality(item);
                        }
                        if (item.sellIn < 6) {
                            increaseQuality(item);
                        }
                    }
                }
            } else decreaseQuality(item);
            item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                if (isAcquiredTaste) {
                    increaseQuality(item);
                } else {
                    if (isTicket) {
                        item.quality = item.quality - item.quality;
                    } else if (item.quality > 0) {
                        item.quality -= 1;
                    }
                }
            }
        });

        return this.items;
    }
}
