const adminAuth = (req,res,next)=>{
    console.log("User is getting checked");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    }
}

module.exports ={
    adminAuth,
};