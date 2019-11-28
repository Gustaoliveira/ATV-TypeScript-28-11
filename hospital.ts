namespace Hospital{

    export class Hospital{
        
        private _nome: string;
        private _enfermeiro: Array<Enfermeiro>=[];
        private _medicos: Array<Medico>=[];
        private _Pacientes: Array<Paciente>=[];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public addEnfermeiro(enfermeiro:Enfermeiro): void{
             this._enfermeiro.push(enfermeiro);
        }

        public getEnfermeiro(Enfermeiros = Enfermeiro){
            return this._enfermeiro;
        }

        public addMedico(medico:Medico): void{
             this._medicos.push(medico);
        }

        public getMedico(Medicos = Medico){
            return this._medicos;
        }
    }
}