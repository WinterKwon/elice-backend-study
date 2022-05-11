"use strict"  //ecmascript의 문법을 엄격히 준수하겠다

const express = require("express");
const router = express.Router();

const control = require('./home.ctrl');

router.get('/', control.hello);


router.get('/login', control.login);


module.exports = router;  //외부에서도 사용할 수 있도록