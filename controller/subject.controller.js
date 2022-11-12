const express = require("express");
const fs = require('fs');


exports.subjects =  (req,res) =>{
    res.send([
        {
          "id": 1,
          "name": "English",
          "Category": 8,
          "Lang": "Assamese",
          "child": [
            {
              "childId": 1,
              "childName": "English Grammer"
            },
            {
              "childId": 2,
              "childName": "English Text"
            },
            {
              "childId": 3,
              "childName": "English Rapid Reader"
            }
          ]
        },
        {
          "id": 2,
          "name": "Maths",
          "Category": 8,
          "Lang": "Assamese",
          "child": []
        },
        {
          "id": 3,
          "name": "Science",
          "Category": 8,
          "Lang": "Assamese",
            "child": [
                {
                    "childId": 1,
                    "childName": "Physics"
                },
                {
                    "childId": 2,
                    "childName": "Chemistry"
                },
                {
                    "childId": 3,
                    "childName": "Biology"
                  }
          ]
        },
        {
          "id": 4,
          "name": "Social Studies",
          "Category": 8,
          "Lang": "Assamese",
            "child": [
                {
                    "childId": 1,
                    "childName": "Political"
                },
                {
                    "childId": 2,
                    "childName": "Social"
                }
          ]
        },
        {
          "id": 4,
          "name": "MIL Assames",
          "Category": 8,
          "Lang": "Assamese",
          "child": [
            {
              "childId": 1,
              "childName": "Assamese text"
              },
              {
                "childId": 2,
                "childName": "Assamese Rapid Reader"
              }
          ]
        },
        {
          "id": 4,
          "name": "Elective",
          "Category": 8,
          "Lang": "Assamese",
          "child": [
            {
              "childId": 1,
              "childName": "History"
            },
            {
              "childId": 2,
              "childName": "Geography"
            },
            {
              "childId": 3,
              "childName": "Advance Maths"
            },
            {
              "childId": 3,
              "childName": "Hindi"
            }
          ]
        }
      ])
    
}