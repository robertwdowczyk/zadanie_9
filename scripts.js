// scripts.js
function getTriangleArea (a, h) {
  var TriangleArea = a*h/2;
  if ((a <= 0) || (h <= 0)) {
    console.log("Nieprawidłowe dane");
    return; }
    return TriangleArea;
  }
console.log(getTriangleArea(10, 6) );
var triangle1Area = getTriangleArea(10, 15);