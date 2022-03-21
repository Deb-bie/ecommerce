import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import AuthProvider from './context/context.js'
import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';
import ProductList from './admin/productList/productList.js';
import AddProduct from './admin/addProduct/addProduct.js'
import Cart from './pages/cart/cart';
import Favorites from './pages/favorites/favorites';



// import FlavorForm from './pages/signup/extra.js';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/favorite" element={<Favorites />} /> 



          {/* <Route path='/' element={<FlavorForm />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
