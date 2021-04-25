import styled from 'styled-components'

export const Cabecalho = styled.header`
    .menu-cabecalho {
        width: 100%;
        background-color: ${({ theme }) => theme.background};
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        .menu-itens {
            display: flex;
            li {
                list-style: none;
                &:not(:last-child) {
                    margin-right: 15px;
                }
                .menu-item {
                    font-size: 16px;
                    font-weight: bold;
                    color: ${({ theme }) => theme.link};
                    text-decoration: none;
                    text-transform: uppercase;
                    -webkit-text-stroke-width: 0.3px;
                    -webkit-text-stroke-color: #fff;
                }
            }
        }
    }
`;
