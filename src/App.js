import Header from './my_Component/Header';
import './App.css';
// import Main from './my_Component/Main';
// import Page from './my_Component/page';
import Todo from './my_Component/Todo';

function App() {

  return (
   <>
   <Header/>
   <Todo title="Todo List"/>
   {/* <Main/>
   <Page/> */}
   </>
  );
}

export default App;
