export class Animal {
    private animal : string;

    constructor(animal : string) {
        this.animal = animal;
    }

    public getAnimal(){
        return this.animal
    }

    public log(value : number) : void {
        console.log(`O ${this.animal} se moveu ${value} metros `)
    }

    public mover(distancia : number) {
        this.log(distancia);
    }
}