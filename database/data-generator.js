const sqlite3 = require("sqlite3").verbose();
const { faker } = require("@faker-js/faker");
const configuration = require("./config.js");
// FIXME: replace with unsplash generated links if you want. but results
// are not as good as the ones provided in the config file
// const imageLinks = require("./unsplash-data/image-links.json");
const imageLinks = configuration.images;

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
    "This stunning villa features a modern design, spacious living areas, and a private pool with breathtaking views.",
    "Experience luxury living in this beautiful villa with a large terrace, perfect for entertaining guests.",
    "A perfect blend of comfort and style, this villa offers high-end finishes and a serene atmosphere.",
    "This villa is designed for relaxation, featuring a private infinity pool and lush gardens.",
    "Enjoy the Mediterranean lifestyle in this elegant villa with panoramic views and modern amenities.",
    "A luxurious villa with a spacious layout, perfect for families or those who love to entertain.",
    "This villa boasts a unique architectural design, with large windows that let in natural light and stunning views.",
    "A dream home with a private pool, multiple terraces, and top-tier appliances.",
    "An elegant villa designed for entertaining, featuring an outdoor kitchen and a heated pool.",
    "Escape to this secluded oasis with expansive gardens and a charming guesthouse.",
    "A high-tech smart villa with automated lighting and security systems.",
    "Located in an exclusive community, this villa includes a private golf cart and access to a clubhouse.",
    "A luxurious beachfront property with direct access to the sand and a rooftop terrace.",
    "This villa is perfect for those who love outdoor living, with a large terrace and BBQ area.",
    "A spacious villa with a modern kitchen, open-plan living areas, and a private pool.",
    "This villa is designed for relaxation, featuring a private infinity pool and lush gardens.",
    "A perfect blend of comfort and style, this villa offers high-end finishes and a serene atmosphere.",
    "This villa is designed for relaxation, featuring a private infinity pool and lush gardens.",
    "Experience luxury living in this beautiful villa with a large terrace, perfect for entertaining guests.",
    "A perfect blend of comfort and style, this villa offers high-end finishes and a serene atmosphere.",
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
    "This modern apartment features an open floor plan, high ceilings, and a private balcony with city views.",
    "A stylish and contemporary flat located in a prime area, perfect for city living.",
    "This apartment offers a spacious living area, a fully equipped kitchen, and access to a communal pool.",
    "Enjoy the convenience of city life in this chic apartment with easy access to public transport.",
    "A cozy apartment with a minimalist design, perfect for singles or couples.",
    "This apartment is located in a historic building, blending modern amenities with classic charm.",
    "A luxurious penthouse with a private terrace, jacuzzi, and stunning views of the skyline.",
    "This apartment features a modern kitchen, spacious living room, and large windows for natural light.",
    "A newly renovated apartment with high-end finishes and smart home technology.",
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
    "This charming finca is set in a tranquil location, surrounded by olive groves and mountains.",
    "A traditional Spanish finca with rustic charm, featuring exposed wooden beams and a large terrace.",
    "This finca offers a unique blend of modern amenities and traditional architecture, perfect for a peaceful retreat.",
    "Enjoy the beauty of nature in this rustic finca with a large garden and fruit trees.",
    "A spacious finca with a private pool, perfect for families or those who love outdoor living.",
    "This finca features a large plot of land, ideal for gardening or keeping animals.",
    "A cozy country home with a fireplace, perfect for relaxing evenings.",
    "This finca is designed for sustainability, featuring solar panels and a rainwater collection system.",
    "A historic finca with a unique blend of original charm and modern renovations.",
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

function createAgent() {
  const male = Math.random() < 0.5;

  return {
    name: faker.person.fullName({ sex: male ? "male" : "female" }),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    image: faker.helpers.arrayElement(
      male ? imageLinks.male : imageLinks.female
    ),
  };
}

function createProperty(agentId) {
  const type = faker.helpers.arrayElement(propertyTypes);
  const images = [];

  if (type === "villa") {
    images.push(faker.helpers.arrayElement(imageLinks.villa));
    images.push(faker.helpers.arrayElement(imageLinks.pool));
    images.push(faker.helpers.arrayElement(imageLinks.beach));
    images.push(faker.helpers.arrayElement(imageLinks.kitchen));
    images.push(faker.helpers.arrayElement(imageLinks.livingroom));
    images.push(faker.helpers.arrayElement(imageLinks.bedroom));
    images.push(faker.helpers.arrayElement(imageLinks.bathroom));
  } else if (type === "apartment") {
    images.push(faker.helpers.arrayElement(imageLinks.apartment));
    images.push(faker.helpers.arrayElement(imageLinks.bedroom));
    images.push(faker.helpers.arrayElement(imageLinks.bathroom));
  } else if (type === "finca") {
    images.push(faker.helpers.arrayElement(imageLinks.finca));
    images.push(faker.helpers.arrayElement(imageLinks.kitchen));
    images.push(faker.helpers.arrayElement(imageLinks.livingroom));
    images.push(faker.helpers.arrayElement(imageLinks.bedroom));
    images.push(faker.helpers.arrayElement(imageLinks.bathroom));
  }

  return {
    title: faker.helpers.arrayElement(propertyTitles[type]),
    description: faker.helpers.arrayElement(propertyDescriptions[type]),
    location: faker.helpers.arrayElement(configuration.cities),
    type,
    price: faker.number.int(configuration.priceRange),
    newbuild: faker.datatype.boolean() ? 1 : 0,
    year: faker.number.int(configuration.buildYear),
    area: faker.number.int(configuration.buildSize),
    plot:
      type === "apartment" ? null : faker.number.int(configuration.plotSize),
    bedrooms: faker.number.int(configuration.numberOfBedrooms),
    bathrooms: faker.number.int(configuration.numberOfBathrooms),
    parking: faker.number.int(configuration.parkingSlots),
    features: JSON.stringify(
      Array(faker.number.int({ min: 3, max: 7 }))
        .fill("")
        .map(() => faker.helpers.arrayElement(configuration.features))
    ),
    status: "available",
    images: JSON.stringify(images),
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
    `INSERT INTO properties (title, description, location, type, price, newbuild, year, area, plot, bedrooms, bathrooms, parking, features, status, images, agent_id, created)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, date('now'))`,
    [
      property.title,
      property.description,
      property.location,
      property.type,
      property.price,
      property.newbuild,
      property.year,
      property.area,
      property.plot,
      property.bedrooms,
      property.bathrooms,
      property.parking,
      property.features,
      property.status,
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

function generateData() {
  const agents = [];
  // create agents
  for (let i = 0; i < configuration.numberOfAgents; i++) {
    let agent = createAgent();
    insertAgent(agent, (agentId) => {
      agents.push(agentId);

      // because we are async we check for last agent before we continue
      if (agents.length === configuration.numberOfAgents) {
        // create properties
        for (let j = 0; j < configuration.numberOfProperties; j++) {
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
