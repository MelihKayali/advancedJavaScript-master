let sayi1 = 10;
sayi1 = "Melih KAYALI";
let student = {id: 1, name : "Melih KAYALI"}
console.log(student);

function save(puan=31,ogrenci) {
    console.log(ogrenci.name + " : " + puan );
}

save(undefined,student);


let students = ["Bozayı Birkan  " ,"Melih KAYALI" , "Sezer Tetik" , "İbrahim KOC"];
console.log(students);

let students2 = [student,{id: 2, name : "İbrahim KOÇ"} , "Ankara" , {city : "İstanbul"}];
console.log(students2);


rest
let showProducts = function (id,...products) {
    console.log(id);
    console.log(products[0]);
}

console.log(typeof showProducts);
showProducts(10,["Elma","Armut","Karpuz"]);


spread
let points = [1,2,3,4,5,6,7,8,9,10,31,666,987987987]
console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC" ,"D" ,... "EFG" ,"H");

Destructuring(HAYATi)
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximumHigh]] = populations
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximumHigh);


function someFuncion([small1] , number) {
    console.log(small1);
}
someFuncion(populations);

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id);
console.log(name);