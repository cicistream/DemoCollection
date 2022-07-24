import { cube } from './math.js';

cube(5);
import( /* webpackChunkName: "dynamic" */ './dynamic').then(dynamic => {
  dynamic()
});


import(/* webpackPrefetch: true */ './preFetch.js');