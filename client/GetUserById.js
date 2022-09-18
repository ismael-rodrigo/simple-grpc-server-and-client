const client = require('./clientProto')


client.mark({id:0},(err ,user)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(user)
})


