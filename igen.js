var tomb = ["egy", "kettő", "három"];
document.write("<button onclick='kiiras(0)'>Első elem</button>");
document.write("<button onclick='kiiras(1)'>Másodikelem</button>");
document.write("<button onclick='kiiras(2)'>Harmadik elem</button>");
document.write("<button onclick='osszese()'>Összes kiírva</button>");
document.write("<button onclick='ujElem()'>Új elem</button>");
document.write("<button onclick='osszes()'>Összes</button>");



function kiiras(index)
{
    alert(tomb[index]);
}
function osszese()
{
    var osszeg = tomb.join(", ");
    alert(osszeg);
}
function ujElem()
{
    var ujElem = prompt("Adj meg egy új elemet:");
    if (ujElem)
    {
        tomb.push(ujElem);
        alert("Az új elem hozzáadva!");
    }
}
function osszes()
{
    alert("A tömbben lévő összes elem: " + tomb.length);
}
function törlés() {
    var index = document.getElementById("index").value;
    if (index >= 0 && index < tomb.length) {
        tomb.splice(index, 1);
        alert("A tömbben lévő összes elem: " + tomb.length);
    } else {
        alert("Érvénytelen index!");
    }
}