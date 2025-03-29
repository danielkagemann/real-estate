CREATE TABLE properties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('villa', 'apartment', 'finca')),
  price INTEGER NOT NULL,
  newbuild INTEGER NOT NULL CHECK(newbuild IN (0, 1)),
  build INTEGER NOT NULL,
  area INTEGER NOT NULL,       -- Wohnfläche in m²
  plot INTEGER,                -- Grundstücksgröße in m² (NULL bei Apartments erlaubt)
  bedrooms INTEGER NOT NULL,   -- Anzahl Schlafzimmer
  bathrooms INTEGER NOT NULL,  -- Anzahl Badezimmer
  private_pool INTEGER NOT NULL CHECK(private_pool IN (0, 1)), -- 1 = Ja, 0 = Nein
  parking INTEGER NOT NULL     -- Anzahl Parkplätze
  images TEXT -- z. B. JSON- oder Komma-getrennte Bild-URLs
);