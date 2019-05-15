import express from 'express';
import Joi from 'joi';
import _ from 'lodash';
import modules from './appModules';
import schemas from './schemas';
import handlers from './handlers';
import routers from './routers';

const createRouter = () => (routingContext) => {
  const router = express.Router();
};

const validatorMiddleware = (schema) => (req, res, next) => {
  if (_.isNull(schema)) {
    console.log('The schema is null')
    next();
  } else {
    const result = Joi.validate(req.body, schema);
    console.log('Req Body: ', req.body);
    result.error === null ? next() : res.status(422).json({ errors: result.error});
    console.log(result.error);
  }
};

const getRouterPath = (moduleName) => `/${moduleName}`;

const defaulHandler = (req, res) => {
  res.status(404).json({ errors: ' Not Implemented'});
};

const connectRouters = (app) => {
  console.log('connecting Routers', JSON.stringify(routers));
  _.forEach(modules, (moduleName) => {
    const router = express.Router();
    const moduleSchema = schemas[moduleName];
    const moduleHandler = handlers[moduleName];
    console.log(JSON.stringify(handlers));
    _.forEach(routers[moduleName], (api, apiKey ) => {
      const { path, method } = api;
      const schema = _.isNil(moduleSchema[apiKey]) ? null : moduleSchema[apiKey];
      const handler = _.isNil(moduleHandler[apiKey]) ? defaulHandler : moduleHandler[apiKey];
      router[_.lowerCase(method)](path, validatorMiddleware(schema), handler);
      //apiDefinition[apiKey] = _.assign(api, schema, handler);
    });
    app.use(getRouterPath(moduleName), router);
  });
};

export {
  _,
  createRouter,
  express,
  validatorMiddleware,
  connectRouters,
}
