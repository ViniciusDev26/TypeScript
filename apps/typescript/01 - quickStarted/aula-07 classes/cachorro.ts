import { Animal } from './animal'
export class Cachorro extends Animal {
    private raca;
    private cor;
    private idade;


    constructor(animal:string, raca:string, cor:string, idade:number){
        super(animal);
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
    }
}