//const requireLogin = require('../middleware/requireLogin') //importing middleware
const express = require('express')
const router = express.Router();   //accessing Router() method which stored inside express 
//as we write const app = express(): app.get/post/put... then same here we using router(): router.post()...
const User = require('../models/User')  //here we importing that UserSchema present inside => ../models/User
const { body, validationResult } = require('express-validator');

router.post("/createuser",

    [   //here we validating the email & password

        body('email').isEmail(),
        // password must be at least 5 chars long
        body('password', 'err Invalid password  5 character!!').isLength({ min: 5 })
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password,
                location: req.body.location
            })
            // res.json({success:true});

            res.send({ msg: "data stored successfully" })

        } catch (error) {
            console.log(error)
            // res.json({success:false});
            res.send({ msg: "something went wrong try again" })

        }
    })

module.exports = router;