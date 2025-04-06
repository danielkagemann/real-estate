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

const getList = (list, num) => {
  // only catch links which matches ALL the keywords
  // collect all links for each keyword
  const links = {};
  list.forEach((word) => {
    const match = keywords[word];
    if (match) {
      match.forEach((id) => {
        if (!links[id]) {
          links[id] = [];
        }
        links[id].push(word);
      });
    }
  });

  // filter out links which matches not ALL the keywords
  const filtered = Object.keys(links).filter((id) => {
    return links[id].length === list.length;
  });
  // shuffle array to get random order
  const shuffled = shuffleArray(filtered);
  // get random ids
  const ids = shuffled.slice(0, num);
  // get urls for ids
  const urls = ids
    .map((id) => (photos[id] ? photos[id] + "?w=1024&dpr=2" : ""))
    .filter((url) => url !== "" && !url.includes("premium"));
  return urls;
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
  agents: getList(["portrait", "face"], 10),
  beach: getList(["beach"], 50),
  villa: getList(["villa", "house"], 300),
  finca: getList(["hacienda"], 30),
  apartment: getList(["loft"], 300),
  bathroom: getList(["bathroom"], 20),
  bedroom: getList(["bed", "room"], 20),
  livingroom: getList(["livingroom"], 20),
  kitchen: getList(["kitchen", "room"], 20),
  pool: getList(["pool"], 10),
};

try {
  fs.writeFileSync("image-links.json", JSON.stringify(json, null, 3));

  console.log("SUMMARY");
  Object.keys(json).forEach((key) => {
    console.log("   ", json[key].length, key);
  });
  console.log("File written successfully!");
} catch (err) {
  console.error("Error writing file:", err);
}
