const sqlite3 = require("sqlite3").verbose();
const { faker } = require("@faker-js/faker");
const imageLinks = require("./unsplash-data/image-links.json");

const db = new sqlite3.Database("db.sqlite");

const propertyTypes = ["villa", "apartment", "finca"];

const propertyTitles = {
  villa: [
    "Luxury Seaside Villa with Infinity Pool",
    "Mediterranean-Style Villa with Ocean Views",
    "Private Villa with Lush Garden and Pool",
    "Elegant Villa with Panoramic Mountain Views",
    "Spacious Family Villa with Modern Amenities",
    "Exclusive Beachfront Villa with Private Dock",
    "High-End Villa with Smart Home Features",
    "Secluded Villa with Large Terrace and BBQ Area",
    "Sunny Spanish Villa with Citrus Grove",
    "Opulent Villa with Home Cinema and Gym",
  ],
  apartment: [
    "Modern Apartment in the Heart of Barcelona",
    "Penthouse with Private Rooftop Terrace",
    "Spacious Apartment with Sea Views",
    "Contemporary Flat in a Luxury Residential Complex",
    "Cozy City Apartment with High Ceilings",
    "Stylish Loft in Madrid's Trendy District",
    "Sunny Apartment with Balcony Overlooking the Park",
    "Chic Studio in a Historic Building",
    "Newly Renovated Apartment with Smart Home Tech",
    "Exclusive Duplex with Concierge Service",
  ],
  finca: [
    "Charming Country Finca with Olive Groves",
    "Traditional Spanish Finca with Vineyard",
    "Rustic Finca with Private Well and Fruit Trees",
    "Beautiful Rural Estate with Mountain Views",
    "Historic Stone Finca with Modern Upgrades",
    "Large Finca with Stables and Equestrian Facilities",
    "Cozy Cottage-Style Finca with Fireplace",
    "Authentic Andalusian Finca with Courtyard",
    "Eco-Friendly Finca with Solar Panels and Well Water",
    "Secluded Countryside Retreat with Private Pool",
  ],
};

const propertyDescriptions = {
  villa: [
    "This luxurious villa offers breathtaking sea views, a private infinity pool, and modern amenities for ultimate comfort.",
    "Enjoy the Mediterranean lifestyle in this stunning villa featuring a spacious terrace and lush gardens.",
    "A tranquil and private villa with high-end finishes, perfect for a relaxing retreat.",
    "This villa boasts floor-to-ceiling windows, allowing for plenty of natural light and stunning panoramic views.",
    "A dream home with a private pool, multiple terraces, and top-tier appliances.",
    "An elegant villa designed for entertaining, featuring an outdoor kitchen and a heated pool.",
    "Escape to this secluded oasis with expansive gardens and a charming guesthouse.",
    "A high-tech smart villa with automated lighting and security systems.",
    "Located in an exclusive community, this villa includes a private golf cart and access to a clubhouse.",
    "A luxurious beachfront property with direct access to the sand and a rooftop terrace.",
  ],
  apartment: [
    "A stylish and modern apartment located in the heart of Barcelona, offering stunning city views.",
    "Experience high-end urban living in this penthouse featuring a private rooftop terrace and jacuzzi.",
    "A sleek and contemporary apartment in a prime location, ideal for professionals and investors alike.",
    "This apartment boasts an open floor plan, designer kitchen, and high-quality finishes.",
    "Enjoy city living at its best with this modern flat, featuring large windows and a spacious balcony.",
    "A cozy studio apartment with a minimalist design and smart storage solutions.",
    "This duplex offers an elegant blend of contemporary design and historical charm.",
    "A fully furnished apartment in a gated community with concierge service and a swimming pool.",
    "An energy-efficient apartment with underfloor heating and automated blinds.",
    "This exclusive residence features a private elevator and a wine cellar.",
  ],
  finca: [
    "A charming Spanish finca set amidst rolling hills, featuring an expansive olive grove.",
    "Enjoy complete privacy in this traditional finca with its own vineyard and wine cellar.",
    "A rustic country home with exposed wooden beams and a beautiful stone fireplace.",
    "This peaceful finca offers a large vegetable garden, fruit trees, and a natural water source.",
    "A historic estate with a unique blend of original charm and modern renovations.",
    "Perfect for horse lovers, this finca includes a large barn and equestrian facilities.",
    "An off-grid finca equipped with solar panels, a rainwater collection system, and a self-sustaining farm.",
    "An Andalusian-style finca with a picturesque courtyard and beautiful mountain views.",
    "A countryside retreat featuring an infinity pool, a spacious terrace, and a BBQ area.",
    "A secluded finca, ideal for a quiet escape, surrounded by stunning natural landscapes.",
  ],
};

