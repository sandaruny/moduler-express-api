import modules from './appModules';
import _ from 'lodash';

export const routers = _(modules)
  .mapKeys(module => module)
  .mapValues((routerName) => {
  try {
    return require(`../modules/${routerName}/Router`).default;
  } catch (error) {
    console.log(error);
    throw 'Router names are not configured properly';
  }
}).value();


export default routers;
