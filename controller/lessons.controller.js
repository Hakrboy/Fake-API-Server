const express = require("express");
const fs = require('fs');


exports.lessons =  (req,res) =>{
    res.send([
        {
          "id": 1,
          "chapterid": "XVSHDGS",
          "lang": "Assamese",
          "class": 9,
          "tags": [
            "tag1",
            "tag2",
            "tag3"
          ],
          "title": "Pythagoras Theorem",
          "pnr": [
            {
              "id": "abcd",
              "chapterid":"a1b2c3",
              "name": "chapter 12"
            },
            {
              "id": "wxyz",
              "chapterid":"a1b2c3d4",
              "name": "chapter 14"
            }
          ],
          "summary": [
            {
              "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64",
              "explainations": "In mathematics, the Pythagorean theorem, or Pythagoras' theorem, is a fundamental relation in Euclidean geometry among the three sides of a right triangle. It states that the area of the square whose side is the hypotenuse is equal to the sum of the areas of the squares on the other two sides."
              },
              {
                "videoURL": "https://www.youtube.com/watch?v=dl6Iw1X4NQo",
                "explainations": "Pythagoras theorem states that “In a right-angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides“"
              }
          ],
          "intextQuestions": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=YompsDlEdtc"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
              },
              {
                "id": 2,
                "question": "2nd time Describe Pythagoras Theorem again",
                "solutions": [
                  {
                    "id": 1,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": "https://www.youtube.com/watch?v=YompsDlEdtc"
                  }
                ]
              }
          ],
          "excersize": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
              },
              {
                "id": 1,
                "question": "Describe Pythagoras Theorem",
                "solutions": [
                  {
                    "id": 1,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                  },
                  {
                    "id": 2,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": ""
                  }
                ]
              },
              {
                "id": 1,
                "question": "Describe Pythagoras Theorem",
                "solutions": [
                  {
                    "id": 1,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                  },
                  {
                    "id": 2,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": ""
                  }
                ]
              }
          ],
          "mcq": [
            {
              "id": 1,
              "question": "lorem ipsum",
              "options": [
                {
                  "value1": "america",
                  "correct": "true"
                },
                {
                  "value1": "europe",
                  "correct": "false"
                },
                {
                  "value1": "africa",
                  "correct": "false"
                },
                {
                  "value1": "asia",
                  "correct": "false"
                }
              ]
            },
            {
              "id": 2,
              "question": "lorem ipsum dolor sit",
              "options": [
                {
                  "value1": "america",
                  "correct": "false"
                },
                {
                  "value1": "africa",
                  "correct": "false"
                },
                {
                  "value1": "europe",
                  "correct": "false"
                },
                {
                  "value1": "asia",
                  "correct": "true"
                }
              ]
            }
          ],
          "extra": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
            }
          ],
          "pyq": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
            }
          ]
        }
      ])
    
}