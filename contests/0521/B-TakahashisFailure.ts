const TakahashisFailure = (input: string): void => {
  let isPossible: boolean = false;
  const map = new Map();
  const results: boolean[] = [];

  const array: string[] = input.split('\n');
  const foods: number[] = array[1].split(' ').map((num) => Number(num));
  const badFoods: number[] = array[2].split(' ').map((num) => Number(num) - 1);
  const maxDeliciousness: number = Math.max(...foods);

  badFoods.forEach((badFood) => {
    if (foods[badFood] === maxDeliciousness) {
      map.set(foods[badFood], true);
    } else {
      map.set(foods[badFood], false);
    }
  });

  map.forEach((num) => results.push(num));

  isPossible = results.some((result) => result === true);

  if (isPossible) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
TakahashisFailure(require('fs').readFileSync('/dev/stdin', 'utf8'));
