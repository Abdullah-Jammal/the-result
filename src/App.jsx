
import CountdownTimer from '../components/Timer';

const App = () => {
  // Define the target date
  const targetDate = '2024-07-07T10:41:28+03:00';

  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;