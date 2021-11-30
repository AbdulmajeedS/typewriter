const str = "hello there from lighthouse labs";
let delay = 0
const increment = 500

for (let i of str) {
  setTimeout(() => {
    console.log(i);
  }, delay);
  delay += increment;
}