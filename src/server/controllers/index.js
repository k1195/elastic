const model = require("../models")

async function getQuotes(req,res){
    const query = req.query;
    if(!query.text){
        res.status(422).json({
            errro : true,
            data: 'missing required param'
        })
        return
    }
    try {
        const result = await model.getQuotes(req.query);
        res.json({success:true,data:result})
    } catch (error) {
        res.status(500).json({success:false,error:error})
    }
}

async function addQuote(res,req){
    const body = req.body;
    if(!body.quote || !body.author){
        res.status(422).json({
            error:true,data:'missing params'
        })
        return;
    }
    try {
        const result = await model.insertNewQuote(body.quote,body.author)
        res.json({
            success:true,
            data:{
                id: result.body._id,
                author: body.author,
                quote: body.quote
            }
        })
    } catch (error) {
        res.status(500).json({success:false,error})
        
    }
}

module.exports = {
    getQuotes,
    addQuote
}