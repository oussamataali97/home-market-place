import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute'
import Category from './pages/Category'
import Footer from './components/Footer'

import 'swiper/css';




function App() {
  return (
    <>



    <div className="containerr flex justify-between h-screen flex-col">

    <Router>

      <div className="nave">
      <Navbar/>

      </div>

    <div className="mainse">
    <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>

        <Route path='/profile' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>

      </Routes>
    </div>
 
    </Router>
    <div className="foots">
     <Footer/>
     <ToastContainer/>
     </div>
 

    </div>

    </>
  );
}

export default App;
