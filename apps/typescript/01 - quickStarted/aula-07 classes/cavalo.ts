import { Animal } from './animal'
export class Cavalo extends Animal {
    private raca: string;

    constructor(animal: string, raca: string){
        super(animal)
        this.raca = raca;
    }

    public post(value: number, animal: string): void{
        console.log(`O ${animal} ${this.raca} se moveu ${value} metros `)
    }

    public mover(distancia: number): void{
        let animal = super.getAnimal()
        this.post(distancia, animal)
    }

}