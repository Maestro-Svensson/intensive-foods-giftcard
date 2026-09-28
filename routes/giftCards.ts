import express from "express";
import { validate } from "../schemas/GiftCard";



const routes = express.Router();

const giftCards = [
    {id:1, value:500},
    {id:2, value:1500},
    {id:3, value:2500},
]

routes.get("/", (req, res) => {
    return res.send(giftCards);
});

routes.get("/:id", (req, res) => {

    const giftCard = giftCards.find(g => g.id === Number(req.params.id));

    if (!giftCard) return res.status(404).send("Giftcard not found");

    return res.send(giftCard);
});

routes.post("/", (req,res) => {
    const validation = validate(req.body);
    

    if (!validation.success) 
        return res.status(400).send(validation.error.issues[0]?.message);
     
    const giftCard = {id: 4, value: (req.body.value)};
    giftCards.push(giftCard);
    
    return res.status(201).send(giftCard);

});

routes.put("/:id", (req,res) => {
     const giftCard = giftCards.find(g => g.id === Number(req.params.id));

    if (!giftCard) return res.status(404).send("Giftcard not found");

   const validation = validate(req.body);
    

    if (!validation.success) 
        return res.status(400).send(validation.error.issues[0]?.message);
     
    giftCard.value = req.body.value

    return res.send(giftCard);

})

routes.delete("/:id", (req, res) => {
    const giftCard = giftCards.find(g => g.id === Number(req.params.id));

    if (!giftCard) return res.status(404).send("Giftcard not found");

    const index = giftCards.indexOf(giftCard);
    giftCards.splice(index, 1);

    return res.send(giftCard);

}) 

export default routes;