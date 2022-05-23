import css from './App.module.css';
import SideBar from './components/Sidebar'
import NavBarSimple from './components/NavBarSimple'

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <SideBar />
    </div>
  );
}

export default App;