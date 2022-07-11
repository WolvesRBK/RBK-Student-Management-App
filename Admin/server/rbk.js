const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://omar:omaromar@cluster011.efay8.mongodb.net/RBK?retryWrites=true&w=majority',
{useNewUrlParser: true})
.then(()=>console.log('mongo DB connected'))
.catch(err=>console.log(err))

let R=new mongoose.Schema({
    "studentName":{type:String,require:true},
    "email":{type:String,require:true},
    "age":{type:Number,require:true},
    "cohort":{type:Number,require:true},
    "redpins":{type:Number,require:true},
    "yellowpins":{type:Number,require:true},
    "bluepins":{type:Number,require:true},
    "password":{type:String,require:true},
    "gender":{type:String,require:true},
})

const x = mongoose.model('students',R)
// x.create({
//     "studentName":"x",
//     "email":"x",
//     "age":"1",
//     "cohort":"1",
//     "redpins":"4",
//     "yellowpins":"5",
//    "bluepins":"4",
//    "password":"x",
//     "gender":"x",
// })
module.exports=x