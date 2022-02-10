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

const MAX_QUALITY = 50;

function increaseQuality(item: Item) {
    if (item.quality < MAX_QUALITY) {
        item.quality += 1;
    }
}

function decreaseQuality(item: Item) {
    if (item.quality > 0) {
        item.quality -= 1;
    }
}

function updateItemQuality(item: Item) {
    const isAcquiredTaste = item.name == 'Aged Brie';
    const isTicket = item.name == 'Backstage passes to a TAFKAL80ETC concert';
    const isLegendary = item.name == 'Sulfuras, Hand of Ragnaros';

    if (isLegendary) {
        return;
    }

    if (isAcquiredTaste || isTicket) {
        increaseQuality(item);
        if (isTicket) {
            if (item.sellIn <= 10) {
                increaseQuality(item);
            }
            if (item.sellIn <= 5) {
                increaseQuality(item);
            }
        }
    } else decreaseQuality(item);
    item.sellIn -= 1;
    if (item.sellIn < 0) {
        if (isAcquiredTaste) {
            increaseQuality(item);
        } else if (isTicket) {
            item.quality = item.quality - item.quality;
        } else {
            decreaseQuality(item);
        }
    }
}

export class Shop {
    items: Item[];

    constructor(items: Item[] = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(updateItemQuality);

        return this.items;
    }
}
