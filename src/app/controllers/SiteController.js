const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')
class SiteController {

    //[GET] /
    async index(req,res) {
        try {
            const courses = await Course.find({});
            // res.json(courses)
            res.render("home", {
                courses: multipleMongooseToObject(courses)
            })
        } catch (error) {
            res.status(400).json({eror:"Error"})
        }
    } 

     //[GET] /
    search(req,res) {
        res.render('search')
    }
 }

 module.exports = new SiteController;
 