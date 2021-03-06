import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.scss';

//import components
import './components/fontAwesomeIcons';
import Home from './components/home/Home';
import ApiPage from './components/products/apiPage/ApiPage';
import UrbanEnginePage from './components/products/urbanEngine/UrbanEnginePage';
import VerifyPage from './components/products/verify/VerifyPage'
import TracePage from './components/products/trace/TracePage'
import Pricing from './components/pricing/Pricing';
import Rupantor from './components/products/rupantor/Rupantor';
import SearchHome from './components/searchHome/SearchHome';
import Privacy from './components/privacy/Privacy';
import OurTeam from './components/aboutUs/OurTeam';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import TermsAndServices from './components/termsAndServices/TermsAndServices';
import ScrollToTop from './components/scrollToTop/ScrollToTop';


const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/api' component={ApiPage} />
          <Route exact path='/urban-engine' component={UrbanEnginePage} />
          <Route exact path='/verify' component={VerifyPage} />
          <Route exact path='/trace' component={TracePage} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/rupantor' component={Rupantor} />
          <Route exact path='/search' component={SearchHome} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/ourteam' component={OurTeam} />
          <Route exact path='/termsandservices' component={TermsAndServices} />
        </Switch>
      </Fragment>
    </Provider>
  );
};

export default App;
