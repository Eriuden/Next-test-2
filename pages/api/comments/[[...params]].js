//ce système prend la place de l'index des comments et génèrera une url auto

export const handler = (req,res) => {
  const params = req.query.params 
  console.log(params)
  res.status(200).json(params)
}
