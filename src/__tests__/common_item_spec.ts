import { Shop } from '../gilded_rose';
import { Item } from '../Item';

describe('Common Item', () => {

  it('should never decrease the quality below 0', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it('should decrease the quality after a day', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(9);
  });

  it('should decrease the quality even after expiration', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', -1, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(8);
  });

});
