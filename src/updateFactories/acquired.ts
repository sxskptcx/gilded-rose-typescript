import {decreaseSellIn, increaseQuality} from "../utils";
import {Item} from "../gilded_rose";

export function updateAcquiredQuality(item: Item) {
    increaseQuality(item);
    decreaseSellIn(item);
    if (item.sellIn < 0) {
        increaseQuality(item);
    }
}

export function isAcquiredTaste(item: Item) {
    return item.name == 'Aged Brie';
}