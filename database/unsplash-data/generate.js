const fs = require("fs");

const PHOTOTS = {};
const KEYWORDS = {};

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

    if (!KEYWORDS[id]) {
      KEYWORDS[id] = [];
    }
    KEYWORDS[id].push(word);
  });
};

const readPhotos = () => {
  const data = fs.readFileSync("photos.tsv", "utf8");

  data.split("\n").forEach((line) => {
    const [id, , url] = line.split("\t", 3);
    PHOTOTS[id] = url;
  });
};

const getList = (list, num) => {
  // get a subset of photos which match all keywords
  const links = Object.keys(KEYWORDS).filter((k) => {
    const image = KEYWORDS[k];
    // check if image has all keywords
    return list.every((word) => {
      return image.includes(word);
    });
  });

  // shuffle array to get random order
  const shuffled = shuffleArray(links);

  // slice out
  const ids = shuffled.slice(0, num);

  // DEBUG OUTPUT
  console.group("LIST: " + list.join(","));
  ids.forEach((id) => {
    console.log("-> ", KEYWORDS[id].join(","));
  });
  console.groupEnd();

  // get urls for ids
  const urls = ids
    .map((id) => (PHOTOTS[id] ? PHOTOTS[id] + "?w=1024&dpr=2" : ""))
    .filter((url) => url !== "" && !url.includes("premium"));
  return urls;
};

console.log("first of all read keyword file");
readKeywords();
console.log(
  "...done reading keyword file width " +
    Object.keys(KEYWORDS).length +
    " keywords"
);

console.log("now prepare the photos");
readPhotos();
console.log("...done preparing the photos", Object.keys(PHOTOTS).length);

console.log("finally generate link file");

const json = {
  male: getList(
    ["portrait", "face", "laughing", "smile", "beauty", "head", "photo", "man"],
    20
  ),
  female: getList(
    [
      "portrait",
      "face",
      "laughing",
      "smile",
      "beauty",
      "head",
      "photo",
      "woman",
    ],
    20
  ),
  beach: getList(["beach", "sand", "sun", "ocean", "waterfront"], 50),
  villa: getList(["villa", "house", "building", "architecture"], 300),
  finca: getList(["hacienda", "villa", "cabin", "countryside"], 30),
  apartment: getList(["loft", "attic", "flooring", "building"], 300),
  bathroom: getList(["bathroom", "shower"], 20),
  bedroom: getList(["bed", "room", "sleep", "indoor", "furniture"], 20),
  livingroom: getList(["livingroom"], 20),
  kitchen: getList(["kitchen", "room"], 20),
  pool: getList(["pool", "water", "outside"], 10),
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
