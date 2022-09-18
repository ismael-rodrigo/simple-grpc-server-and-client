const grpc = require('grpc')

const UserService = grpc.load('../server/user.proto').UserService

const client = new UserService('127.0.0.1:50051',
grpc.credentials.createInsecure())

module.exports = client
