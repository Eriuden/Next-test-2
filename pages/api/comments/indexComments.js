import { comments } from "@/data/comment"

export const handler = (req, res) => {
    res.status(200).json(comments)
}