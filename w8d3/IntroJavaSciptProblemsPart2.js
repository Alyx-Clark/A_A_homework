//Phase 1: Callbacks

let array1 = ["Mary", "Brian", "Leo"];

function mapper(names) {
    let map1 = names.map(ele => `Mx. ${ele} Jingleheimer Schmidt`);
    return map1;
}

function titleize(names, printCallback) {
    printCallback(names).forEach(ele => console.log(ele));
}

titleize(array1, mapper);

//Phase 2: Constructors, Prototypes, and this

function Elephant(name, height, tricks) {
    this.name = "Jumbo";
    this.height = 108;
    this.tricks = ["painting a picture", "jumping over a fence", "pooping"];
}

Elephant.prototype.trumpet = function(){
    console.log(`${this.name} the elephant goes phrRRRRRRRRRRR!!!!!!!!`);
}

Elephant.prototype.grow = function(){
    this.height + 12;
}

Elephant.prototype.addTrick = function(trick){
    this.tricks.push(trick);
}
