var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var childElement1 = document.getElementById("CE1");
var childElement2 = document.getElementById("CE2");
var childElement3 = document.getElementById("CE3");

button1.addEventListener('click', cart1)

function cart1(){
    var a = document.createElement("div");
    var b = document.createElement("div");
    var c = document.createElement("span");
    var d = document.createElement("div");
    var e = document.createElement("span");
    var btn = document.createElement("button");

    b.innerHTML="Quantity : ";
    console.log(a);
    d.innerHTML="Price : ";
    btn.innerHTML="Remove";
    var input = document.getElementById("input1");
    var c;
     c.innerHTML = input.value;
     value = c.innerHTML;
     pri = value * 500;
     console.log(pri);
     e.innerHTML = pri;
     
    document.getElementById("CE1").innerHTML= a.innerText = "Product1";
    document.getElementById("CE1").appendChild(b);
    b.appendChild(c);
    c.appendChild(d);
    d.appendChild(e);
    e.appendChild(btn);
    console.log(d);

    btn.addEventListener('click', Removing)

    function Removing(){
        document.getElementById("CE1").innerHTML = "";
    }
}

button2.addEventListener('click', cart2)

function cart2(){
    var a = document.createElement("div");
    var b = document.createElement("div");
    var c = document.createElement("span");
    var d = document.createElement("div");
    var e = document.createElement("span");
    var btn = document.createElement("button");

    b.innerHTML = "Quantity :";

    console.log(a);

    d.innerHTML = "Price :";
    btn.innerHTML = "Remove";

    var input = document.getElementById("input2");
    var c;
    c.innerHTML = input.value;
    value = c.innerHTML;
    pri = value * 1000;
    e.innerHTML = pri;
    console.log(pri);

    document.getElementById("CE2").innerHTML = a.innerText = "Product-2";
    document.getElementById("CE2").appendChild(b);
    b.appendChild(c);
    c.appendChild(d);
    d.appendChild(e);
    e.appendChild(btn);

    console.log(d);
    btn.addEventListener('click', Removing)

    function Removing(){
        document.getElementById("CE2").innerHTML = "";
    }

}

button3.addEventListener('click', cart3)

function cart3(){
    var a = document.createElement("div");
    var b = document.createElement("div");
    var c = document.createElement("span");
    var d = document.createElement("div");
    var e = document.createElement("span");
    var btn = document.createElement("button");

    b.innerHTML = "Quantity :"

    console.log(a);

    d.innerHTML = "Price :";
    btn.innerHTML = "Remove";

    var input = document.getElementById("input3");
    var c;
    c.innerHTML = input.value;
    value = c.innerHTML;
    pri = value * 2000;
    e.innerHTML = pri;
    console.log(pri);

    document.getElementById("CE3").innerHTML = a.innerText = "Product-3";
    document.getElementById("CE3").appendChild(b);
    b.appendChild(c);
    c.appendChild(d);
    d.appendChild(e);
    e.appendChild(btn);

    console.log(d);

    btn.addEventListener('click', Removing)

    function Removing(){
        document.getElementById("CE3").innerHTML = "";
    }
}