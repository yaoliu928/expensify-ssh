const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      name: 'Andrew',
      age: 26
    });
    rej('Something went wrong!');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log('error:', err);
});

console.log('after');