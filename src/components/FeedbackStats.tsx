import { useContext } from "preact/hooks";
import FeedbackContext from "../context/FeedbackContext";

// type Props = {
//     feedback: Array<FeedbackData>;
// }

const FeedbackStats = () => { 
  const {feedback} = useContext(FeedbackContext)
  // Calculate readings average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating 
  }, 0) / feedback.length
 average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats;