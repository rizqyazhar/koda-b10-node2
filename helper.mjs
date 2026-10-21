import moment from "moment";

export function convertDateWMoment(input) {
  if (!moment(input, "DD-MM-YYYY")) return "Format tanggal salah";

  return moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");
}

export function convertDateWithoutMoment(input) {
  const splited = input.split("-");

  const digitHari = Number(splited[0]);
  const digitBulan = Number(splited[1]);
  const tahun = Number(splited[2]);

  if (
    ((digitHari < 0 && digitHari > 31) ||
      (digitBulan < 0 && digitBulan > 12)) &&
    input.charAt(2) === "-" &&
    input.charAt(5) === "-"
  )
    return "Format tanggal salah";

  if (splited.length === 0) return "Format tanggal salah";

  const dateToConvert = new Date(tahun, digitBulan - 1, digitHari);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return dateToConvert.toLocaleDateString("id-ID", options);
}
