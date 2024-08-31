import FeedDataback from '../data/FeedDataBack'
import { FeedbackData } from '../shared/Types'
import FeedbackItem from './FeedbackItem'

type Props = {
  feedback: Array<FeedbackData>  
  handleDelete: any 
}

const FeedbackList = ({ feedback, handleDelete}: Props) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>
      {FeedDataback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

export default FeedbackList;