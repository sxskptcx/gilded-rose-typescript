import {decreaseQuality, decreaseSellIn, increaseQuality, MIN_QUALITY, MIN_SELLIN} from "./utils";

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

function updateRegularQuality(item: Item) {
    decreaseQuality(item);

    decreaseSellIn(item);

    if (item.sellIn < MIN_SELLIN) {
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
        item.quality = MIN_QUALITY;
    }
}

function updateAcquiredQuality(item: Item) {
    increaseQuality(item);
    decreaseSellIn(item);
    if (item.sellIn < 0) {
        increaseQuality(item);
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
        updateAcquiredQuality(item);
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
