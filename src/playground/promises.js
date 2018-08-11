// create new promise
const promise = new Promise((resolve, reject) => {
  resolve('This is my resolved messsage');
});

// log return data
promise.then((data) => {
  console.log(data);
})
