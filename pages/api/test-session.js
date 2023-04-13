import React from 'react'
//import getsession

export const handler = async(req,res) => {
    const session = await getSession({req})
    if(!session){
        res.status(401).json({error: "utilisateur non authentifié"})
    } else {
        res.status(200).json({ message: "Succés", session})
    }
}
