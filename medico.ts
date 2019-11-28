namespace Hospital{

    export class Medico extends Hospital{

        private _crm: string;
        private _especialidade: string;

        public getCrm(){
            return this._crm;
        }

        public setCrm(crm:string){
            this._crm = crm;
        }

        public getEspecialidade(){
            return this._especialidade;
        }

        public setEspecialidade(especialidade:string){
            this._especialidade = especialidade;
        }
    }
}