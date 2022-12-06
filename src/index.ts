import app from './app'
import {sequelize} from './database/database'

import './models/tutor.model'
import './models/tutorado.model'
import './models/leccion.model'
import './models/pregunta.model'

async function main(){
    try {
        // await sequelize.authenticate()
        // console.log('DB on')
        // await sequelize.sync({force:true}) Borrar y crear la tabla al ejecutar
        // await sequelize.sync({ alter: true }) Modificar los cambios a la tabla sin borrarla
        // await sequelize.sync() Crea tablas si no existen
        
<<<<<<< HEAD
        // await sequelize.sync({ alter: true })
        // await sequelize.sync({force:true})
=======
     //await sequelize.sync({ alter: true })
         await sequelize.sync({force:true})
>>>>>>> 3be1d149b2a9b57402b9e8739f92ab86ca607d4f
        app.listen(4000)
        console.log('Server on -> port',4000);
        
    } catch (error) {
        console.error('DB error -> ',error);
    }
}

main();
