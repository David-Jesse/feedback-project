import './styles/main.scss';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'preact/hooks';
import FeedbackData from './data/FeedDataBack';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

export function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if(window.confirm('Are you sure you want to remove this?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback: any) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App; 