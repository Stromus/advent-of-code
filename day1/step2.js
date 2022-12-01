import fs from "fs";

const fileName = process.argv[2];
const fileData = fs.readFileSync(fileName, "utf8");

let totals = [];
let currentTotal = 0;
for (const line of fileData.split("\n")) {
  if (line === "") {
    totals.push(currentTotal);
    currentTotal = 0;
  } else {
    currentTotal += Number(line);
  }
}
totals.push(currentTotal);
const sorted = totals.sort((a, b) => b - a);
console.log(sorted[0] + sorted[1] + sorted[2]);
