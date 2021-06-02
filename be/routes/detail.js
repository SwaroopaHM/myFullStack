const express= require('express');

const router= express.Router();
const detailController= require('../controllers/detail');

router.get('/users', detailController.getUsers);
router.get('/user/:userId', detailController.getUser);

module.exports= router;