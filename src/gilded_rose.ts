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

function isLegendaryItem(item: Item) {
    return item.name == 'Sulfuras, Hand of Ragnaros';
}

function isTicketItem(item: Item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
}

function isAcquiredTaste(item: Item) {
    return item.name == 'Aged Brie';
}

function updateItemQuality(item: Item) {

    if (isLegendaryItem(item)) {
        return;
    }

    if (isAcquiredTaste(item)) {
        updateAcquiredQuality(item);
        return;
    }

    if (isTicketItem(item)) {
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
