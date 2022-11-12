const bodyParser = require('body-parser');
const sliderRontroller = require("./carousel.controller");
const subjectRontroller = require("./subject.controller");
const chapterRontroller = require("./chapters.controller");
const lessonRontroller = require("./lessons.controller");

const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (router) { 

    router.route('/').get(
        (req, res) => {
            res.end('working')
            }
    )
    
    router.route('/slider').get(
        sliderRontroller.slider 
    )   
    
    router.route('/subjects').get(
       subjectRontroller.subjects 
    )
    
    router.route('/chapters').get(
      chapterRontroller.chapters
    )
    
    router.route('/lessons').get(
       lessonRontroller.lessons
        )
}