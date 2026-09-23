const fs = require('fs');
const path = require('path');

const map = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'print_shop_assets_map.json'), 'utf-8'));

const groups = {
  visiting_cards: [],
  stickers_and_labels: [],
  packaging_boxes: [],
  standees_and_banners: [],
  brochures_flyers_posters: [],
  stationery_and_letterheads: [],
  paper_bags: [],
  mugs_and_bottles: [],
  tshirts_and_apparel: [],
  corporate_gifts_and_hampers: [],
  signage_and_outdoor: [],
  photo_frames_and_engraving: [],
  other: []
};

for (const [orig, info] of Object.entries(map)) {
  const l = orig.toLowerCase();
  if (l.includes('visiting') || l.includes('business card') || l.includes('card_') || l.includes('card.')) {
    groups.visiting_cards.push(info);
  } else if (l.includes('sticker') || l.includes('label') || l.includes('tag')) {
    groups.stickers_and_labels.push(info);
  } else if (l.includes('box') || l.includes('pacakging') || l.includes('packaging')) {
    groups.packaging_boxes.push(info);
  } else if (l.includes('standee') || l.includes('banner') || l.includes('canopy') || l.includes('umbrella') || l.includes('flag')) {
    groups.standees_and_banners.push(info);
  } else if (l.includes('bag')) {
    groups.paper_bags.push(info);
  } else if (l.includes('mug')) {
    groups.mugs_and_bottles.push(info);
  } else if (l.includes('t_shirt') || l.includes('t-shirt') || l.includes('hoodie')) {
    groups.tshirts_and_apparel.push(info);
  } else if (l.includes('flyer') || l.includes('brochure') || l.includes('poster') || l.includes('booklet') || l.includes('catalogue')) {
    groups.brochures_flyers_posters.push(info);
  } else if (l.includes('pen') || l.includes('keychain') || l.includes('hamper') || l.includes('lanyard') || l.includes('wristaband') || l.includes('badge') || l.includes('mouse_pad') || l.includes('stamp')) {
    groups.corporate_gifts_and_hampers.push(info);
  } else if (l.includes('letterhead') || l.includes('envelope') || l.includes('folder') || l.includes('bill_book') || l.includes('diary') || l.includes('note_card') || l.includes('voucher') || l.includes('stationery')) {
    groups.stationery_and_letterheads.push(info);
  } else if (l.includes('sign') || l.includes('board') || l.includes('acp') || l.includes('acrylic') || l.includes('led') || l.includes('wall') || l.includes('wrap') || l.includes('film') || l.includes('fabrication')) {
    groups.signage_and_outdoor.push(info);
  } else if (l.includes('frame') || l.includes('crystal') || l.includes('pendant') || l.includes('bracelet') || l.includes('ring') || l.includes('wallet') || l.includes('mirror') || l.includes('clock')) {
    groups.photo_frames_and_engraving.push(info);
  } else {
    groups.other.push(info);
  }
}

console.log('Summary by group:');
for (const [k, v] of Object.entries(groups)) {
  console.log(`${k}: ${v.length} items`);
}

fs.writeFileSync(path.resolve(__dirname, 'print_shop_groups.json'), JSON.stringify(groups, null, 2), 'utf-8');
