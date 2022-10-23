console.log('destructuring');

const book = {
  title: 'Ego is an enemy',
  author: 'Lily',
  publisher: {
    name: 'Penguin'
  }
};
const { name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName);

const item = ['Coffee (hot)', '$2.5', '$2.75', '$3'];

const [itemName = 'Coffee (iced)', , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);