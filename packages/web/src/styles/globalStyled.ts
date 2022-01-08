import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0
    }

    body {
        background-color: ${(p) => p.theme.colors.background};
        color: ${(p) => p.theme.colors.onBackgorund};
        font-family: sans-serif;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    li {
        list-style: none;
    }

    @media(min-width: 1280px) {
        body {
            max-width: 100rem;
        }
    }
    
    body, .scroll{
        /* width */
        &::-webkit-scrollbar {
          width: 10px;
        }
      
        /* Track */
        &::-webkit-scrollbar-track {
          background: #0000;
        }
      
        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #0004;
        }
      
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: ${(p) => p.theme.colors.secondary};
        }
`

export default GlobalStyled
