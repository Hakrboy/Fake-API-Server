const express = require("express");
const fs = require('fs');


exports.slider =  (req,res) =>{
    res.send([
        {
          "_id": "603b85ebd5b9560015caf9a8",
          "createdAt": "2021-02-28T12:00:43.980Z",
          "updatedAt": "2021-02-28T12:00:48.427Z",
          "image": {
            "_id": "603b85c5d5b9560015caf9a3",
            "name": "gemma-stpjHJGqZyw-unsplash.jpg",
            "caption": "Red Tamatarrrrrr",
            "url": "https://res.cloudinary.com/programming-night/image/upload/v1614513603/gemma_stpj_HJ_Gq_Zyw_unsplash_9bf251892f.jpg",
          },
          "id": "603b85ebd5b9560015caf9a8"
        },
        {
            "_id": "603b85ebd5b9560015caf9a8",
            "createdAt": "2021-02-28T12:00:43.980Z",
            "updatedAt": "2021-02-28T12:00:48.427Z",
            "image": {
              "_id": "603b85c5d5b9560015caf9a3",
              "name": "gemma-stpjHJGqZyw-unsplash.jpg",
              "caption": "Green Vegitable",
              "url": "https://res.cloudinary.com/programming-night/image/upload/v1614513609/neonbrand_9m2_R_Zv_HS_c_U_unsplash_6a14fab32a.jpg",
            },
            "id": "603b85ebd5b9560015caf9a8"
        },
        {
            "_id": "603b85ebd5b9560015caf9a8",
            "createdAt": "2021-02-28T12:00:43.980Z",
            "updatedAt": "2021-02-28T12:00:48.427Z",
            "image": {
              "_id": "603b85c5d5b9560015caf9a3",
              "name": "gemma-stpjHJGqZyw-unsplash.jpg",
              "caption": "",
              "url": "https://res.cloudinary.com/programming-night/image/upload/v1614513607/neonbrand_Svh_XD_3k_PSTY_unsplash_11a0e33129.jpg",
            },
            "id": "603b85ebd5b9560015caf9a8"
          },

      ] )
    
}