const client = require('./clientProto')


client.list({},(err ,users)=>{
    console.log(users)
})