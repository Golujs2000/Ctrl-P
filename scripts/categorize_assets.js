const fs = require('fs');
const path = require('path');

const srcDir = 'E:\\Print shop assets';
const files = fs.readdirSync(srcDir);

const categories = {
  visiting_cards: [],
  packaging_boxes: [],
  stickers_labels: [],
  standees_banners: [],
  flyers_brochures_posters: [],
  folders_stationery_letterhead: [],
  certificates_awards: [],
  mugs_gifts_apparel: [],
  signage_outdoor: [],
  frames_personalized_gifts: [],
  others: []
};

files.forEach(f => {
  const lower = f.toLowerCase();
  if (lower.includes('visiting') || lower.includes('business card') || lower.includes('card_') || lower.includes('card.')) {
    categories.visiting_cards.push(f);
  } else if (lower.includes('box') || lower.includes('pacakging') || lower.includes('packaging')) {
    categories.packaging_boxes.push(f);
  } else if (lower.includes('sticker') || lower.includes('label') || lower.includes('tag')) {
    categories.stickers_labels.push(f);
  } else if (lower.includes('standee') || lower.includes('banner') || lower.includes('canopy') || lower.includes('umbrella') || lower.includes('flag')) {
    categories.standees_banners.push(f);
  } else if (lower.includes('flyer') || lower.includes('brochure') || lower.includes('poster') || lower.includes('booklet') || lower.includes('catalogue')) {
    categories.flyers_brochures_posters.push(f);
  } else if (lower.includes('folder') || lower.includes('letterhead') || lower.includes('envelope') || lower.includes('stationery') || lower.includes('bill_book') || lower.includes('note_card') || lower.includes('diary') || lower.includes('voucher')) {
    categories.folders_stationery_letterhead.push(f);
  } else if (lower.includes('certificate')) {
    categories.certificates_awards.push(f);
  } else if (lower.includes('t_shirt') || lower.includes('t-shirt') || lower.includes('mug') || lower.includes('hoodie') || lower.includes('pen') || lower.includes('lanyard') || lower.includes('keychain') || lower.includes('hamper') || lower.includes('wristaband') || lower.includes('badge') || lower.includes('cusion') || lower.includes('mouse_pad')) {
    categories.mugs_gifts_apparel.push(f);
  } else if (lower.includes('sign') || lower.includes('board') || lower.includes('letter') || lower.includes('acp') || lower.includes('acrylic') || lower.includes('led') || lower.includes('wall') || lower.includes('wrap') || lower.includes('film') || lower.includes('fabrication')) {
    categories.signage_outdoor.push(f);
  } else if (lower.includes('frame') || lower.includes('crystal') || lower.includes('pendant') || lower.includes('bracelet') || lower.includes('ring') || lower.includes('wallet') || lower.includes('chain') || lower.includes('clock') || lower.includes('mirror')) {
    categories.frames_personalized_gifts.push(f);
  } else {
    categories.others.push(f);
  }
});

for (const [cat, list] of Object.entries(categories)) {
  console.log(`=== ${cat} (${list.length}) ===`);
  console.log(list.join(', '));
  console.log('');
}
