const app = require("./index");

const connect = require("./configs/db");

app.listen(5000,async function(){
  try{await connect();
   console.log("listinig on port 5000");
}catch(err){
    console.error({message:err.message});
}
});