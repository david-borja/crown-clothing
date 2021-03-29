import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    align-items: center;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  align-self: start;

  &:hover {
    color: grey;
  }

  @media screen and (max-width: 800px) {
    align-self: unset;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;