const Koa = require('koa'),
    Router= require('koa-router');
const Jobs = require('../models/models');


class Server{

     app:any
     router :any
    
     constructor(){
        this.app = new Koa()
        this.router = new Router()
     }

   async routes(){

        //REQUESTS:

        this.router.get('/jobs/save',async (ctx: object | any ) =>  {

                //console.log(ctx.request.query.datos)

                //console.log(JSON.parse(ctx.request.query.datos)) //str to objet

                const datosRequest:object|any = JSON.parse(ctx.request.query.datos);

                    //job es un array de datos, guarda job en data base abierta
                    const job = new Jobs({
                        job:datosRequest.job,
                        array:datosRequest.array
                })

                 //guardar un array de datos de un job en jobs de la database

                job.save((err:any,document:any) =>{
                     if(err) console.log(err);
                     console.log(document) 
                 })
                 
                 //console.log(job) 
                 
             
                 ctx.body = "Datos guardados con exito!"

        });


        this.router.get('/jobs/check/:id',async (ctx: object | any ) =>  {
        
           // typeof(ctx)
           // console.log( typeof(ctx) )
           // console.log( ctx )
            // abrir las dos apps y mandar request para ver como llega ctx para asignar al job a guardar

          /*  if (ctx.params.id == "save"){

                console.log("save")

                    //job es un array de datos, guarda job en data base abierta
                 const job = new Jobs({job:"String",
                    array:[{
                title:"String",
                price:21,
                id:21,
                SKD:21,
                img:"Array"
            }]})

                 //guardar un array de datos de un job en jobs de la database

                 job.save((err:any,document:any) =>{
                     if(err) console.log(err);
                     console.log(document) 
                 })
                 
                 console.log(job) 
                 
             
                 ctx.body = "Datos guardados con exito!"
            }*/




         //   if (ctx.params.id == "check"){

                //console.log("checking database")
                //consultar si existe el job
                //si existe enviar true, si no existe enviar null
                // busca todo el contenido  = const checking = Jobs.find()
                console.log(ctx.params.id)

                
                async function findDB(){
                    const checking:object|any = await Jobs.findOne({job : ctx.params.id})
                    
                    
                    if(checking){
                        console.log("obj")
                        return "true"
                    }else{
                        console.log("null")
                        return "false"
                    }


                    //return checking;

                    
                }
                
               
               ctx.body = await findDB()

           // }
            

        
        })



        //REQUESTS;

    }


    runServer(){

        
        

        this.routes()

        //start server:
        this.app
        .use(require('koa-body')())
        .use(this.router.allowedMethods())
        .use(this.router.routes());

        console.log('Server will Start at port 3000:.')
        this.app.listen(3000);
        
        //start server;

    }

}

export default Server;