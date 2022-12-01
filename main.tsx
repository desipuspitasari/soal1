const angkaKu = [3, 21, 60, 1, 2, 3, 3, 5, 5, 15, 6, 9, 10, 30];

const fungsiKu = (arrayKu: number[]) => {
  let tiga: any[] = [];
  let lima: any = [];
  let limabelas: any[] = [];

  for (let i = 0; i < arrayKu.length; i++) {
    if (arrayKu[i] < 15 && arrayKu[i] % 3 == 0) {
      tiga = [...tiga, arrayKu[i]];
    }
    if (arrayKu[i] < 15 && arrayKu[i] % 5 == 0) {
      lima = [...lima, arrayKu[i]];
    }
    if (arrayKu[i] >= 15 && arrayKu[i] % 15 == 0) {
      limabelas = [...limabelas, arrayKu[i]];
    }
  }

  console.log(
    `fish x ${tiga.length}, bash x ${lima.length}, fish bash x ${limabelas.length}`
  );
};

fungsiKu(angkaKu);
