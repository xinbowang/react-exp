import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import WebLayout from '@/component/layout';
import ROUTES from './router';
import {RouteAuth} from '@/router/beforeRouter';
import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
          <Switch>
            <RouteAuth config={ROUTES}/>
            {/* {
              ROUTES.map((route: any, i: number) => {
                if (route.childRoutes && route.childRoutes.length > 0) {
                  return <WebLayout key={i} path={route.path} >
                    {
                      route.childRoutes.map((child: any, k: number) => {
                        return <Route key={k} path={child.path} exact
                          render = {prop => {
                            document.title = child.title || '欢迎使用打卡系统！'
                            return <child.component {...prop} />
                          }}
                        ></Route>
                      })
                    }
                  </WebLayout>
                }
                return <Route key={i} exact path={route.path}
                  render = {props => {
                    document.title = route.title || '欢迎使用打卡系统！'
                    return <route.component {...props} />
                  }}
                >
                </Route>
              })
            } */}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
