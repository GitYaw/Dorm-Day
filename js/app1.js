const True = "true";
const False = "false";
let itemContainer = document.querySelectorAll('.items-container');
let plusIcon = document.querySelectorAll('.plus-icon');
let minusIcon = document.querySelectorAll('.minus-icon');


document.querySelectorAll('.items-container').forEach(item => {
    item.addEventListener('click', event => {
        let amount;
        if (item.dataset.selected == False) {
            item.dataset.selected = True;
            amount = parseInt(item.value);
            item.style.opacity = '0.3';
     
        } else {
            amount = parseInt(-1 * item.value)
            item.dataset.selected = False;
            item.style.opacity = '1';
        }

        let section = item.dataset.type;
        updateTotals(amount, section);
    })
})

// document.querySelectorAll('.plus-icon').forEach(plusIcon => {
//     item.addEventListener('click', event => {

//     })
// })


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
    console.log(finalCostFixedLabel.innerHTML)

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