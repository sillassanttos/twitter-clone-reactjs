import styles from './App.module.css';
import Index from './ui/components/pages';

function App() {
  return (
    <div className={ styles['app-container'] }>
      <Index/>
    </div>
  );
}

export default App;
