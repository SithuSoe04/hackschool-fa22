const express = require ('express');

const router = express.Router();
const Purchase = require('express');

router.get("/purchases", async (req,res)=>{
    const purchases = await Purchase.find().exec();
    res.status(200).json({purchases});
});

    router.post('/purchases', async (req, res) => {
        const { purchase } = req.body;
        const {name, description, cost, method } = purchase;
        if (!name || !description || !cost || !method) {
            res.status(400).json({error: 'Invalid Input!'});
        } else{
            const newPurchase = await Purchase.find().exec();
            res.status(200).json({newPurchase});
        }
    });


module.exports = router;