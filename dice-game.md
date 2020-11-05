# Dice Game

### PROVIDED:

1. A function that returns a random number between 1 and 6

### TASK:

1. Build an application that plays the game optimally

### GAME RULES:

1. You will roll a dice a maximum of six times in a row.
2. Count either the value or 10 \* the value of each roll.
3. See how close to 101 you can get without going over.
   Ex. 1 or 10, 2 or 20, 3 or 30, etc.

### BEFORE WE START:

1. Imagine rolling a dice on your desk and play through the game a couple times in your head
2. Once you understand the rules, you may begin coding below

```js
// Helper function used to generate a random integer between 1 - 6
const generateDiceNumber = () => {
   return Math.floor(Math.random() * 6) + 1;
};
```
