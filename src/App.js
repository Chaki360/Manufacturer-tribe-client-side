import { Route, Routes } from "react-router-dom";
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./Pages/Shared/Nav/Nav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Login/Login";
import Register from "./Login/Register/Register";
import ResetPassWord from "./Login/ResetPassWord/ResetPassWord";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Homepage from "./Pages/Homepage/Homepage";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Review from "./Pages/Dashboard/Review/Review";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import Product from "./Pages/Product/Product";
import AddProducts from "./Pages/AddProducts/AddProducts";
import DeleteProduct from "./Pages/Dashboard/DeleteProduct/DeleteProduct";
import NewsLatter from "./Pages/NewsLatter/NewsLatter";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import Payment from "./Pages/Payment/Payment";







function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<MyPortfolio />} />
        <Route path='/product/:productId' element={<PrivateRoute><Product /></PrivateRoute>} />
        <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} >
          <Route index element={<MyOrders></MyOrders>} />
          <Route path='review' element={<Review></Review>} />
          <Route path='my-profile' element={<MyProfile></MyProfile>} />
          <Route path='add-product' element={<AddProducts></AddProducts>} />
          <Route path='manage-orders' element={<ManageAllOrders></ManageAllOrders>} />
          <Route path='delete-product' element={<DeleteProduct></DeleteProduct>} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassWord />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NewsLatter></NewsLatter>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
