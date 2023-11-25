import styled from '@emotion/styled'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 30rem;
  text-align: start;
  margin-bottom: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  height: 10rem;
  border-radius: 1rem;
  border: 0.125rem solid #881d1c;
`

export const CardTitle = styled.h3`
  font-size: 3rem;
  color: black;
  font-family: 'Roboto', sans-serif;
  margin: 0.25rem;
`

interface CardImageProps {
  url: string
}

export const CardImage = styled.span`
  background-image: url(${(props: CardImageProps) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.25rem;
  justify-content: center;
`

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.25rem;
  height: 2rem;
`

export const StyledCardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 2.5vw;
`
