#!/usr/bin/node
const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/todos' + process.argv[2];
request(process.argv[2], function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    let completed = {};
    todos.forEach((todo) => {
      if (todo.completed && completed[todo.userId] === undefined) {
        completed[todo.userId] = 1;
      } else if (todo.completed) {
        completed[todo.userId] += 1;
      }
    });
    console.log(completed);
  }
});
