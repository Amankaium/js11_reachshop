import {useState} from "react";
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Products from './components/Products/Products';
import ProductDetail from './components/Products/ProductDetail';
import SignUp from './components/Users/SignUp';
import SignIn from './components/Users/SignIn';
import Orders from './components/Orders/Orders';
import "./App.css";
import {createStore} from 'redux';
import themeReducer from "./shopredux/reducer";

let store = createStore(themeReducer)

store.subscribe(() => {
  console.log(store.getState())
  // theme = store.getState().value
})

function App() {
  const [phone, setPhone] = useState("2398745928476")
  const [token, setToken] = useState("")
  const [theme, setTheme] = useState("light")

  function changeTheme() {
    // const oldTheme = store.getState().value
    // let newTheme = oldTheme === "light" ? "dark" : "light"
    // if (theme === "dark") {
    //   newTheme = "light"
    // } else {
    //   newTheme = "dark"
    // }
    store.dispatch({ type: store.getState().value })
  }

  return (
    <Router>
      <div className={theme}>
        <header>
          <nav>
            <Link to="/">Домой</Link> &nbsp;|&nbsp;&nbsp;
            <Link to="/about">О нас</Link> &nbsp;|&nbsp;&nbsp;
            <Link to="/contacts">Контакты</Link> &nbsp;|&nbsp;&nbsp;
            <Link to="/orders">Заказы</Link> &nbsp;|&nbsp;&nbsp;
            <Link to="/signup">Регистрация</Link> &nbsp;|&nbsp;&nbsp;
            <Link to="/signin">Войти</Link>
          </nav>
          <div>
            <span>phone: {phone}</span>
            <div onClick={changeTheme} className="change-theme">Сменить тему</div>
          </div>
        </header>
        
        <section className="content">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts phoneNumber={phone}/>}/>
            <Route path="/" element={<Products theme={theme}/>}/>
            <Route path="/products/:id/" element={<ProductDetail theme={theme}/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn setToken={setToken}/>}/>
            <Route path="/orders" element={<Orders token={token}/>}/>
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
