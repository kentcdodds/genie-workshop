// Lesson 3 - Get matching wishes
function register(magicWords, type) {
  return genie({
    magicWords: magicWords,
    action: function() {},
    data: {
      type: type
    }
  });
}

var equal = register('wish', 'equal');
var magicWordStartsWith = register('Wishing you were somehow here again...', 'starts with');
var wordStartsWith = register('I wish you were here', 'word starts with');
var contains = register('hashtagwishing', 'contains');
var acronym = register('What is so hilarious?', 'acronym');
var matches = register('I want a city street home', 'matches');

function getAndPrint(magicWord) {
  var matchingWishes = genie.getMatchingWishes(magicWord);
  console.log('"' + magicWord + '" matches:');
  for (var i = 0; i < matchingWishes.length; i++) {
    console.log('  ' + (i + 1) + '. ' + matchingWishes[i].magicWords + ' - ' + matchingWishes[i].data.type);
  }
}

console.log('This is the normal case:');
getAndPrint('wish');

console.log('\nMaking contains wish with "wish"');

genie.makeWish(contains, 'wish');

getAndPrint('wish');

console.log('\nNotice that the contains wish is the "King of the Hill"');
console.log('\nMaking acronym wish with "wish"');

genie.makeWish(acronym, 'wish');
getAndPrint('wish');

console.log('\nNotice that the contains wish is still the "King of the Hill", but the acronym wish is now "On Deck"');
console.log('\nMaking acronym wish with "wish" again');

genie.makeWish(acronym, 'wish');
getAndPrint('wish');

console.log('\nNotice that the acronym wish is the "King of the Hill", and now the contains wish is now "On Deck"');

getAndPrint('wi');

console.log('\nNotice that even though "wi" was never used to make a wish, genie is predicting that the priority lies with the same as "wish"');