import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle `
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    #root {
        position: relative;
    }
    body, html,#root{
        height:100%;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`