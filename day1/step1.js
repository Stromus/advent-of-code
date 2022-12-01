import fs from "fs";

const fileName = process.argv[2];
const fileData = fs.readFileSync(fileName, "utf8");

let maxTotal = -1;
let currentTotal = 0;
for (const line of fileData.split("\n")) {
  if (line === "") {
    if (currentTotal > maxTotal) {
      maxTotal = currentTotal;
    }
    currentTotal = 0;
  } else {
    currentTotal += Number(line);
  }
}
if (currentTotal > maxTotal) {
  maxTotal = currentTotal;
}

console.log(maxTotal);
