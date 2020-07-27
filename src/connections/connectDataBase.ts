const  mongoose = require('mongoose');


async function database(){

    try{

        console.log("conectando a base de datos..")
        //la url cambia dependiendo si se abre en una maquina local o si se usa un cliente como MongoDB atlas
        await mongoose.connect('mongodb://127.0.0.1:27017/ganymede',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
      /*  mongoose.connection.on('open',(_:any) =>{
            console.log('Mongose conectado a mongo!')
        })*/

        

    }catch{

     /*   mongoose.connection.on('error',(err:any) =>{
            console.log(err)
        })*/

    }


} 

export default database;



/*let articuloABuscar:string;

class Datosextraidos {

    private title:string;

    private precio:number;

    private idArticulo:number;

    private SKDArticulo:number;

    private urlImagenes:[string];

    constructor(title:string,
        precio:number,
        idArticulo:number,
        SKDArticulo:number,
        urlImagenes:[string]){

            this.title = title;

            this.precio = precio;

            this.idArticulo = idArticulo;

            this.SKDArticulo = SKDArticulo;

            this.urlImagenes = urlImagenes;

        }


}
*/
