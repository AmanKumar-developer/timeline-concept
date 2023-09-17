/* Write your CSS here */
import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const ProjectTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: bold;
  color: #171f46;
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProjectDescription = styled.h1`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0px;
`
export const Duration = styled.p`
  font-weight: 'Roboto';
`

export const VisitLink = styled.a`
  text-align: center;
  color: #0967d2;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.2;
  text-decoration: none;
`
