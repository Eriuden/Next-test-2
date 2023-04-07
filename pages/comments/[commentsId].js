
import { comments } from "@/data/comment"

export const commentsId = async ({comment}) => {
  return (
    <div>
        {comment.id}. {comment.text}
    </div>
  )
}

export async function getStaticPaths() {
    return {
        paths: [ 
            { params: {commentId: "1"} }
        ],
        fallback:false
    }
}

export async function getStaticsProps(context) {
    const { params } = context
    const { commentId } = params

    //Ne pas appeler une route API pour du pre-rendering

    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    
    return {
        props: {
            comment,
        },
        
    }
}
