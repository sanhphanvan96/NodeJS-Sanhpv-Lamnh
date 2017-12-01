import App from './containers/app';
import Home from './containers/home/home';
import Login from './containers/account/login';

export default [{
    component: App,
    routes: [{
            component: Home,
            exact: true,
            path: '/'
        },
        {
            component: Login,
            path: '/login'
        }
    ]
}];