import { Shop } from '../gilded_rose';
import { Item } from '../Item';

describe('Sulfuras, Hand of Ragnaros', () => {

  it('should never decrease in Quality', () => {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(80);
    expect(items[0].sellIn).toEqual(0);
  });

  it('should never decrement the sellIn value', () => {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(80);
    expect(items[0].sellIn).toEqual(-1);
  });

});
