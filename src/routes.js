import Home from 'components/Home/home';
import Costs from 'components/Costs/costs';
import Cost from 'components/Costs/cost';
import CreateCost from 'components/Costs/createCost';
import EditCost from 'components/Costs/editCost';
import NotFound from 'components/NotFound/notFound';
import Login from 'components/Authentication/login';
import store from './store/index'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/costs',
    component: Costs,
    beforeEnter: (to, from, next) => {
      if(!store.getters.isLoggedIn) {
        store.dispatch('setMessage', 'Not authenticated, login first');
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/costs/create',
    name: 'createCost',
    component: CreateCost,
    beforeEnter: (to, from, next) => {
      if(!store.getters.isLoggedIn) {
        store.dispatch('setMessage', 'Not authenticated, login first');
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/cost/:id',
    name: 'cost',
    component: Cost,
    beforeEnter: (to, from, next) => {
      if(!store.getters.isLoggedIn) {
        store.dispatch('setMessage', 'Not authenticated, login first');
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/cost/:id/edit',
    name: 'editCost',
    component: EditCost,
    beforeEnter: (to, from, next) => {
      if(!store.getters.isLoggedIn) {
        store.dispatch('setMessage', 'Not authenticated, login first');
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(store.getters.isLoggedIn) {
        store.dispatch('setMessage', 'Already logged in');
        next(from);
      } else {
        next();
      }
    }
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
