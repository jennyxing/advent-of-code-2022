import run from "aocrunner";

const parseInput = (rawInput) => {
  const individualElfCalories = rawInput.split(/\n\n/)
  const parsedCalories = individualElfCalories.map((allCals) => allCals.split(/\n/))
  return parsedCalories;
};

const part1 = (rawInput) => {
  const individualElfCalories = parseInput(rawInput);

  const totalCaloriesPerElf = individualElfCalories.map((allCals) => {
    const totalCals = allCals.reduce((a,b)=> {return parseInt(a)+parseInt(b)}, 0)
    return totalCals;
  })

  return Math.max(...totalCaloriesPerElf);
};

const part2 = (rawInput) => {
  const individualElfCalories = parseInput(rawInput);

  const totalCaloriesPerElf = individualElfCalories.map((allCals) => {
    const totalCals = allCals.reduce((a,b)=> {return parseInt(a)+parseInt(b)}, 0)
    return totalCals;
  })

  const sortedTotalCaloriesPerElf = totalCaloriesPerElf.sort((a,b)=> b-a)
  console.log(sortedTotalCaloriesPerElf);
  return sortedTotalCaloriesPerElf[0] + sortedTotalCaloriesPerElf[1] + sortedTotalCaloriesPerElf[2];
};

run({
  part1: {
    tests: [
      {
        input: `
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
