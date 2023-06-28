import styled from "styled-components";

export const Container = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  img{
    width: 8rem;
  }

  >div {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      text-align: right;

      h3 {
        margin-bottom: 0.125rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
      }

      span {
        color: ${({ theme }) => theme.colors.yellow};

        strong {
          font-weight: 500;
          font-size: 1.25rem;
        }
      }

    }

    svg {
      flex-shrink: 0;
      fill: ${({ theme }) => theme.colors.white};
      width: 2.875rem;
      height: 2.875rem;
    }
  }
`
