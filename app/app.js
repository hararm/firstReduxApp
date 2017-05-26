import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';
import store from 'store/store';
import loadUI from 'ui/jquery/index';
import { fetchRecipes } from 'actions/actions'

loadUI();
store.dispatch(fetchRecipes());
window.store = store;