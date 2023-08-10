const Vigenere = require('caesar-salad').Vigenere;
import express from "express";
import {Message} from "../types";

const codesRouter = express.Router();

codesRouter.post<Message>('/encode', (req, res) => {
    if(!req.body.decodeText){
        res.status(400).send({error: 'Data invalid!'});
    }
    let cipher = Vigenere.Cipher(req.body.password).crypt(req.body.encodeText);
    res.send(cipher);
});

codesRouter.post<Message>('/decode', (req, res) => {
    if(!req.body.encodeText){
        res.status(400).send({error: 'Data invalid!'});
    }
     let decipher = Vigenere.Decipher(req.body.password).crypt(req.body.decodeText);
    res.send(decipher);
});

export default codesRouter;
