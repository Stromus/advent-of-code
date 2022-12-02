import fs from "fs";

const fileName = process.argv[2];
const fileData = fs.readFileSync(fileName, "utf8");

let totalPoints = 0;
for (const line of fileData.split("\n")) {
  const [opponent, you] = line.split(" ");
  switch (you) {
    case "Y":
      totalPoints += 3;
      break;
    case "Z":
      totalPoints += 6;
      break;
  }
  const result =
    (opponent.charCodeAt(0) -
      "A".charCodeAt(0) +
      you.charCodeAt(0) -
      "X".charCodeAt(0) +
      2) %
    3;
  totalPoints += result + 1;
}
console.log(totalPoints);
