import { Shop } from '../gilded_rose';
import { Item } from '../Item';

describe('Backstage passes,', () => {

  // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
  // 	  Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
  // <= 10 ? 2 ***
  // <= 5 ? 3 ***
  // 	  Quality drops to 0 after the concert ***

  it('should drop the quality to zero after the concert', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it('should increase the quality by 2 when the sellIn approaches the 10th day', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 8)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(10);
  });

  it('should increase the quality by 3 when the sellIn approaches the 5th day', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 8)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(11);
  });

});
