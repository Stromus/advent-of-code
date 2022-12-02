import fs from "fs";

const fileName = process.argv[2];
const fileData = fs.readFileSync(fileName, "utf8");

let totalPoints = 0;
for (const line of fileData.split("\n")) {
  const [opponent, you] = line.split(" ");
  switch (you) {
    case "X":
      totalPoints += 1;
      break;
    case "Y":
      totalPoints += 2;
      break;
    case "Z":
      totalPoints += 3;
      break;
  }
  const result =
    (opponent.charCodeAt(0) -
      "A".charCodeAt(0) -
      you.charCodeAt(0) +
      "X".charCodeAt(0) +
      3) %
    3;
  switch (result) {
    case 0:
      totalPoints += 3;
      break;
    case 2:
      totalPoints += 6;
      break;
  }
}
console.log(totalPoints);
