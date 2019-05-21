import {Tipos} from './tipos'
let tipos = new Tipos();
let tipos_obj = tipos.getTipos();
let servico_valor = null;
function verificador(animal,dinheiro){

    console.log(dinheiro)
    //verifica se o animal existe
    for(let i = 0; i < tipos_obj.lavar.length; i++){
        if(tipos_obj.lavar[i].animal == animal){
            //verifica se tem dinheiro para fazer a ação
            if(dinheiro >= tipos_obj.lavar[i].valor){
                servico_valor = tipos_obj.lavar[i].valor;
                return true;
            }
            else
                return console.log("Dinheiro insuficiente");

        }
        else
            return console.log("animal não encontrado")
    }

}
export class Servicos {
    private money;
    private valor;
    private troco;


    public lavar(animal:string, money:number){
        if(verificador(animal, money)){
            this.money = money
            this.valor = servico_valor;
            this.troco = this.money - this.valor;

            console.log("Lavado Com Sucesso");
            if(this.troco > 0){
                console.log(`seu troco é de: R$ ${this.troco}`)
            }
            return true;
        }
    }
}