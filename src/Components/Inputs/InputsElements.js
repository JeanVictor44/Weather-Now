import styled from 'styled-components'
import LoupeIcon from '../../assets/Icons/loupe.svg'

export const SearchButton = styled.input.attrs({type:'button'})`
    max-width:100%;
    background:url(${LoupeIcon}) no-repeat;
    width:30px;
    height:40px;
    border:none;
    cursor:pointer;
    outline:none;
`
export const InputCity = styled.input.attrs({type:'text',placeholder:'Your City'})`
    display:block;
    padding:5px;
    font-size:18px;
    width:100%;
    max-width:300px;
    border:none;
    outline:none;
    color:#5B0634;
    background:transparent;
    border-bottom:1px solid #5B0634;
    ::-webkit-input-placeholder {
        color: #5B0634;
    }
`
export const ContainerInput = styled.div`
    display:flex;
    justify-content:center;
    padding-top:10px;
    align-items:center;
`
