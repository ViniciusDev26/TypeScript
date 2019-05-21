"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tipos_1 = require("./tipos");
var tipos = new tipos_1.Tipos();
var tipos_obj = tipos.getTipos();
var servico_valor = null;
function verificador(animal, dinheiro) {
    console.log(dinheiro);
    //verifica se o animal existe
    for (var i = 0; i < tipos_obj.lavar.length; i++) {
        if (tipos_obj.lavar[i].animal == animal) {
            //verifica se tem dinheiro para fazer a ação
            if (dinheiro >= tipos_obj.lavar[i].valor) {
                servico_valor = tipos_obj.lavar[i].valor;
                return true;
            }
            else
                return console.log("Dinheiro insuficiente");
        }
        else
            return console.log("animal não encontrado");
    }
}
var Servicos = /** @class */ (function () {
    function Servicos() {
    }
    Servicos.prototype.lavar = function (animal, money) {
        if (verificador(animal, money)) {
            this.money = money;
            this.valor = servico_valor;
            this.troco = this.money - this.valor;
            console.log("Lavado Com Sucesso");
            if (this.troco > 0) {
                console.log("seu troco \u00E9 de: R$ " + this.troco);
            }
            return true;
        }
    };
    return Servicos;
}());
exports.Servicos = Servicos;
//# sourceMappingURL=servicos.js.map