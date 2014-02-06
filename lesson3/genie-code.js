// Lesson 3 - Get matching wishes
// Register simple wish
var trashWish = genie({
  magicWords: 'Take out the trash',
  action: function() {}
});

// Multiple magic words
var vacuumWish = genie({
  magicWords: ['Get dust out of the carpet', 'vacuum'],
  action: function() {}
});

function getAndPrint(magicWord) {

}