var sr = require('./evn-micro')
var rdms = require('./rd-micro.js')

async function gateway(student, PRCSEvns){
    var callback = new Promise((req, res)=> {
        //This gateway is needed if in the future someone needs to further process these events.
        //This also limits redundant code.
        var fin = await rdms.handler(student, PRCSEvns)
    })
    let r = await callback
    return r
}


module.exports = {
    explore: async function(student) {
        var callback = new Promise(async (res, rej) => {
            var PRCSEvns = await sr.cityspecific(student.Location)
            //These are the events to process
            res(PRCSEvns)
            
        })

        let r = await callback; 
        return r;
    }, 
    testexplore: async function(student) {
        var callback = new Promise(async (res, rej) => {
            var PRCSEvns = await sr.all()
            //These are the events to process
            //Here comes the recommendations
            var returner = await gateway(student, PRCSEvns)
            
        })

        let r = await callback; 
        return r;
    }, 
}