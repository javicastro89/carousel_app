const express = require('express')
const router = express.Router()
const axios = require('axios')
require("dotenv").config();
const {id} = process.env

router.get('/images', async (req, res) => {

    try {
        
        const result = await axios.get(`https://api.unsplash.com/collections?client_id=${id}&per_page=16`)
        
        let blocks = [
        {
            title: 'First Block',
            images: []
        },
        {
            title: 'Second Block',
            images: []
        },
        {
            title: 'Third Block',
            images: []
        },
        {
            title: 'Fourth Block',
            images: []
        },
       
        ]
        
        result.data.map((image, index) => {
        
                if(index <= 3) return blocks[0].images.push(image.cover_photo.urls.regular)
                if(index >= 4 && index <= 7) return blocks[1].images.push(image.cover_photo.urls.regular)
                if(index >= 8 && index <= 11) return blocks[2].images.push(image.cover_photo.urls.regular)
                if(index >= 12 && index <= 15) return blocks[3].images.push(image.cover_photo.urls.regular)

            }
        )
    
        res.send(blocks)
    } catch (error) {

        res.status(500).send({error: error})

    }

    

})

module.exports = router;