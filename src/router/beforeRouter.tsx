import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import WebLayout from '@/component/layout';
import {local} from '@/lib/storage';

export class RouteAuth extends React.Component<any, any>{
  render(){
    const { location, config } = this.props;
    const { pathname } = location;
    const isLogin = local.get('token') && local.get('token').token;
    console.log(pathname);
    let targetRouterConfig: any = null;

    // 如果该路由不用进行权限校验，登录状态下登陆页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    config.forEach((v:any) => {
      let resPath: any = {
        isAuth: v.isAuth
      };
      if (v.childRoutes) {
        let childPath = v.childRoutes.find((c:any) => c.path === pathname);
        if (childPath && childPath.path) {
          childPath.isChild = true;
          resPath = Object.assign(resPath, childPath);
        }
      }
      if (resPath && resPath.path) {
        targetRouterConfig = resPath;
      }
      if (v.path === pathname) {
        targetRouterConfig = v;
      }
      // targetRouterConfig = resPath && resPath.path ? resPath : v.path === pathname;
    });
    console.log(targetRouterConfig);
    if(targetRouterConfig && !targetRouterConfig.isAuth && !isLogin){
      document.title = targetRouterConfig.title || '欢迎使用打卡系统！';
      const { component, isChild } = targetRouterConfig;
      return isChild ? <Route exact path={pathname} component={component} /> : (<WebLayout path={''} ><Route exact path={pathname} component={component} /></WebLayout>)
    }

    if (isLogin) {
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if (pathname === '/login') {
        return <Redirect to='/' />
      } else {
        // 如果路由合法，就跳转到相应的路由
        console.log(targetRouterConfig)
        if (targetRouterConfig) {
          const { component, isChild } = targetRouterConfig;
          return isChild ? <Route exact path={pathname} component={component} /> : (<WebLayout path={''} ><Route exact path={pathname} component={component} /></WebLayout>)
        } else {
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to='/' />
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if(targetRouterConfig && targetRouterConfig.isAuth){
        return <Redirect to='/login' />
      }else{
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to='/login' />
      }
    }
  }
}