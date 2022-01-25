const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000



app.get('', (req, res)=>{
    res.send(`
        <h1>Hello World !!! à tous</h1>
        <br/>        `
    )
})


app
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  // todo montrer le templating + integration carte + heroku