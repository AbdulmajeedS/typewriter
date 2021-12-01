const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result = [];
rl.question('Whats your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`Thank you for your valuable feeback${answer}.`);
  result.push(answer);
  rl.question('What is an activity you like doing?', (answer) => {
    console.log(`You like doing ${answer}.`);
    result.push(answer);
    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`You like listening to ${answer}.`);
      result.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`Your favourite meal is ${answer}.`);
        result.push(answer);
        rl.question('What is your favourite thing to eat for that meal?', (answer) => {
          console.log(`Your favourite thing to eat for that meal is: ${answer}.`);
          result.push(answer);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`Your favourite sport is ${answer}.`);
            result.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`Your superpower is:${answer}.`);
              result.push(answer);
              console.log(result);

              console.log(`${result[0]} likes doing ${result[1]}, while listening to ${result[2]}. ${result[0]}'s favorite meal is ${result[3]}, and their favourite food for that meal is ${result[4]}. ${result[0]}'s favourite sport and superpoer is ${result[5]}, and ${result[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
}); 