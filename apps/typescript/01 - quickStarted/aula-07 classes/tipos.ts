export class Tipos{
    private tipos;
    constructor(){
        this.tipos = {
            lavar:[
                {animal: 'cachorro', valor: 40.00} ,
                {animal: 'gato', valor: 20.00},
                {animal: 'rammister' ,valor: 10.00}
            ],
            vender:[
                {animal: 'cachorro',valor:100.00},
                {animal: 'gato', valor: 20.00}
            ]
        }
    }

    public getTipos(){
        return this.tipos;
    }
}