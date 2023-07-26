import './App.css';
import chatLogo from './img/logo.svg';

function App() {
  return (
    <div className='chat-notification'>
      <div className='chat-notification-logo-wrapper'>
        <img
          className='chat-notification-logo'
          src={chatLogo}
          alt='ChitChat Logo'
        />
      </div>
      <div className='chat-notification-content'>
        <h4 className='chat-notification-title'>ChitChat</h4>
        <p className='chat-notification-message'>You have a new message!</p>
      </div>
    </div>
  );
}

export default App;
