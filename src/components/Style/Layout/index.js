import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 100%;
  min-height: 560px;
  height: ${({ height = '560px' }) => `${height}`};
  position: relative;
  background-color: ${({ background }) => background};
`
