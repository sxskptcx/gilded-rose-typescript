import {isLegendaryItem} from "./updateFactories/legendary";
import {isAcquiredTaste, updateAcquiredQuality} from "./updateFactories/acquired";
import {isTicketItem, updateTicketQuality} from "./updateFactories/tickets";
import {updateRegularQuality} from "./updateFactories/regular";
import {Item} from "./gilded_rose";

export function updateItemQuality(item: Item) {

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