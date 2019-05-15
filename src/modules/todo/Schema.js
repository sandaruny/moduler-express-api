import Joi from 'joi';

const postTodo = Joi.object().keys({
  todo: Joi.string().alphanum().min(3).max(30).required(),
  timestamp: Joi.number(),
});

const schema = {
  POST_TODO: postTodo,
}

export default schema;
