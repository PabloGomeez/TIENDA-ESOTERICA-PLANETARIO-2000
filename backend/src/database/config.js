import mongoose from "mongoose";

export const dbConnection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://admin:root@cluster0.ayz2x.mongodb.net/tiendaEsotericaProyecto2?retryWrites=true&w=majority");
        //await mongoose.connect("mongodb+srv://misiontic2022_1:SoluWeb2022@cluster0.rjlj0.mongodb.net/gestorProyectos?retryWrites=true&w=majority");
        console.log("DB conectada")
        
    } catch (error) {
        console.log(error)
        
    }
}
 

