import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ProjectBackgroundColor = styled.div`
  background-image: ${(props) => props.theme.bg};
  width: 100%;
  height: 55%;
  justify-content: center;
  text-align: center;
  border-radius: 1rem;
`;
