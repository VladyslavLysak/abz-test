import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home';
import About from './pages/About';
import Relationships from './pages/Relationships';
import Requirements from './pages/Requirements';
import Users from './pages/Users';
import Signup from './pages/Signup';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Licenses from './pages/Licenses';
import News from './pages/News';
import Partnership from './pages/Partnership';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Testimonial from './pages/Testimonial';
import Testimonials from './pages/Testimonials';
import Works from './pages/Works';
import Error from './pages/Error';

import Header from './components/Header';
import Footer from './components/Footer';
import PhoneMenu from './components/PhoneMenu';

const App = () => {
  return (
    <div className='main-container'>
      <Router>
        <div className='content'>
          <Header />
          <PhoneMenu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/relationships' component={Relationships} />
            <Route exact path='/requirements' component={Requirements} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/terms' component={Terms} />
            <Route exact path='/works' component={Works} />
            <Route exact path='/partnership' component={Partnership} />
            <Route exact path='/help' component={Help} />
            <Route exact path='/testimonial' component={Testimonial} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/articles' component={Articles} />
            <Route exact path='/news' component={News} />
            <Route exact path='/testimonials' component={Testimonials} />
            <Route exact path='/licenses' component={Licenses} />
            <Route exact path='/privact' component={Privacy} />
            <Route component={Error} />
          </Switch>
        </div>
        <footer >
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
