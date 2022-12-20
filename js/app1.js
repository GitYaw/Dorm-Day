const True = "true";
const False = "false";
let itemContainer = document.querySelectorAll('.items-container');
let plusIcon = document.querySelectorAll('.plus-icon');
let plusIcon = document.querySelectorAll('.plus-icon');


document.querySelectorAll('.items-container').forEach(item => {
    item.addEventListener('click', event => {
        let amount;
        if (item.dataset.selected == False) {
            item.dataset.selected = True;
            amount = parseInt(item.value);
        } else {
            amount = parseInt(-1 * item.value)
            item.dataset.selected = False;
        }

        let section = item.dataset.type;
        updateTotals(amount, section);
    })
})

let finalCost = 0;
let finalCostLabel = document.getElementById('final-cost')
let finalCostFixedLabel = document.getElementById('final-cost-fixed')
console.log(finalCostFixedLabel)
let foodCost = 0;
let foodCostLabel = document.getElementById('final-cost-food')
let toiletriesCost = 0;
let toiletriesCostLabel = document.getElementById('final-cost-toiletries')
let cleaningCost = 0;
let cleaningCostLabel = document.getElementById('final-cost-cleaning')

const FOOD = "food";
const TOILETRIES = "toiletries";
const CLEANING = "cleaning";

function updateTotals(amount, section) {
    finalCost = finalCost + amount;
    finalCostLabel.innerHTML = finalCost.toFixed(2);
    finalCostFixedLabel.innerHTML = finalCost.toFixed(2);

    if (section == FOOD) {
        foodCost = foodCost + amount;
        foodCostLabel.innerHTML = foodCost.toFixed(2);
    } else if (section == TOILETRIES) {
        toiletriesCost = toiletriesCost + amount;
        toiletriesCostLabel.innerHTML = toiletriesCost.toFixed(2);
    } else if (section == CLEANING) {
        cleaningCost = cleaningCost + amount;
        cleaningCostLabel.innerHTML = cleaningCost.toFixed(2);
    }
}

//#region Testing
// let finalCost = 0;

// let ramen = document.getElementById('ramen');
// let ramenCost = parseInt(ramen.value);

// ramen.addEventListener('click', function () {
//     finalCost += ramenCost;
//     console.log(finalCost);
// })
//#endregion