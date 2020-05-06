const pdf = require("html-pdf");
const ejs = require("ejs");
var nomeDoUsuario = "Victor Lima";
var curso = "Foormacao Node.js";

ejs.renderFile("myfile.ejs",{name:nomeDoUsuario,curso:curso},(err,html) =>{
    if(err){
        console.log(err);
    }else{
        pdf.create(html,{}).toFile("./meupdf.pdf",(err,res)=>{
            if(err){
                console.log("um erro aconteceu")
            }else{
                console.log(res);
            }
        });
    }
}) //as variaveis recebem esses valores
