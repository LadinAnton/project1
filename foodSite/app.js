function optionBox(id, name, calories, price) {
    let sys1 = '<option value="'
    let sys2 = ']">'
    let sys3 = '</option>'
    let result = '<option value="[0,0]">ничего</option>';
    for (var i = 1; i < name.length; i++) {
        result+=sys1+'['+calories[i]+','+price[i]+sys2+name[i]+' - '+calories[i]+' кл. '+price[i]+' р.'+sys3;
    }
    document.getElementById(id).innerHTML = result;
}

function calc() {
    let price = 0;
    let calories = 0;

    let setOfEat = toNumber("setOfEat");
    let garnish = toNumber("garnish");
    let option1 = check("option1");
    let option2 = check("option2");

    price += setOfEat[1];
    price += garnish[1];
    price += option1[1];
    price += option2[1];

    calories += setOfEat[0];
    calories += garnish[0];
    calories += option1[0];
    calories += option2[0];

    if (setOfEat[1] == 0 || garnish[0] == 0) {
        error();
    } else {
        run(price, calories);
    }
}

function toNumber(id) {
    let sys = document.getElementById(id).value;
    sys = sys.substring(1,sys.length-1).split(',');
    sys = [Number(sys[0]),Number(sys[1])];
    return sys;
}

function check(id) {
    let sys = [0,0];
    if (document.getElementById(id).checked) sys = toNumber(id);
    return sys;
}


function run(price, calories) {
    document.getElementById("pay1").innerText = price;
    document.getElementById("pay2").innerText = calories;

    document.getElementById("total").style.display = "block";
    updateBorderColor("setOfEat", "white");
    updateBorderColor("garnish", "white");
}

function error() {
    document.getElementById("total").style.display = "none";
    updateBorderColor("setOfEat", "red");
    updateBorderColor("garnish", "red");
}

function updateBorderColor(id, color) {
    document.getElementById(id).style.borderColor = color;
}