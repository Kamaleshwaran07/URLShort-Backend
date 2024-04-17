import express from 'express'
import userContoller from '../Controllers/usercontroller.min.js'
import auth from '../Middleware/auth.min.js'
// import auth from '../Middleware/auth.min.js'
const userrouter = express.Router()
userrouter.get('/home', userContoller.homePage)
userrouter.post('/signup', userContoller.signup)
userrouter.post('/activation/:userId/:token', userContoller.activation)
userrouter.post('/login', userContoller.signin)
userrouter.post('/getUserInfo',  userContoller.getUser)
userrouter.post('/forgotpassword', userContoller.forgotPassword)
userrouter.post('/resetpassword/:userId/:token', userContoller.resetPassword)


userrouter.post('/createshorturl/:userId', userContoller.urlshortner)
userrouter.get('/:shortUrl', userContoller.shorturl)
userrouter.post('/geturlcount/:userId', userContoller.getShortUrlLength)
userrouter.post('/getcreatedurls/:userId',  userContoller.getCreatedUrls)

export default userrouter