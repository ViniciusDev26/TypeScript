"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(animal) {
        this.animal = animal;
    }
    Animal.prototype.getAnimal = function () {
        return this.animal;
    };
    Animal.prototype.mover = function (distancia) {
        console.log("O " + this.animal + " se moveu " + distancia + " metros ");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map