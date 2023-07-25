import Text from './components/Text';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className='container'>
      <Text />
      <div className='header-n-form'>
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
