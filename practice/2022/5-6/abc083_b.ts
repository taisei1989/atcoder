const findSumOfDigits = (n: number): number => {
  let sum: number = 0;
  let number: number = n;

  while (number > 0) {
    sum += Math.floor(number % 10);
    number = Math.floor(number / 10);
  }

  return sum;
};

const Main = (input: string): void => {
  const numbers: { N: number; A: number; B: number } = {
    N: Number(input.split(' ')[0]),
    A: Number(input.split(' ')[1]),
    B: Number(input.split(' ')[2]),
  };

  let result: number = 0;

  for (let i: number = 0; i < numbers.N; i++) {
    const sum: number = findSumOfDigits(i + 1);
    if (numbers.A <= sum && sum <= numbers.B) result += i + 1;
  }

  console.log(result);
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
