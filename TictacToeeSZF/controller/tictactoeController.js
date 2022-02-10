class TTTController {
    constructor() {
        const TTTtomb = [];
        new JatekterView(TTTtomb, $("article"));
        const infoView=new InfoView();
        const tttModel = new TTTModel(TTTtomb);
        let lepes = 0;
        $(window).on("kattintas", (event) => {

            if (lepes % 2 == 0) {
                event.detail.setElem("X");
                let nev=infoView.getOjatekos()
                infoView.setKovJatekos(nev +" következik")
            } else {
                event.detail.setElem("O");
                let nev=infoView.getXjatekos()
                infoView.setKovJatekos(nev + " következik")
            }
            lepes++;
            // kezeljük az állapotot (győzelem, döntetlen, vagy megy tovább)
            let allapot = tttModel.getEll();
            if (allapot == "X") {               
                let nev=infoView.getXjatekos()
                jatekvege(nev+" nyert");
            } else if (allapot == "O") {             
                let nev=infoView.getOjatekos()
                jatekvege(nev+" nyert");

            }else if(lepes==9){
                jatekvege("Döntetlen");
            }
        })
        function jatekvege(szoveg){
            TTTtomb.forEach(elem=>{
                elem.setAktivFalse();
            })
            infoView.setJatekvege(szoveg)

        }


    }
}