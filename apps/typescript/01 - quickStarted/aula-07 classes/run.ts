// import { Animal } from './animal';
// import { Cavalo } from './cavalo';
// import { Cachorro } from './cachorro'

// let animal = new Animal('Cachorro');

// animal.mover(5);

// let cavalo = new Cavalo('Cavalo', 'Quarto de milha');

// cavalo.mover(50);

// let cachorro = new Cachorro('Cachorro', 'Rusky', 'Preto', 14);

import {Cachorro} from './cachorro';
import {Servicos} from './servicos'

let animal = new Cachorro('cachorro', 'pit bull', 'branco', 10);
let servicos = new Servicos;

servicos.lavar(animal.getAnimal(),40);