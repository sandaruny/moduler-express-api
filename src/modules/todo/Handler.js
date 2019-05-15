import { API_EVENTS } from './Router';

let todos = [];

export const handler = {
  [API_EVENTS.GET_ALL_TODOS]: (req, res, next) => {
    res.send(JSON.stringify(todos));
  },
  [API_EVENTS.POST_TODO]:  (req, res, next) => {
    const { todo, timestamp } = req.body;
    todos.push({ todo, timestamp })
    res.send('OK');
  },
  [API_EVENTS.GET_TODO]:  (req, res, next) => {
    res.send(JSON.stringify(todos[req.params.id]));
  },
  [API_EVENTS.DELETE_TODO]:  (req, res, next) => {
    const deleteId = req.params.id;
    if (deleteId && todos[req.params.id]) {
      todos.splice(deleteId, 1);
      res.send('OK');
    } else {
      res.send('BAD');
    }
  },
};

export default handler;
