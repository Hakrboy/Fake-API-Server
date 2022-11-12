module.exports = (err,req,res,next) =>{
    if (process.env.NODE_ENV != 'dev'){
        sendErrorToDev(err,res);
    }else{
        sendErrorToProd(err,res);
    }
}

const sendErrorToDev = (err,res)=>{
    const statusCode = err.statusCode|| 500;
    res.status(statusCode).json({
      success: 0,
      message: err.message,
      stack: err.stack
    }) 
}

const sendErrorToProd = (err,res)=>{
    const statusCode = err.statusCode|| 500;
    if (err.isOperational){
        res.status(statusCode).json({
            success: 0,
            message: err.message
          }) 
    }else{
        res.status(statusCode).json({
            success: 0,
            message: "Aaha, Some thing Went wrong, Paradon!"
          }) 
    }
   
}