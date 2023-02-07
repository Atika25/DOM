console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title= "document";
//console.log(document.head);

console.log(document.all);
console.log(document.all[8]);

document.all[8].textContent = "Masik cim";

//let cim= document.getElementById("main_title");
//cim.textContent="negyedikcim";

let items = document.getElementsByClassName("item");
console.log(items);

//items[2], textContent = "valami mas";
//items[2].style.backgroundColor = "red"

for (let i = 0; i < items.length; i++) {
    if (i % 2 == 1) {
        items[i].style.backgroundColor = "lightgray";
    }
}