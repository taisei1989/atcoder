const Main2 = (input: string): void => {
  const numbers: string[] = input.split('');
  let i: number = 0;

  numbers.forEach((number) => (number === '1' ? i++ : null));
  console.log(i);
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main2(require('fs').readFileSync('/dev/stdin', 'utf8'));
