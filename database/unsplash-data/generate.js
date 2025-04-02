const fs = require("fs");

const keywords = {};
const photos = {};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
};

const readKeywords = () => {
  const data = fs.readFileSync("keywords.tsv", "utf8");
  data.split("\n").forEach((line) => {
    const [id, word] = line.split("\t", 2);

    // ignore keywords with spaces
    if (id && word && !word.includes(" ")) {
      if (!keywords[word]) {
        keywords[word] = [];
      }
      keywords[word].push(id);
    }
  });
};

const readPhotos = () => {
  const data = fs.readFileSync("photos.tsv", "utf8");

  data.split("\n").forEach((line) => {
    const [id, , url] = line.split("\t", 3);
    photos[id] = url;
  });
};

const getList = (word, num) => {
  const match = keywords[word];
  if (match) {
    // shuffle array to get random order
    const ids = shuffleArray(match).slice(0, num);
    return ids.map((id) => photos[id] ?? "").filter((url) => url !== "");
  }
  return [];
};

console.log("first of all read keyword file");
readKeywords();
console.log(
  "...done reading keyword file width " +
    Object.keys(keywords).length +
    " keywords"
);

console.log("now prepare the photos");
readPhotos();
console.log("...done preparing the photos", Object.keys(photos).length);

console.log("finally generate link file");

const json = {
  agents: getList("portrait", 10),
  beach: getList("beach", 50),
  villa: getList("villa", 300),
  finca: getList("hacienda", 30),
  apartment: getList("apartment", 300),
  bathroom: getList("bathroom", 20),
  bedroom: getList("bedroom", 20),
  livingroom: getList("livingroom", 20),
  kitchen: getList("kitchen", 20),
  pool: getList("pool", 10),
};

try {
  fs.writeFileSync("image-links.json", JSON.stringify(json, null, 3));
  console.log("File written successfully!");
} catch (err) {
  console.error("Error writing file:", err);
}
