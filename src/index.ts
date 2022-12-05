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
        
  //   await sequelize.sync({ alter: true })
        // await sequelize.sync({force:true})
        app.listen(4000)
        console.log('Server on -> port',4000);
        
    } catch (error) {
        console.error('DB error -> ',error);
    }
}

main();
