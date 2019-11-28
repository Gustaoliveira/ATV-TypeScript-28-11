namespace Hospital{
    export class Funcionario extends Medico{
        private _codFuncionario: number;

        public getcodFuncionario(){
            return this._codFuncionario;
        }

        public setcodFuncionario(codigo:number){
            this._codFuncionario = codigo;
        }
    }
}