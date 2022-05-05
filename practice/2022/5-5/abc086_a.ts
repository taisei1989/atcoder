const Main = (input: string): void => {
  const numbers: string[] = input.split(' ');
  const a: number = Number(numbers[0]);
  const b: number = Number(numbers[1]);

  if ((a * b) % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
