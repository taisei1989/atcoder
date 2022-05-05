const Main4 = (input: string): void => {
  const numbers = {
    A: Number(input.split('\n')[0]),
    B: Number(input.split('\n')[1]),
    C: Number(input.split('\n')[2]),
    X: Number(input.split('\n')[3]),
  };
  let count: number = 0;

  for (let i: number = 0; i <= numbers.A; i++) {
    for (let j: number = 0; j <= numbers.B; j++) {
      for (let k: number = 0; k <= numbers.C; k++) {
        const sum: number = 500 * i + 100 * j + 50 * k;
        if (sum === numbers.X) count++;
      }
    }
  }

  console.log(count);
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main4(require('fs').readFileSync('/dev/stdin', 'utf8'));
