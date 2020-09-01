export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-tdd-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tyf459%#-):=ghb'
}
