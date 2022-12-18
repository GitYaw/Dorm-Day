//FIXME: Add calculator link to menus

// Variables
let ramen = document.getElementById('ramen');
let ramenCost = parseInt(ramen.value);

let finalCost = document.getElementById('final-cost');

let costOfItems = 0;

// Functions
ramen.addEventListener('click', function () {
    costOfItems += ramenCost;
    finalCost.innerHTML = costOfItems.toFixed(2);
    console.log(finalCost);
})

//#region Testing
// let finalCost = 0;

// let ramen = document.getElementById('ramen');
// let ramenCost = parseInt(ramen.value);

// ramen.addEventListener('click', function () {
//     finalCost += ramenCost;
//     console.log(finalCost);
// })
//#endregion