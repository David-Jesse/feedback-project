import './styles/main.scss';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'preact/hooks';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

export function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if(window.confirm('Are you sure you want to remove this?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App; 