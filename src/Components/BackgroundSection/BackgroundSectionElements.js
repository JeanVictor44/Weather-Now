import styled from 'styled-components'
import BgOrange from '../../assets/BgOrange.svg'
import BgPink from '../../assets/BgPink.svg'

export const BackgroundContainer = styled.div `
    height:65vh;
    background:url(${ (props) => props.temperatura < 26 ? BgPink:  BgOrange } );
    background-size:cover;
    position:relative;
    
    h1 {
        font-size:58px;
        margin-top:70px;
    }
    h2 {
        font-size:16px;
    }
    h1, h2, span {
        text-align:center;
        color:#fff;
        font-weight:lighter;
    }
    span {
        display:block;
        margin-top:15px;
    }
    h1:nth-of-type(2) {
        font-size:55px;
        margin-left:25px;
        position:absolute;
        bottom:0;
        font-weight:bold;
    }
    @media (max-width:550px) {
        h1 {
            font-size:48px;
        }
    }
`
