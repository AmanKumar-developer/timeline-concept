import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimeLineCard = props => {
  const {courseDetails} = props

  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagList>
        {tagsList.map(eachItem => (
          <CourseTagItem key={eachItem.id}>
            <CourseTag>{eachItem.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagList>
    </>
  )
}

export default CourseTimeLineCard
