import css from './App.module.css';
import SideBar from './components/Sidebar'
//import NavBarSimple from './components/NavBarSimple'
import NavBarForm from './components/NavBarForm'
//import Content from './components/Content';
//import ContentHook from './components/ContentHook';
//import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      {/*<NavBarSimple />*/}
      <NavBarForm />
      <SideBar />
      <ContentAPIHooks />
    </div>
  );
}

export default App;