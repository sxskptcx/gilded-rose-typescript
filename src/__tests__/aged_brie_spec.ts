import { Shop } from '../gilded_rose';
import { Item } from '../Item';

describe('Aged Brie', () => {

  it('should increase in Quality the older it gets', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 1, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(1);
  });

  it('should increment by 2 when it expires', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(2);
  });

  it('should never increment the quality if it is more than 50', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });

});
