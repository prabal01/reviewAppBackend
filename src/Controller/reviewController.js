const { saveReview, getReviewByProfileId } = require("../model.js/reviewModel")

exports.saveReviewController = async (req,res)=>{
    try {
        const result = await saveReview(req.body)
        if(result.err){
            console.log(result.msg)
            res.status(400).json({err:"Something went wrong!"})
            return
        }
        res.status(200).json({res:"review posted!"})

    } catch (error) {
        console.log(error)
        res.status(400).json({err: "Something went wrong!"})
    }
}
exports.getReviewsController = async (req,res)=>{
    try {
        const result = await getReviewByProfileId(req.body.profileId)
        if(result.err){
            console.log(result.msg)
            res.status(400).json({err:"Something went wrong!"})
            return
        }
        res.status(200).json({res:result})

    } catch (error) {
        console.log(error)
        res.status(400).json({err: "Something went wrong!"})
    }
}