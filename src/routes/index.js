const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //const data = [{name:'joeh'},{name:'pep'},{name:'aho'}];
    //res.render('index.html',{people:data});
    res.render('index.html');

});
router.get('/contact',(req,res)=>{
    res.render('contact.html');
});

router.get('/get',(req,res)=>{
    res.json({
        name:'Juan',
        lastName:'Perez'
    });
});
router.post('/add',(req,res)=>{
    console.log(req.body)
    res.send("nombre "+req.body.name);
    //res.send('Enviado por post');
});
router.put('/put',(req,res)=>{
    res.send('Enviado por put');
});
router.delete('/:userId',(req,res)=>{
    res.send(`id ${req.params.userId} borrado`);
});

module.exports = router;