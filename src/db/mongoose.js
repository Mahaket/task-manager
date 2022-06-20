const mongoose = require('mongoose')

mongoose.connect(process.env.URL)




// const task = new Task({
//     description: '    Study         ',
// })

// task.save().then((result) => {
//      console.log(result)
// }).catch((error) => {
//     console.log("Error", error)
// })