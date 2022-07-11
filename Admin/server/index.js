const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require("cors")
const x=require("./rbk")

app.use(express.json())
app.use(cors())


//read
app.get('/',async(req,res)=>{
    x.find({},(err,result)=>{
        if(err)res.send(err)
        else{res.json(result)}
    })
})

//create
app.post('/',async (req,res)=>{
    let student=req.body
    let newstudent=new x(student)
    await newstudent.save()

    res.json(student)
})

//delete
app.delete('/:id',async(res,req)=>{
    await x.findByIdAndDelete(req.params.id)
    try{
        res.status(204).json({
            status:"mriglaa",
            data:{}
        })
    }catch(err){
        res.status(500).json({
            status:"le le le le",
            message:err
        })
    }
})

//update
app.patch('/:id',async(req,res)=>{
    const updatex= await x.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    try{
        res.status(200).json({
            status:'eyy pepa',
            data:{
                updatex
            }
        })
    }catch(err){
        console.log(err);
    }
})

//port
app.listen(5000,()=>{
    console.log("jawha behy");
})