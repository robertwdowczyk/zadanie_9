// scripts.js
function getTriangleArea (a, h) {
  var triangleArea = a*h/2;
  if ((a <= 0) || (h <= 0)) {
    return ("Nieprawidłowe dane");
}
    return triangleArea;
  
console.log(getTriangleArea(10, 6) );
var triangle1Area = getTriangleArea(10, 15);