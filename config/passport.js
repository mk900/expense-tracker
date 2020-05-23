const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcryptjs')
// const FacebookStrategy = require('passport-facebook').Strategy

module.exports = passport => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({ email: email }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Email 尚未註冊' })
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err
          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false, { message: 'Email 或密碼不正確' })
          }
        })
      })
    })
  )

  // 序列化，只存 id 就好，節省資料量
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  // 取出 user 資料以後，可能傳給前端樣板，故加入.lean().exec()
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .lean()
      .exec((err, user) => {
        done(err, user)
      })
  })
}