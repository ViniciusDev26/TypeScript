"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tipos = /** @class */ (function () {
    function Tipos() {
        this.tipos = {
            lavar: [
                { animal: 'cachorro', valor: 40.00 },
                { animal: 'gato', valor: 20.00 },
                { animal: 'rammister', valor: 10.00 }
            ],
            vender: [
                { animal: 'cachorro', valor: 100.00 },
                { animal: 'gato', valor: 20.00 }
            ]
        };
    }
    Tipos.prototype.getTipos = function () {
        return this.tipos;
    };
    return Tipos;
}());
exports.Tipos = Tipos;
//# sourceMappingURL=tipos.js.map