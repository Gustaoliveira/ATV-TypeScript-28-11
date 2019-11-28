namespace Hospital{

    export class Enfermeiro extends Hospital{

        private _coren: string;

        public getCoren(){
            return this._coren;
        }

        public setCoren(coren:string){
            this._coren = coren;
        }
    }
}