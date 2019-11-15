import * as views from '@/views';

const ROUTES: any = [
  {
    path: '/login',
    component: views.Login,
    title: '欢迎登录打卡系统'
  },
  {
    path: '/register',
    component: views.Regist,
    title: '欢迎注册打卡系统'
  },
  {
    path: '',
    // component: views.Index,
    isAuth: true,
    childRoutes: [
      { path: '/', component: views.Index },
      { path: '/signin', component: views.Signin },
    ]
  }
];
// export class RouterManager {
//   static getConfig (path: string = '/login') {
//     return ROUTES.find(item => item.path === path);
//   }
// }
export default ROUTES;