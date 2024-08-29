import FeedbackData from '../data/FeedbackData'
import { feedbackData } from '../shared/Types'
import FeedbackItem from './FeedbackItem'

type Props = {
  feedback: feedbackData  
  handleDelete: any 
}

const FeedbackList = ({ feedback, handleDelete}: Props) => {
    console.log(feedback)
  return (
    <div className='feedback-list'>
      {FeedbackData.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

export default FeedbackList;