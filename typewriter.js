// typewriter effect with setTimeout
let sentence = "hello there from lighthouse labs";
sentence = sentence + "\n";
const type = function(letter, delay) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay);
};

let time = 0;
for (const char of sentence) {
  time += 50;
  type(char, time);
}
