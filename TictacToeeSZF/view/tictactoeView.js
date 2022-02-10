class ElemView{

    constructor(szuloelem) {
        szuloelem.append(`<div><p></p></div>`);
        this.aktiv=true;
        this.ertek="-";
        this.Elem=szuloelem.children("div:last");
        this.pElem=this.Elem.children("p");
        this.Elem.on("click",()=>{
            if(this.aktiv){
                this.aktiv=false;
                this.kattintasTrigger();
            }
        })

    }
    setAktivFalse(){
        this.aktiv=false;
    }
    
    setElem(ertek){
        this.ertek=ertek;
        this.pElem.text(ertek);
    }
    kattintasTrigger(){
        let esemeny=new CustomEvent("kattintas",{ detail:this})
        window.dispatchEvent(esemeny);
    }

}

class JatekterView{
    constructor(tomb, szuloelem){
        //const szuloelem=$("article");
        for (let index = 0; index < 9; index++) {
            tomb.push(new ElemView(szuloelem));
            
        }
      
    }


}


class InfoView{
    constructor(){
        this.kovJatekosElem=$(".kovetkezoJatekos");
        this.jatekvegeElem=$(".jatekvege");
        this.XjatekosElem=$("#Xman");
        this.OjatekosElem=$("#Oman");
        this.setKovJatekos(this.getXjatekos());
    }
    getOjatekos(){
       return this.OjatekosElem.val();
    }
    getXjatekos(){
        return this.XjatekosElem.val();
     }

    setJatekvege(szoveg){
        this.jatekvegeElem.text(szoveg);
    }
    setKovJatekos(szoveg){
        this.kovJatekosElem.text(szoveg);
    }

}