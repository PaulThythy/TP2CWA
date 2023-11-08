
export class Pizza{

    nom:string;
    img:string;
    desc:string;

    constructor(nom:string,img:string, desc:string){
        this.nom=nom;
        this.img=img;
        this.desc=desc;
    }

    toString():string{
        return this.nom+" - "+this.img+" - "+this.desc;
    }

    setNom(nom:string){
        this.nom=this.nom;
    }

    setImg(img:string){
        this.img="/assets/images/"+img+".jpeg";
    }

    setDesc(desc:string){
        this.desc=desc;
    }
}