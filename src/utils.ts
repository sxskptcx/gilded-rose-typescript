import {Item} from "./gilded_rose";

const MAX_QUALITY = 50;
export const MIN_SELLIN = 0;
export const MIN_QUALITY = 0;

export function increaseQuality(item: Item) {
    if (item.quality < MAX_QUALITY) {
        item.quality += 1;
    }
}


export function decreaseQuality(item: Item) {
    if (item.quality > MIN_QUALITY) {
        item.quality -= 1;
    }
}

export function decreaseSellIn(item: Item) {
    item.sellIn -= 1;
}

