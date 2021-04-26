import styled from 'styled-components'

export const ListChampions = styled.div`
    .title-champions {
        margin-top: 20px;
        h2 {
            text-align: center;
            color: ${({ theme }) => theme.titles};
        }
    }
    
    .list {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        overflow: hidden;
        flex-wrap: wrap;
        .champion-icon {
            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }
`;


