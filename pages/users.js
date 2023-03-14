import React from 'react'
import { User } from '@/components/user'

export const users = ({users}) => {
  return (
    <div>
        {users.map (user => {
        return (
                <div key={user.id}>
                    <User user= {user}/>                 
                </div>
                )
            })
        }
    </div>
    
  )
}

export async function getStaticsProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: {
            users: data,
        },
    }
}
