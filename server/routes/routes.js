const express = require('express');
const router = express.Router();
var path = require('path');


router.get('/', function (req,  res){
    // res.sendFile('/test2.html');
    res.redirect("https://www.lenstalk.com.my")
})

// router.get('/', (req, res) => {
//     // res.sendFile(OrderForm);
//     res.sendFile(Home)
// });

// router.get('/Order', (req, res) =>{
//     res.sendFile(OrderForm);
// })

// router.get('/temp1', (req,res) =>{
//     res.sendFile(OrderComplete)
// })


// // router.get('*', function (req, res){
// //     res.redirect("/test")
// // })

// router.get('/Invoice',(req, res) => {
//     res.sendFile(Invoice);
// })

// router.get('/DeliveryOrder',(req, res) => {
//     res.sendFile(DeliveryOrder);
// })

// router.get('/navbarDemo', (req, res) => {
//     res.sendFile(navbarTest)
// });


// router.get("/Contact" , (req, res) =>{
//     res.sendFile(Contact);
// })

// router.get("/FAQ" , (req, res) =>{
//     res.sendFile(FAQ);
// })

// // PRODUCTS 
// router.get("/Products/CleaningCare" , (req, res) =>{
//     res.sendFile(CleaningCare);
// })

// router.get("/Products/ClinicalCare" , (req, res) =>{
//     res.sendFile(ClinicalCare);
// })
// router.get("/Products/DisinfectantRange" , (req, res) =>{
//     res.sendFile(DisinfectantRange);
// })
// router.get("/Products/PersonalCare" , (req, res) =>{
//     res.sendFile(PersonalCare);
// })
module.exports = router;
