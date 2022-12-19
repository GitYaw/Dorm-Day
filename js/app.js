// Variables (We set here the "ID" of the element. We've also created a variable, with the ending "changed", that will help us toggle the prices. In other words, if a button is clicked once, that price will add to the total. If it's clicked again, it will subtract.)
let ramen = document.getElementById('ramen');
let ramenchanged = false;
let ramencost = parseInt(ramen.value);

let water = document.getElementById('water');
let waterchanged = false;
let watercost = parseInt(water.value);

let toiletpaper = document.getElementById('toilet-paper');
let toiletpaperchanged = false;
let toiletpapercost = parseInt(toiletpaper.value);

let handsoap = document.getElementById('hand-soap');
let handsoapchanged = false;
let handsoapcost = parseInt(handsoap.value);

let wipes = document.getElementById('wipes');
let wipeschanged = false;
let wipescost = parseInt(wipes.value);

let papertowels = document.getElementById('paper-towels');
let papertowelschanged = false;
let papertowelscost = parseInt(papertowels.value);



// This variable is the final cost of all items added together
let finalcost = document.getElementById('final-cost');
let finalcostValue = finalcost.innerHTML;

let newfinalcost = 0;

// These functions are saying: "If the button is clicked, set the changed variable to the opposite of what it was before (change it from false to true)." Then we are saying: "If it's true that it's clicked, add that price to the total cost, but if it's false, subtract it from itself to make it 0 (Ex: 10 - 10 = 0)."
ramen.addEventListener('click', function () {
    ramenchanged = !ramenchanged;

    finalcost.innerHTML = (
        (ramenchanged ? ramencost : ramencost - ramencost) +
        (waterchanged ? watercost : watercost - watercost) +
        (toiletpaperchanged ? toiletpapercost : toiletpapercost - toiletpapercost) + (handsoapchanged ? handsoapcost : handsoapcost - handsoapcost) +
        (wipeschanged ? wipescost : wipescost - wipescost) +
        (papertowelschanged ? papertowelscost : papertowelscost - papertowelscost)
    ).toFixed(2);
})

water.addEventListener('click', function () {
    waterchanged = !waterchanged;

    finalcost.innerHTML = (
        (ramenchanged ? ramencost : ramencost - ramencost) +
        (waterchanged ? watercost : watercost - watercost) +
        (toiletpaperchanged ? toiletpapercost : toiletpapercost - toiletpapercost) + (handsoapchanged ? handsoapcost : handsoapcost - handsoapcost) +
        (wipeschanged ? wipescost : wipescost - wipescost) +
        (papertowelschanged ? papertowelscost : papertowelscost - papertowelscost)
    ).toFixed(2);
})

toiletpaper.addEventListener('click', function () {
    toiletpaperchanged = !toiletpaperchanged;

    finalcost.innerHTML = (
        (ramenchanged ? ramencost : ramencost - ramencost) +
        (waterchanged ? watercost : watercost - watercost) +
        (toiletpaperchanged ? toiletpapercost : toiletpapercost - toiletpapercost) + (handsoapchanged ? handsoapcost : handsoapcost - handsoapcost) +
        (wipeschanged ? wipescost : wipescost - wipescost) +
        (papertowelschanged ? papertowelscost : papertowelscost - papertowelscost)
    ).toFixed(2);
})

handsoap.addEventListener('click', function () {
    handsoapchanged = !handsoapchanged;

    finalcost.innerHTML = (
        (ramenchanged ? ramencost : ramencost - ramencost) +
        (waterchanged ? watercost : watercost - watercost) +
        (toiletpaperchanged ? toiletpapercost : toiletpapercost - toiletpapercost) + (handsoapchanged ? handsoapcost : handsoapcost - handsoapcost) +
        (wipeschanged ? wipescost : wipescost - wipescost) +
        (papertowelschanged ? papertowelscost : papertowelscost - papertowelscost)
    ).toFixed(2);
})

wipes.addEventListener('click', function () {
    wipeschanged = !wipeschanged;

    finalcost.innerHTML = (
        (ramenchanged ? ramencost : ramencost - ramencost) +
        (waterchanged ? watercost : watercost - watercost) +
        (toiletpaperchanged ? toiletpapercost : toiletpapercost - toiletpapercost) + (handsoapchanged ? handsoapcost : handsoapcost - handsoapcost) +
        (wipeschanged ? wipescost : wipescost - wipescost) +
        (papertowelschanged ? papertowelscost : papertowelscost - papertowelscost)
    ).toFixed(2);
})

papertowels.addEventListener('click', function () {
    papertowelschanged = !papertowelschanged;

    finalcost.innerHTML = (
        (ramenchanged ? ramencost : ramencost - ramencost) +
        (waterchanged ? watercost : watercost - watercost) +
        (toiletpaperchanged ? toiletpapercost : toiletpapercost - toiletpapercost) + (handsoapchanged ? handsoapcost : handsoapcost - handsoapcost) +
        (wipeschanged ? wipescost : wipescost - wipescost) +
        (papertowelschanged ? papertowelscost : papertowelscost - papertowelscost)
    ).toFixed(2);
})