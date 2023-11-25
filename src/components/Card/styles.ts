import styled from '@emotion/styled'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  justify-content: center;
  margin-bottom: 1rem;
  height: 10rem;
  border-radius: 1rem;
  border: 0.125rem solid #881d1c;
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: black;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin: 0.25rem;
  justify-content: center;
`

export const CardImage = styled.span`
  background-image: url('http://getdrawings.com/vectors/bug-vector-1.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
  justify-content: center;

`

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 2rem;
`

export const StyledCardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;

`
