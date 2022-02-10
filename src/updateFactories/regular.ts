import {decreaseQuality, decreaseSellIn, MIN_SELLIN} from "../utils";
import {Item} from "../gilded_rose";

export function updateRegularQuality(item: Item) {
    decreaseQuality(item);

    decreaseSellIn(item);

    if (item.sellIn < MIN_SELLIN) {
        decreaseQuality(item);
    }
}