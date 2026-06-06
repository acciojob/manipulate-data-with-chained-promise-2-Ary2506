const output = document.getElementById("output");

// Initial promise resolves after 3 seconds
new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
})
  .then((arr) => {
    // Filter even numbers
    const evenNumbers = arr.filter((num) => num % 2 === 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        output.textContent = evenNumbers;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Multiply by 2
    const multipliedNumbers = evenNumbers.map((num) => num * 2);

    return new Promise((resolve) => {
      setTimeout(() => {
        output.textContent = multipliedNumbers;
        resolve(multipliedNumbers);
      }, 2000);
    });
  });