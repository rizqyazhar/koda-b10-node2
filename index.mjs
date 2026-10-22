import readline from "node:readline/promises";
import { createInterface } from "node:readline/promises";

import { convertDateWMoment, convertDateWithoutMoment } from "./helper.mjs";

// const userInput = "24-04-2015";

async function ask(query) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const res = await rl.question(query);
  rl.close();
  return res;
}

async function main() {
  try {
    const answer = await ask("Masukkan tanggal dengan format (DD-MM-YYYY) ");

    const conv1 = convertDateWMoment(answer);
    const conv2 = convertDateWithoutMoment(answer);

    if (conv1.bool === false || conv2.bool === false) {
      console.log(conv1.mes);
      console.log(conv2.mes);
      const answer = await ask("Data salah, mau konversi lagi? (y/n) \n");
      if (answer === "y") {
        main();
      } else {
        return;
      }
    } else {
      console.log(conv1);
      console.log(conv2);
    }

    const askExit = await ask("Mau keluar (y/n) ");

    if (askExit === "y") {
      return;
    } else {
      main();
    }
  } catch {
    console.log("wrong");
  }
}

main();
