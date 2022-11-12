const express = require("express");
const fs = require('fs');


exports.chapters =  (req,res) =>{
    res.send([
        {
          "id": 1,
          "subjectID": "XVSHDGS",
          "Lang": "English",
          "child": [
            {
              "Chaptid": 1,
              "ChaptName": "Matter in our surroundings",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 2,
              "ChaptName": "Is matter around us pure",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 3,
              "ChaptName": "Atoms and molecules",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 4,
              "ChaptName": "Structure of the atom",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 5,
              "ChaptName": "The fundamental unit of life",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 6,
              "ChaptName": "Tissues",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 7,
              "ChaptName": "Diversity in living organisms",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 8,
              "ChaptName": "Motion",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 90,
              "ChaptName": "Force and Laws of Motion",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 10,
              "ChaptName": "Gravitation",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 11,
              "ChaptName": "Work and energy",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 12,
              "ChaptName": "Sound",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 13,
              "ChaptName": "Why do we fall ill",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 14,
              "ChaptName": "Natural resources",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 15,
              "ChaptName": "Improvement in Food resources",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            }
          ]
        }
      ])
    
}