import express from 'express'
import pkg from 'hbs';
const { hbs } = pkg;
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'


//set var to get path directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publishDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')


const app = express()
const PORT = process.env.PORT || 5000

//on indique qu'on utilise le format hbs comme template engine
app.set('view engine', 'hbs');

//redefinition du repertoire des vues
app.set('views', viewsPath)

//definition du repertoire des partials https://handlebarsjs.com/guide/partials.html#basic-partials
pkg.registerPartials(partialsPath)


//on indique le repertoire public pour les fichiers statiques
app.use(express.static(publishDirectoryPath))

//création d'une route pour la page index
app.get('/', (req, res)=>{
    res.render('index', {
        title : 'Starter front NodeJS',        
    })
})

//creation d'une route pour la page about
app.get('/about', (req, res)=>{
    res.render('about', {
        title : 'page about',        
    })
})



//demarrare de notre serveur
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))




  // todo montrer le templating + integration carte + heroku