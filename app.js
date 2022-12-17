// Variables
let ramen = document.getElementById('ramen');
let ramencost = parseInt(ramen.value);

let finalcost = document.getElementById('final-cost');
let finalcostValue = finalcost.innerHTML;

console.log(finalcostValue);

let costOfItems = (ramencost).toFixed(2);

// Functions
ramen.addEventListener('click', function(){

    finalcost.innerHTML = costOfItems;

})