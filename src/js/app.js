import '../scss/main.scss';

import { border_search_controller } from './search-border-controller';
import { search_input_controller } from './search-input-controller';
import { input_value } from './input-api';

window.addEventListener('load', () => {

    border_search_controller();
    search_input_controller();
    input_value();

});