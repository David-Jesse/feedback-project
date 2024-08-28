

// const headerStyle:<ClassType>  {
//   bgColor: 'rgba(0,0,0,0.4)',
//   textColor: '#ff6a95',
//   text: "FeedBack UI",
// }

const Header = () => {

  const bgColor = 'rgba(0,0,0,0.4)';
  const textColor = '#ff6a95';

  return (
    <header style={bgColor}>
        <div className='container'>
          <h2 style={textColor}>Feedback UI</h2>
        </div>
    </header>
  )
}

export default Header;