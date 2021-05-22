export class Logger {
  static yyyymmdd(d: Date) {
    var mm = d.getMonth() + 1;
    var dd = d.getDate();

    return [
      d.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join("-");
  }
  static hhmmss(d: Date) {
    var hh = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();

    return [
      (hh > 9 ? "" : "0") + hh,
      (mm > 9 ? "" : "0") + mm,
      (ss > 9 ? "" : "0") + ss,
    ].join(":");
  }

  static yyyymmddhhmmss(d: Date) {
    return [Logger.yyyymmdd(d), Logger.hhmmss(d)].join(" ");
  }
  static log(...optionalParams: any[]) {
    console.log(Logger.yyyymmddhhmmss(new Date()), ...optionalParams);
  }
}
