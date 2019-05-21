import { Animal } from './animal'
export class Cavalo extends Animal {
    private raca: string;

    constructor(animal: string, raca: string){
        super(animal)
        this.raca = raca;
    }

    public mover(distancia: number): void{
        let animal = super.getAnimal()
        console.log(`O ${animal}(${this.raca}) se moveu ${distancia} metros `)
    };
}