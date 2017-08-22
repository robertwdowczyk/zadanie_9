// scripts.js
var txt ='Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = txt.replace('Velociraptor', 'Triceratopsa');
console.log(dinosaur);
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);
console.log(dinosaur);
console.log(dinosaur.length);
var partOftxt=dinosaur.slice(0,72.5)
console.log(partOftxt);