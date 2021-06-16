const express = require("express");
const app = express();

const nodemailer= require("nodemailer");

require("./db/conn.js");
const hbs =require ("hbs");
const path =require ("path");

const Query= require("./models/query");
const Donate= require("./models/donate");
const Register= require("./models/reg");
const static_path = path.join(__dirname,"../Public");
app.use(express.static(static_path));

const views_path = path.join(__dirname,"../templates/views");
const navtemp_path = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",views_path); 

hbs.registerPartials(navtemp_path);

app.get("/",( req, res )=> { 
    // res.send("Hi environment");
    res.render("index");
});

app.get("/blog",( req, res )=> { 
    // res.send("Hi environment");
    res.render("blog");
});

//event
app.get("/events",( req, res )=> { 
    // res.send("Hi environment");
    res.render("events");
});
// app.get("/footer",(req,res)=>{
//     res.render("index");
    
// });
app.get("/donation",( req, res )=> { 
    // res.send("Hi environment");
    res.render("donation");
});
//
app.get("/ourteam",( req, res )=> { 
    // res.send("Hi environment");
    res.render("ourteam");
});

app.get("/reg",( req, res )=> { 
    // res.send("Hi environment");
    res.render("reg");
});

app.get("/succesfulreg",( req, res )=> { 
    // res.send("Hi environment");
    res.render("succesfulreg");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/footer",async (req,res)=>{
   
    console.log("name:", req.body.fname );

    try{
        const Queryrecord= new Query({
           fname: req.body.fname, 
           lname: req.body.lname, 
           Email: req.body.Email, 
           Feedback: req.body.Feedback, 


        })

        const querystatus= await Queryrecord.save();
        console.log(querystatus);
        
       
        
        // console.log(window.location.pathname);
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'testmail2800@gmail.com',
                pass:'Password@12'
            }
        })
        const mailoptions = {
            from:'testmail2800@gmail.com',
            to:req.body.Email,
            cc:'harshit.19cse@bmu.edu.in',
            subject:'Environment Club-Your Feedback Matters',
            text: 'Thank you for your precious feedback we really appreciate your efforts.'
        }
        transporter.sendMail(mailoptions,(error,info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }
            else{
                console.log('Email Sent');
                res.send('success');
            }
        })

        return res.redirect("/");
    }
    catch(e)
    {
        res.status(400);
        res.send(e);
    }
});


//donation
app.post("/donation",async (req,res)=>{
   
    console.log("name:", req.body.firstname );

    try{
        const Donationrecord= new Donate({
            
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mail: req.body.mail,
            Inspiration:  req.body.Inspiration,
            checkbox: req.body.checkbox,
            name: req.body.name,
            contactno: req.body.contactno,
            amount: req.body.amount,
            upi: req.body.upi,
            transacid: req.body.transacid,


        })

        const donationstatus= await Donationrecord.save();
        console.log(donationstatus);
        
    //    res.render("index");
       
        // console.log(window.location.pathname);


        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'testmail2800@gmail.com',
                pass:'Password@12'
            }
        })
        const mailoptions = {
            from:'testmail2800@gmail.com',
            to:req.body.mail,
            cc:'hargro28@gmail.com',
            subject:'Environment Club',
            text: 'Thank you for your donation we really appreciate your efforts.'
        }
        transporter.sendMail(mailoptions,(error,info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }
            else{
                console.log('Email Sent');
                res.send('success');
            }
        })
       res.render("donationsucc");
    }
    catch(e)
    {
        res.status(400);
        res.send(e);
        console.log(e);
    }
});



//donation-end

//regiter
app.post("/reg",async (req,res)=>{
   
    console.log("name:", req.body.firstname );

    try{
        const Registerrecord= new Register({
            
            rfirstname: req.body.rfirstname,
            rlastname: req.body.rlastname,
            rmail: req.body.rmail,
            Contact: req.body.Contact,
            batch:  req.body.batch,
            event: req.body.event,
            suggestions: req.body.suggestions,


        })

        const regstatus= await Registerrecord.save();
        console.log(regstatus);
        
    //    res.render("index");
       
        // console.log(window.location.pathname);


        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'testmail2800@gmail.com',
                pass:'Password@12'
            }
        })
        const mailoptions = {
            from:'testmail2800@gmail.com',
            to:req.body.mail,
            cc:'harshit.19cse@bmu.edu.in',
            subject:'Environment Club- Event Registeration',
            text: 'You have successfully registered for the event.Lokking forward for great participation.'
        }
        transporter.sendMail(mailoptions,(error,info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }
            else{
                console.log('Email Sent');
                res.send('success');
            }
        })
            res.render("succesfulreg");
    }
    catch(e)
    {
        res.status(400);
        res.send(e);
        console.log(e);
    }
});


//register-end


app.listen(3000 , () => { 
    console.log("server is listening to port "); });