class TTTModel {
    //lellenőrzi, hogy X, vagy O nyert-e? 
    constructor(tomb) {
        this.tomb = tomb;
    }

    getEll() {
        let txt = this.getVEllenorzes() + this.getFEllenorzes()+this.atloEll();
        let allapot = "";

        if (txt.indexOf("XXX") >= 0) {
            allapot = "X";
        }
        if (txt.indexOf("OOO") >= 0) {
            allapot = "O";
        }

        return allapot;
    }
    atloEll(){
        let ell=this.tomb[0].ertek+this.tomb[4].ertek+this.tomb[8].ertek+"|"
        ell+=this.tomb[2].ertek+this.tomb[4].ertek+this.tomb[6].ertek+"|"
        return ell;
    }
    getFEllenorzes() {
        let ell = "";
        for (let index = 0; index < 3; index++) {
            ell+=this.tomb[index].ertek+this.tomb[index+3].ertek+this.tomb[index+6].ertek+"|"

        }
        console.log(ell);
        return ell;
    }


    getVEllenorzes() {
        //tömbből előszedi, X, O értékeket és előállítja a ellsztringet

        let ellString = "";
        this.tomb.forEach((element, index) => {

            ellString += element.ertek;
            if (index % 3 == 2) {
                ellString += "|";
            }

        });

        return ellString;
    }
}