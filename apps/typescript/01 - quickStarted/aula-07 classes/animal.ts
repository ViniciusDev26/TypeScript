export class Animal {
    private animal : string;

    constructor(animal : string) {
        this.animal = animal;
    }

    public getAnimal(){
        return this.animal
    }

    public mover(distancia : number) {
        console.log(`O ${this.animal} se moveu ${distancia} metros `)
    }
}