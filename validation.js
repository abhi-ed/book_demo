const joi = require ('joi')
const createSchema = (obj) => {
    try {
        let schema = joi.object({
            title : joi.string().required(),
            summary:joi.string(),
            author:joi.string().required()
        })
        let { error, value } = schema.validate(obj);
        value.summary = value.summary ? value.summary : '' 
        return { error, value }
    } catch (e) {
        console.log("Error while validating create schema", e);
    }
}
const updateSchema = (obj) => {
    try {
        let schema = joi.object({
            id:joi.string().guid().required(),
            title : joi.string(),
            summary:joi.string(),
            author:joi.string()
        })
        let { error, value } = schema.validate(obj);
        return { error, value }
    } catch (e) {
        console.log("Error while validating update schema", e);
    }
}
const readSchema = (obj) => {
    try {
        let schema = joi.object({
            id : joi.string().guid()
        })
        let { error, value } = schema.validate(obj);
        return { error, value }
    } catch (e) {
        console.log("Error while validating read schema", e);
    }
}
const deleteSchema = (obj) => {
    try {
        let schema = joi.object({
            id : joi.string().guid().required()
        })
        let { error, value } = schema.validate(obj);
        return { error, value }
    } catch (e) {
        console.log("Error while validating delete schema", e);
    }
}
module.exports = {
    createSchema,updateSchema,readSchema,deleteSchema
}