import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'
function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to='/'> Home</Link>
      <Link to='/contact'>Contato</Link>
      <Link to='/company'>Empresa</Link>
      <Link to='/newproject'>Novo Projeto</Link>
    </div>
    <Container>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />}/>
        <Route eaxt path='/company' element={<Company />} />
        <Route eaxt path='/newproject' element={<NewProject />} />
      </Routes>
    </Container>

    </BrowserRouter>

  
   
  );
}

export default App;
