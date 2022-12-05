import express from 'express'
import path from 'path'
//import dotenv from "dotenv";
import session from 'express-session';
import flash from 'connect-flash';
//dotenv.config();

import tutorRouter from "./routes/tutor.route";
import preguntaRouter from "./routes/pregunta.route";
import tutoradoRouter from "./routes/tutorado.route";
import adminRouter from "./routes/admin.route";

const app = express()

//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'));

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './public')))
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: false, maxAge: 1000 * 60 * 60 },
}))
app.use(flash())

//global variable
app.use((req, res, next) => {
    app.locals.logged = req.flash('user')
    app.locals.idlogged = req.flash('id')
    next()
})

//routes
app.use('/tutor', tutorRouter)
app.use('/pregunta', preguntaRouter)
app.use('/tutorado', tutoradoRouter)
app.use('/admin', adminRouter)

export default app