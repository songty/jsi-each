var indicateFruitThatNeedsPurchasing = function(fruit) {
  console.log("I need to purchase " + fruit + ".");
};

var indicateFruitPurchased = function(fruit) {
  console.log("I purchased " + fruit + " today.");
};

var continueIndicatingFruitThatNeedsPurchasing = function(array, n) {
  if (n < array.length) {
    indicateFruitThatNeedsPurchasing(array[n]);
    continueIndicatingFruitThatNeedsPurchasing(array, n+1);
  }
};

var continueIndicatingFruitPurchased = function(array, n, fn) {
  if (n < array.length) {
    fn(array[n]);
    continueIndicatingFruitPurchased(array, n+1, fn);
  }
};

var startIndicatingFruitThatNeedsPurchasing = function(array) {
  continueIndicatingFruitThatNeedsPurchasing(array, 0);
};

var startIndicatingFruitPurchased = function(array) {
  continueIndicatingFruitPurchased(array, 0, indicateFruitPurchased);
};

var fruits = ['apples', 'oranges', 'bananas'];
startIndicatingFruitThatNeedsPurchasing(fruits);
startIndicatingFruitPurchased(fruits);
