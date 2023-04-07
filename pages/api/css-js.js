//Pas de caractères spéciaux en nommage

const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary}
`

export const cssjs = () => {
  return (
    <h2 style={{color:"red"}}>Test</h2>
  )
}
