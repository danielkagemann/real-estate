CREATE TABLE properties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('villa', 'apartment', 'finca')),
  price INTEGER NOT NULL,
  newbuild INTEGER NOT NULL CHECK(newbuild IN (0, 1)),
  year INTEGER NOT NULL,
  area INTEGER NOT NULL,       
  plot INTEGER,                
  bedrooms INTEGER NOT NULL,   
  bathrooms INTEGER NOT NULL,  
  parking INTEGER NOT NULL,
  features TEXT,
  status TEXT NOT NULL CHECK(status IN ('available', 'sold', 'reserved')),
  images TEXT,
  agent_id INTEGER NOT NULL,
  created TEXT NOT NULL DEFAULT (date('now')),
  FOREIGN KEY (agent_id) REFERENCES agents(id)
);

CREATE TABLE agents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  image TEXT
);