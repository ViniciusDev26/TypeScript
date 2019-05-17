"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(animal, raca) {
        var _this = _super.call(this, animal) || this;
        _this.raca = raca;
        return _this;
    }
    Cavalo.prototype.post = function (value, animal) {
        console.log("O " + animal + " " + this.raca + " se moveu " + value + " metros ");
    };
    Cavalo.prototype.mover = function (distancia) {
        var animal = _super.prototype.getAnimal.call(this);
        this.post(distancia, animal);
    };
    return Cavalo;
}(animal_1.Animal));
exports.Cavalo = Cavalo;
//# sourceMappingURL=cavalo.js.map