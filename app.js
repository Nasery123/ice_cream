const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    Qty: 0,
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    Qty: 0,
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    Qty: 0,
}];

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    Qty: 0,
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    Qty: 0,
}];

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    Qty: 0,
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    Qty: 0,
}]
function buyStrawberry() {
    let foundIceCream = iceCream[2];
    foundIceCream.Qty++;
    drawIceCream(foundIceCream)

}
function buyVanilla() {
    let foundIceCream = iceCream[1];
    foundIceCream.Qty++;
    drawIceCream(foundIceCream)

}
function buyCookiDough() {
    let foundIceCream = iceCream[0];
    foundIceCream.Qty++;
    drawIceCream(foundIceCream)
}
function drawIceCream(item) {
    let iceCreamElem = document.getElementById('items')
    if (item.Qty == 1) {
        iceCreamElem.innerHTML += `
        <div class="col-4"> ${item.name}</div>
        <div id='${item.name}' class="col-3"> ${item.Qty} </div>
        <div class="col-3"> $${item.price}</div>
        <div class="px-3"><hr></div>

        `
    } else {
        document.getElementById(item.name).innerText = item.Qty
    }
    drawTotal()


}


// topings
function buySprinkles() {
    let foundtopping = toppings[0];
    foundtopping.Qty++;
    drawTopping(foundtopping)

}

function buyChocolateChips() {
    let foundtopping = toppings[1];
    foundtopping.Qty++;
    drawTopping(foundtopping)

}
function drawTopping(item) {
    let toppingElem = document.getElementById('items')
    if (item.Qty == 1) {
        toppingElem.innerHTML += `
        <div class="col-4"> ${item.name}</div>
        <div id='${item.name}' class="col-3"> ${item.Qty} </div>
        <div class="col-3"> $${item.price}</div>
        <div class="px-3"><hr></div>
        `
    } else {
        document.getElementById(item.name).innerText = item.Qty
    }

    drawTotalTopping()
    totalpTopay()
}





// containers

function buyWaffleCone() {
    let foundContainer = containers[0];
    foundContainer.Qty++;
    drawContainer(foundContainer)

}
function buyWaffleBowl() {
    let foundContainer = containers[1];
    foundContainer.Qty++;
    drawContainer(foundContainer)

}
function drawContainer(item) {
    let containerElem = document.getElementById('items')
    if (item.Qty == 1) {
        containerElem.innerHTML += `
        <div class="col-4"> ${item.name}</div>
        <div id='${item.name}' class="col-3"> ${item.Qty} </div>
        <div class="col-3"> $${item.price}</div>
        <div class="px-3"><hr></div>
        `
    } else {
        document.getElementById(item.name).innerText = item.Qty
    }
    drawTotalContainer()
    totalpTopay()

}
let total1 = 0;
function drawTotal() {

    iceCream.forEach(item => item.Qty > 0 ? total1 += item.Qty * item.price : total1 += 0)
    document.getElementById('total').innerText = total1.toString();
    totalpTopay()
}
let total2 = 0;
function drawTotalTopping() {

    toppings.forEach(item => item.Qty > 0 ? total2 += item.Qty * item.price : total2 += 0)
    document.getElementById('totalTop').innerText = total2.toString();
    totalpTopay()
}
let total3 = 0;
function drawTotalContainer() {

    containers.forEach(item => item.Qty > 0 ? total3 += item.Qty * item.price : total3 += 0)
    document.getElementById('totalContainer').innerText = total3.toString();
    totalpTopay()
}
function totalpTopay() {
    let total = total1 + total2 + total3;
    document.getElementById('totalToPay').innerText = total.toString();

}
totalpTopay()
