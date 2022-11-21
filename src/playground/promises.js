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

promise
  .then((data) => {
    console.log('1', data); // resolve is data
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('This is my other promise.');
        rej('Something went wrong!');
      }, 1500);
    });
  })
  .then((str) => {
    console.log('2', str);
  }) // return of last then is str
  .catch((err) => {
    console.log('error:', err);
  });

console.log('after');