"use strict";
// import { Animal } from './animal';
// import { Cavalo } from './cavalo';
// import { Cachorro } from './cachorro'
Object.defineProperty(exports, "__esModule", { value: true });
// let animal = new Animal('Cachorro');
// animal.mover(5);
// let cavalo = new Cavalo('Cavalo', 'Quarto de milha');
// cavalo.mover(50);
// let cachorro = new Cachorro('Cachorro', 'Rusky', 'Preto', 14);
var cachorro_1 = require("./cachorro");
var servicos_1 = require("./servicos");
var animal = new cachorro_1.Cachorro('cachorro', 'pit bull', 'branco', 10);
var servicos = new servicos_1.Servicos;
servicos.lavar(animal.getAnimal(), 40);
//# sourceMappingURL=run.js.map