import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Register from '../components/Register';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow( <App /> );
});

it('renders correct routes', () => {

  const wrapper = shallow(<App/>);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap['/']).toBe(Home);
  expect(pathMap['/register']).toBe(Register);
});