const Main6 = (input: string): void => {
  const numbers: string[] = input.split('\n');
  const N: number = Number(numbers[0]);
  let cards: number[] = numbers[1].split(' ').map((n) => Number(n));
  let aliceTotal: number = 0;
  let bobTotal: number = 0;

  for (let i: number = 0; i < N; i++) {
    // カードの中で一番高いものを取る
    const max: number = Math.max(...cards);

    if ((i + 1) % 2 === 0) {
      bobTotal = bobTotal + max;
    } else {
      aliceTotal = aliceTotal + max;
    }

    // 同じ数値が入る場合がある
    cards = cards.filter((card) => {
      return card !== max;
    });
  }

  console.log(aliceTotal - bobTotal);
};

// 入力例
Main6('2\n3 1');
Main6(`3
2 7 4
`);
Main6(`4
20 18 2 18
`);

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main6(require('fs').readFileSync('/dev/stdin', 'utf8'));
