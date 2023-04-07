
import Image from 'next/image'

export const pets = () => {
  return (
    <div>
        {["1", "2", "3"].map( path => {
            return(
                <div key={path}>
                    <Image src={`/${path}.jpg`} width="280" height="420" />
                </div>
            )
        })}
    </div>
  )
}
