const add = (function () {
    console.log('one')
    let counter = 0;
    return function () {
        console.log('running')
        counter += 1; return counter}
  })();
  
//   add(); // 1
//   add(); // 2
