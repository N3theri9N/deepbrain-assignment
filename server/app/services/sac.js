import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function SacService(){

    const Sac = db.Sac;
    const dbo = getDatabase();

    return {
        regist( req, res){
            console.log("SAC regist");
            new Sac(req.body).save(function(err){
                if(err){
                    res.status(500).json({message:err});
                    return;
                } else {
                    res.status(200).json({ok : "ok"});
                }
            })
        },
        getSac(_req, res){
            Sac.find().exec(
                (err, sac) => {
                    res.status(200).json({sac});
                }
            );
        },
        getSacById(id, res){
            Sac.findById({_id : id})
                .exec(
                (err, sac) => {
                    res.status(200).json({sac});
                }
            )
        },
        update(req, res){
            Sac.updateOne({_id : req.body._id}, { $set : req.body }).exec(
                (err, sac) => {
                    res.status(200).json({ok : "ok"});
                }

            )
        },
        delete(id, res){
            Sac.deleteOne({_id : id}).exec(
                (err, sac) => {
                    res.status(200).json({ok : "ok"});
                }
            )
        }
    }

}