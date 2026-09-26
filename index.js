




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
// 1. Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// 2. Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// 3. Function 3: findMaximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// 4. Function 4: isPalindrome
function isPalindrome(word) {
    const cleaned = word.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// 5. Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}