const cities = [
  "Alicante",
  "Benidorm",
  "Torrevieja",
  "Denia",
  "Jávea",
  "Calpe",
  "Altea",
  "Villajoyosa",
  "Santa Pola",
  "Elche",
  "Moraira",
  "Guardamar del Segura",
  "Albir",
  "Benissa",
  "Teulada",
  "Orihuela Costa",
  "La Nucia",
  "Pego",
  "Rojales",
  "San Fulgencio",
];

function createAgent() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    image: faker.helpers.arrayElement(imageLinks.agents),
  };
}

function createProperty(agentId) {
  const type = faker.helpers.arrayElement(propertyTypes);

  const images = [
    faker.helpers.arrayElement(imageLinks.kitchen),
    faker.helpers.arrayElement(imageLinks.livingroom),
    faker.helpers.arrayElement(imageLinks.bedroom),
    faker.helpers.arrayElement(imageLinks.bathroom),
  ];

  if (type === "villa") {
    images.push(faker.helpers.arrayElement(imageLinks.villa));
    images.push(faker.helpers.arrayElement(imageLinks.pool));
    images.push(faker.helpers.arrayElement(imageLinks.beach));
  } else if (type === "apartment") {
    images.push(faker.helpers.arrayElement(imageLinks.apartment));
  } else if (type === "finca") {
    images.push(faker.helpers.arrayElement(imageLinks.finca));
  }

  return {
    title: faker.helpers.arrayElement(propertyTitles[type]),
    description: faker.helpers.arrayElement(propertyDescriptions[type]),
    location: faker.helpers.arrayElement(cities),
    type,
    price: faker.number.int({ min: 50000, max: 5000000 }),
    newbuild: faker.datatype.boolean() ? 1 : 0,
    build: faker.number.int({ min: 1980, max: 2025 }),
    area: faker.number.int({ min: 50, max: 1000 }),
    plot:
      type === "apartment" ? null : faker.number.int({ min: 100, max: 5000 }),
    bedrooms: faker.number.int({ min: 1, max: 10 }),
    bathrooms: faker.number.int({ min: 1, max: 5 }),
    private_pool: faker.datatype.boolean() ? 1 : 0,
    parking: faker.number.int({ min: 0, max: 5 }),
    images: images.join(","),
    agent_id: agentId,
  };
}

function insertAgent(agent, callback) {
  db.run(
    `INSERT INTO agents (name, email, phone, image) VALUES (?, ?, ?, ?)`,
    [agent.name, agent.email, agent.phone, agent.image],
    function (err) {
      if (err) {
        console.error("Error inserting agent:", err);
        return;
      }
      callback(this.lastID);
    }
  );
}

function insertProperty(property) {
  db.run(
    `INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, date('now'))`,
    [
      property.title,
      property.description,
      property.location,
      property.type,
      property.price,
      property.newbuild,
      property.build,
      property.area,
      property.plot,
      property.bedrooms,
      property.bathrooms,
      property.private_pool,
      property.parking,
      property.images,
      property.agent_id,
    ],
    function (err) {
      if (err) {
        console.error("Error inserting property:", err);
      }
    }
  );
}

function generateData(numProperties = 30) {
  const agents = [];
  // create 3 agents
  for (let i = 0; i < 3; i++) {
    let agent = createAgent();
    insertAgent(agent, (agentId) => {
      agents.push(agentId);

      // because we are async we check for last agent before we continue
      if (agents.length === 3) {
        // create properties
        for (let j = 0; j < numProperties; j++) {
          let assignedAgent = faker.helpers.arrayElement(agents);
          let property = createProperty(assignedAgent);
          insertProperty(property);
        }
      }
    });
  }
}

db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON");
  console.log("Generating real estate data...");
  generateData();
});
