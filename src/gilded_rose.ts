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

function decreaseSellIn(item: Item) {
    item.sellIn -= 1;
}

function updateRegularQuality(item: Item) {
    decreaseQuality(item);

    decreaseSellIn(item);

    if (item.sellIn < 0) {
        decreaseQuality(item);
    }
}

function updateTicketQuality(item: Item) {
    increaseQuality(item);
    if (item.sellIn <= 10) {
        increaseQuality(item);
    }
    if (item.sellIn <= 5) {
        increaseQuality(item);
    }

    decreaseSellIn(item);

    if (item.sellIn < 0) {
        item.quality = item.quality - item.quality;
    }
}

function updateItemQuality(item: Item) {
    const isAcquiredTaste = item.name == 'Aged Brie';
    const isTicket = item.name == 'Backstage passes to a TAFKAL80ETC concert';
    const isLegendary = item.name == 'Sulfuras, Hand of Ragnaros';

    if (isLegendary) {
        return;
    }

    if (isAcquiredTaste) {
        increaseQuality(item);
        decreaseSellIn(item);
        if (item.sellIn < 0) {
            increaseQuality(item);
        }
        return;
    }

    if (isTicket) {
        updateTicketQuality(item);
        return;
    }

    updateRegularQuality(item);
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
