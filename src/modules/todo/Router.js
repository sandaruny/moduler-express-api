export const API_EVENTS = {
  POST_TODO: 'POST_TODO',
  GET_TODO: 'GET_TODO',
  GET_ALL_TODOS: 'GET_ALL_TODOS',
  DELETE_TODO: 'DELETE_TODO',
};

export const todoAPI = {
  [API_EVENTS.POST_TODO]: {
    method: 'POST',
    path: '/'
  },
  [API_EVENTS.GET_TODO]: {
    method: 'GET',
    path: '/:id'
  },
  [API_EVENTS.GET_ALL_TODOS]: {
    method: 'GET',
    path: '/'
  },
  [API_EVENTS.DELETE_TODO]: {
    method: 'DELETE',
    path: '/:id'
  },
};

export default todoAPI;
