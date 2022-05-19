"use strict"  //ecmascript의 문법을 엄격히 준수하겠다

const express = require("express");
const router = express.Router();

const control = require('./home.ctrl');

router.get('/', control.output.hello);


// router.get('/login', control.login);
// router.post('/login', control.login);
// get일때와 post일때의 라우터가 잘 구분되지 않아 가독성 있게 변경
router.get('/login', control.output.login);
router.get('/register', control.output.register);
router.post('/login', control.process.login);

module.exports = router;  //외부에서도 사용할 수 있도록