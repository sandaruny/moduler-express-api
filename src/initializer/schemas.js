import appModules from './appModules';
import _ from 'lodash';

export const schemas = _(appModules)
  .mapKeys(module => module)
  .mapValues((module) => {
    try {
      return require(`../modules/${module}/Schema`).default;
    } catch (error) {
      console.log(error);
      throw 'Schema names are not configured properly';
    }
  }).value();

export default schemas;
