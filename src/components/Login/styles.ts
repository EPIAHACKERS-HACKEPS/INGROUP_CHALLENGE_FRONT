import styled from '@emotion/styled'

// Common styles as a template string for shared properties
const commonStyles = `
  margin: 0;
  padding: 0;
`

// Shared box-shadow style for an elegant touch
const boxShadow = `
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
`

// Shared border style for a clean and defined look
const borderStyles = `
  border: 2px solid #3498db; /* Change border color */
  border-radius: 5rem;
  transition: border-color 0.3s ease-in-out;
  padding: 0.5rem 1rem;
`

// Define the LoginDiv styled component
export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0; /* Change background color */
  ${commonStyles}
`

// Define the LoginButton styled component with creativity
export const LoginButton = styled.button`
  width: 15%;
  height: 10%;
  background-color: #881d1c; /* Change button background color */
  color: #fff; /* Change text color to white */
  font-size: 2rem; /* Increase font size for better readability */
  border-radius: 5rem;


  ${commonStyles}
  ${boxShadow}
  ${borderStyles}
    // Hover effect to lift the button slightly
  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: translateY(-0.05rem);
  }
`

// Define the LoginInput styled component with creativity
export const LoginInput = styled.input`
  width: 25%;
  height: 10%;
  font-size: 2rem; /* Adjust font size for consistency */
  border-radius: 8rem;
  margin: 1rem;

  ${borderStyles}
    // Focus effect to highlight the input
  &:focus {
    border-color: #3498db; /* Highlight color */
  }
`
