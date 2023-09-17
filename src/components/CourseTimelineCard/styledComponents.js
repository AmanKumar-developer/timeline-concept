import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
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
export const CourseTitle = styled.h1`
color:#171f46;
font-family:"Roboto"
font-weight:bold;
line-height:1.3;
font-size:17px;
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 600;
`
export const CourseTagList = styled.ul`
display:flex;
flex-wrap:wrap;
align-items:center;
margin:0px;
padding0px

`
export const CourseTagItem = styled.li`
  list-style-type: none;
`
export const CourseDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20;
  font-weight: 400;
`

export const CourseTag = styled.h1`
  font-family: 'Roboto';
`
