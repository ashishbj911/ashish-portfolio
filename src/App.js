import {Home,Error,Contact,Portfolio,Technologies} from './pages'
import {Navbar,Footer,Sidebar} from './components'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/portfolio"><Portfolio/></Route>
          <Route path="/technologies"><Technologies/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route exact path="*"><Error/></Route>
        </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
