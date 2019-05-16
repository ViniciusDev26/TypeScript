"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.log = function (value) {
        console.log("O " + this.nome + "se moveu " + value + " metros");
    };
    Animal.prototype.mover = function (distancia) {
        this.log(distancia);
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map