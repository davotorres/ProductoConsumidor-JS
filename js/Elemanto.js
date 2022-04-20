class Elemento{
    constructor(estado = false){
        this.estado = estado;
    }

    setEstado(estado){
        this.estado = estado;
    }

    getEstado(){
        return this.estado;
    }
}