import {AnimatePresence, motion} from 'framer-motion';
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
      <AnimatePresence>
          {feedback.map((item) => (
            <motion.div 
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //     ))}
  //   </div>
  // )
}

export default FeedbackList;