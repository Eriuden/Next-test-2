import React from 'react'
import { useState } from 'react'

export const indexComments = () => {

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data = await response.json()
    setComments(data)
  }

  //CRUD Create
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method:"POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    const data = await response.json()
    console.log(data)
  }

  //CRUD Delete, with second step on [commentId]
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE"
    })
    const data = await response.json()
    fetchComments()
  }
  return (
    <div>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button onClick={submitComment}>Commenter</button>
        <button onClick={fetchComments}>Charger les commentaires</button>
        { comments.map(comment => {
            return (
                <div key={comment.id}>
                    {comment.text}
                    <button onClick={deleteComment}>Supprimer</button>
                </div>
            )
        })}
    </div>
  )
}
