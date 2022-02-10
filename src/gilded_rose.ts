import {updateItemQuality} from "./getUpdate";

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
    constructor(items: Item[] = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(updateItemQuality);

        return this.items;
    }
}
