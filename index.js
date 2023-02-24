const fastify = require('fastify');

const app = fastify();

app.get('/', (req, res) => {
  return {
    status: 'working',
    people: [
      { name: 'Natália', age: 5 },
      { name: 'Nicolas', age: 7 },
      { name: 'Renato', age: 29 },
      { name: 'Fernanda', age: 29 },
    ],
  };
});

app.listen(8000, () => {
  console.log('Server is running on 8000 port');
});
