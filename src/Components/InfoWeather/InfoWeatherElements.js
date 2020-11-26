import styled from 'styled-components' 
export const WeatherContainer = styled.div `
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
   height:25vh; 
`
export const WeatherItemContainer = styled.div `
    display:flex;
    padding:5px 25px;
    
    div {
        display:flex;
        justify-content:center;
        flex-direction:column;
    }
    div > span{
        margin-left:10px; 
    }
    div > span:nth-child(2) {
        margin-top:5px;
    }
    img {
        width:60px;
    }
    @media (max-width:1100px) {
        margin-bottom:20px ;       
    }
`