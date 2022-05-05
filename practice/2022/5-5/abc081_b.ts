const Main3 = (input: string): void => {
  const array: string[] = input.split('\n');
  let numbers: number[] = array[1].split(' ').map((number) => Number(number));
  let count: number = 0;

  // 操作が行える限り操作を繰り返す
  while (true) {
    const isOdd: boolean = numbers.some((number) => {
      return number % 2 !== 0;
    });

    if (isOdd) break;

    numbers = numbers.map((number) => {
      return number / 2;
    });
    count++;
  }

  console.log(count);
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main3(require('fs').readFileSync('/dev/stdin', 'utf8'));
