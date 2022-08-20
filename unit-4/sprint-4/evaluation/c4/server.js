const app = require("./index");

const connect = require("./configs/db");
app.listen(6666, async()=>{
  try{
  await connect();
  console.log("lis port 6666")
  }catch(err){
      console.error({error:err.message});
  }

});