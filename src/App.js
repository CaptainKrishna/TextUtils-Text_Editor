import Header from './my_Component/Header';
import './App.css';
import Main from './my_Component/Main';
import Page from './my_Component/page';
// import Todo from './my_Component/Todo';
import Footer from './my_Component/Footer';
// import CardCom from './my_Component/CardCom';

function App() {

  return (
   <>
   <Header/>
   {/* <Todo title="Text Editor"/> */}
   <Main/>
   <Page/>
   {/* <CardCom/> */}
   <Footer/>
   </>
  );
}

export default App;
