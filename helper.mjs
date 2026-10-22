import moment from "moment";

function validator(input, digitHari, digitBulan, tahun) {
  if (
    digitHari > 31 ||
    digitBulan > 12 ||
    (digitHari === 31 &&
      (digitBulan === 4 ||
        digitBulan === 6 ||
        digitBulan === 9 ||
        digitBulan === 11)) ||
    (digitBulan === 2 && digitHari > 28) ||
    !digitHari ||
    !digitBulan ||
    !tahun ||
    (input.charAt(2) !== "-" && input.charAt(5) !== "-")
  )
    return false;
  return true;
}

export function convertDateWMoment(input) {
  const splited = input.split("-");

  const digitHari = Number(splited[0]);
  const digitBulan = Number(splited[1]);
  const tahun = Number(splited[2]);

  if (!validator(input, digitHari, digitBulan, tahun))
    return {
      bool: false,
      mes: "Format tanggal salah",
    };

  if (!moment(input, "DD-MM-YYYY"))
    return {
      bool: false,
      mes: "Format tanggal salah",
    };

  return moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");
}

export function convertDateWithoutMoment(input) {
  const splited = input.split("-");

  const digitHari = Number(splited[0]);
  const digitBulan = Number(splited[1]);
  const tahun = Number(splited[2]);

  if (!validator(input, digitHari, digitBulan, tahun))
    return {
      bool: false,
      mes: "Format tanggal salah",
    };

  const dateToConvert = new Date(tahun, digitBulan - 1, digitHari);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return dateToConvert.toLocaleDateString("id-ID", options);
}
