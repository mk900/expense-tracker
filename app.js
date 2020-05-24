// Include packages
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const passport = require('passport')
const routes = require('./routes')

// Setup server
const app = express()
// const port = 3000

// 如果在 Heroku 環境則使用 process.env.PORT
// 否則為本地環境，使用 3000 
const PORT = process.env.PORT || 3000


// Locate static file
app.use(express.static('public'))

// Set template engine L32-46
// app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
// app.set('view engine', 'hbs')

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }))

// Re-write for RESTful
app.use(methodOverride('_method'))

// DB connection
require('./config/mongoose')

// Load records model
const Record = require('./models/record')

// 註冊樣板 view engine & ifEquals 方法
const hbs = exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    ifEquals: function (arg1, arg2, options) {
      if (arg1 === arg2) return options.fn(this)
    }
  }
})
app.engine('hbs', hbs)
app.set('view engine', 'hbs')

// Account login
app.use(session({
  secret: 'ALPHA',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

app.use(flash())

// Messages handler 建立 local variables
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  // res.locals.errors = [{ message: req.flash('error') }]
  res.locals.errors = req.flash('error')
  next()
})

// Express router
app.use(routes)

// Listening
// 設定應用程式監聽的埠號
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})