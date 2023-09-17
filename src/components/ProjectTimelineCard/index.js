// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitle,
  ProjectTitleAndDurationContainer,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {ProjectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = ProjectDetails

  return (
    <>
      <ProjectCardContainer>
        <ProjectImage src={imageUrl} alt="project" />
        <ProjectTitleAndDurationContainer>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <DurationContainer>
            <AiFillCalendar />
            <Duration>{duration}</Duration>
          </DurationContainer>
        </ProjectTitleAndDurationContainer>
        <ProjectDescription>{description}</ProjectDescription>
        <VisitLink href={projectUrl}>Visit</VisitLink>
      </ProjectCardContainer>
    </>
  )
}
export default ProjectTimelineCard
