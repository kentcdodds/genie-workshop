// Register simple wish
var trashWish = genie({
  magicWords: 'Take out the trash',
  action: function() {
    alert('Yes! I love taking out the trash!');
  }
});

// Multiple magic words
var vacuumWish = genie({
  magicWords: ['Get dust out of the carpet', 'vacuum'],
  action: function() {
    alert('Can NOT wait to get that dust out of that carpet!');
  }
});