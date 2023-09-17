// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimeLineCard from '../CourseTimelineCard'

import {
  TimeLineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} ProjectDetails={item} />
    }
    return <CourseTimeLineCard key={item.id} courseDetails={item} />
  }
  return (
    <TimeLineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimeLineContainer>
  )
}

export default TimeLineView
