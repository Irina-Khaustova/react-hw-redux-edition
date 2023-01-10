import './App.css';
import ServiceList from './components/ServiceList';
import ServiceAdd from './components/ServiceAdd';
import FilterField from './components/FilterField';


function App() {
  return (
    <>
    <FilterField/>
    <ServiceList/>
    <ServiceAdd/>
    </>
  );
}

export default App;
