import moment from "moment";

function validator(input, digitHari, digitBulan, tahun) {
  if (
    (digitHari < 1 && digitHari > 31) ||
    (digitBulan < 1 && digitBulan > 12) ||
    !digitHari ||
    !digitBulan ||
    !tahun ||
    (input.charAt(2) !== "-" && input.charAt(5) !== "-")
  )
    return false;
}

export function convertDateWMoment(input) {
  const splited = input.split("-");

  const digitHari = Number(splited[0]);
  const digitBulan = Number(splited[1]);
  const tahun = Number(splited[2]);

  if (!validator(input, digitHari, digitBulan, tahun))
    return "Format tanggal salah";
  if (!moment(input, "DD-MM-YYYY")) return "Format tanggal salah";

  return moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");
}

export function convertDateWithoutMoment(input) {
  const splited = input.split("-");

  const digitHari = Number(splited[0]);
  const digitBulan = Number(splited[1]);
  const tahun = Number(splited[2]);

  if (!validator(input, digitHari, digitBulan, tahun))
    return "Format tanggal salah";

  const dateToConvert = new Date(tahun, digitBulan - 1, digitHari);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return dateToConvert.toLocaleDateString("id-ID", options);
}
