import './App.css';
import Footer from './components/Footer/Footer';
import Frozen from './components/frozen/Frozen';
import Header from './components/Header/Header';
import MinHead from './components/MinHead/MinHead';
import MotMain from './components/MotMain/MotMain';
import Table from './components/Table/Table';
import UnderHeader from './components/UnderHeader/UnderHeader';

function App() {
  return (
    <div className="App">
      <MinHead />
      <Header />
      <UnderHeader />
      <Frozen />
      <MotMain />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
