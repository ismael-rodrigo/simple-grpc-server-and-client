const grpc = require('grpc')

const userProto = grpc.load('user.proto')

const server = new grpc.Server()

const fakeDB = [
    {id:1 , name:'ismael'},
    {id:2, name:'rodrigo'},
    {id:3, name:'sousa'},
    {id:4, name:'brasil'},
]


server.addService(userProto.UserService.service , {
    list:(_,callback)=>{
        callback(null,fakeDB)
    },
    mark:(call ,callback)=>{
        const user = fakeDB.find((item)=>item.id == call.request.id)
        if(user){
            callback(null,user)
        }
        else {
            callback(null)
        }
        
    }

})

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('server started')
server.start()