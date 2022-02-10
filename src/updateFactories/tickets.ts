import {decreaseSellIn, increaseQuality, MIN_QUALITY} from "../utils";
import {Item} from "../gilded_rose";

export function updateTicketQuality(item: Item) {
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

export function isTicketItem(item: Item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
}