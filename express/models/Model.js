module.exports=function(modelName,DTO){

    var mongodb=require('./mongodb');

    var Schema = mongodb.mongoose.Schema;

    var DTOSchema = new Schema(DTO);

    var Model = mongodb.mongoose.model(modelName,DTOSchema);

    return Model;
};

