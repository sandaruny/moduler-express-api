import appModules from './appModules';
import _ from 'lodash';

export const handlers = _(appModules)
  .mapKeys(module => module)
  .mapValues((module) => {
    try {
      return require(`../modules/${module}/Handler`).default;
    } catch (error) {
      console.log(error);
      throw 'Handler names are not configured properly';
    }
  }).value();

export default handlers;
