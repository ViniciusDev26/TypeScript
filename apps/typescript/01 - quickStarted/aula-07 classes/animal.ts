export class Animal {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public log(value : any) : void {
        console.log("O " + this.nome + " se moveu " + value + " metros")
    }

    public mover(distancia : number) {
        this.log(distancia);
    }
}