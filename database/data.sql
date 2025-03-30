-- Insert agents
INSERT INTO agents (name, email, phone, image) VALUES
('James Wilson', 'james.wilson@coastalproperties.com', '+34 612 345 678', 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'),
('Sofia Martinez', 'sofia.martinez@mediterraneanhomes.com', '+34 623 456 789', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'),
('Daniel Thompson', 'daniel.thompson@sunnyestates.com', '+34 634 567 890', 'https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg');

-- Insert properties
INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES
-- Property 1
('Luxury Villa with Sea Views', 'This stunning villa offers panoramic views of the Mediterranean Sea. Featuring modern architecture with an open floor plan, high ceilings, and large windows that allow natural light to flood the interior. The outdoor area includes a landscaped garden, infinity pool, and multiple terraces perfect for entertaining.', 'Javea', 'villa', 1250000, 0, 2015, 320, 1200, 4, 3, 1, 2, '["https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg", "https://images.pexels.com/photos/32870/pexels-photo.jpg", "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg", "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg"]', 1, '2025-02-10'),

-- Property 2
('Modern Seafront Apartment', 'Beautifully designed apartment located directly on the seafront. Floor-to-ceiling windows offer breathtaking views of the Mediterranean. The property features high-end finishes, a gourmet kitchen, and a spacious terrace overlooking the sea. The complex includes a community pool and garden.', 'Denia', 'apartment', 450000, 1, 2023, 110, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg", "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"]', 2, '2025-01-15'),

-- Property 3
('Traditional Spanish Finca', 'Authentic Spanish finca nestled in the countryside with beautiful mountain views. This property has been carefully restored to maintain its traditional charm while incorporating modern comforts. Features include exposed wooden beams, terracotta floors, and a private courtyard with a fountain.', 'Moraira', 'finca', 695000, 0, 1985, 240, 3500, 3, 2, 1, 2, '["https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg", "https://images.pexels.com/photos/7031414/pexels-photo-7031414.jpeg", "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg", "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg"]', 3, '2025-02-25'),

-- Property 4
('Exclusive Beachfront Villa', 'Exceptional villa located just steps from the beach. This property offers direct sea access and uninterrupted views. The elegant interior features marble floors, designer kitchen, and spacious living areas. The outdoor space includes a large infinity pool, tropical garden, and covered dining area.', 'Altea', 'villa', 1950000, 0, 2018, 420, 1800, 5, 4, 1, 3, '["https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg", "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg", "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg", "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"]', 1, '2025-01-05'),

-- Property 5
('Penthouse with Panoramic Views', 'Luxurious penthouse apartment offering 360-degree views of the sea and mountains. This property features a spacious open-plan living area, gourmet kitchen, and a generous wrap-around terrace. The master bedroom includes a walk-in closet and ensuite bathroom with jacuzzi.', 'Calpe', 'apartment', 595000, 0, 2019, 150, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg", "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg", "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"]', 2, '2025-02-01'),

-- Property 6
('Rustic Finca with Olive Grove', 'Charming country property surrounded by its own olive grove and fruit trees. This traditional finca offers authentic Spanish character with modern amenities. The property includes a main house and separate guest accommodation, perfect for hosting friends and family.', 'Benissa', 'finca', 825000, 0, 1970, 280, 10000, 4, 3, 1, 3, '["https://images.pexels.com/photos/416965/pexels-photo-416965.jpeg", "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg", "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg"]', 3, '2025-03-10'),

-- Property 7
('Contemporary Villa in Gated Community', 'Sleek, modern villa located in a prestigious gated community. This property features clean lines, minimalist design, and high-quality materials throughout. The outdoor area includes a designer pool, manicured garden, and summer kitchen. Smart home technology controls lighting, climate, and security.', 'Javea', 'villa', 1350000, 1, 2024, 280, 800, 4, 3, 1, 2, '["https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg", "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg", "https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg", "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"]', 1, '2025-01-20'),

-- Property 8
('Stylish Urban Apartment', 'Modern apartment located in the heart of the city. This property has been recently renovated with high-quality finishes and contemporary design. Features include an open-plan living area, designer kitchen, and private balcony. The building offers a rooftop pool and gym.', 'Alicante', 'apartment', 325000, 0, 2015, 95, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg", "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg", "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"]', 2, '2025-02-15'),

-- Property 9
('Mediterranean Finca with Vineyard', 'Spectacular country estate featuring its own vineyard and wine cellar. This elegant finca combines traditional architecture with luxurious modern comforts. The property includes a main residence, guest house, and various outbuildings set in beautiful landscaped grounds.', 'Teulada', 'finca', 1450000, 0, 1990, 350, 20000, 5, 4, 1, 4, '["https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg", "https://images.pexels.com/photos/7214766/pexels-photo-7214766.jpeg", "https://images.pexels.com/photos/2962056/pexels-photo-2962056.jpeg", "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg"]', 3, '2025-01-10'),

-- Property 10
('Designer Villa with Infinity Pool', 'Architectural masterpiece with stunning sea views. This unique villa features cutting-edge design, floor-to-ceiling windows, and luxurious finishes throughout. The infinity pool seems to merge with the Mediterranean Sea, creating a truly spectacular outdoor space.', 'Moraira', 'villa', 1650000, 1, 2022, 350, 1000, 4, 4, 1, 2, '["https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg", "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg", "https://images.pexels.com/photos/8031867/pexels-photo-8031867.jpeg", "https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg"]', 1, '2025-03-05'),

-- Property 11
('Beachside Apartment with Sea Views', 'Beautiful apartment just 100 meters from the beach. This property offers direct sea views from its spacious terrace. The interior features a bright living area, fully equipped kitchen, and two comfortable bedrooms. The complex includes gardens, pools, and tennis courts.', 'Denia', 'apartment', 385000, 0, 2017, 105, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg", "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg", "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg", "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg"]', 2, '2025-02-20'),

-- Property 12
('Historic Finca with Citrus Orchard', 'Enchanting 19th-century finca surrounded by a productive citrus orchard. This property has been lovingly restored, preserving original features while adding modern conveniences. The grounds include numerous terraces, a pool area, and a traditional summer kitchen.', 'Javea', 'finca', 890000, 0, 1850, 260, 15000, 4, 3, 1, 2, '["https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg", "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg", "https://images.pexels.com/photos/7031414/pexels-photo-7031414.jpeg", "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg"]', 3, '2025-01-25'),

-- Property 13
('Luxury Golf Villa', 'Stunning villa located on a prestigious golf course. This property offers magnificent views of the fairways and mountains beyond. The interior features high ceilings, marble floors, and elegant living spaces. The garden includes a private pool, covered terrace, and direct access to the golf course.', 'Finestrat', 'villa', 1150000, 0, 2016, 300, 900, 4, 3, 1, 2, '["https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg", "https://images.pexels.com/photos/8031864/pexels-photo-8031864.jpeg", "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"]', 1, '2025-02-05'),

-- Property 14
('Designer Duplex Apartment', 'Sophisticated duplex apartment in a premium location. This property spans two floors, offering generous living space and privacy. Features include a modern kitchen, double-height living room, and private roof terrace with jacuzzi and outdoor kitchen.', 'Calpe', 'apartment', 495000, 1, 2024, 140, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg", "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg", "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"]', 2, '2025-03-15'),

-- Property 15
('Mountain Finca with Panoramic Views', 'Secluded finca nestled in the mountains offering breathtaking panoramic views. This tranquil property combines rustic charm with comfortable modern living. The extensive grounds include olive trees, fruit orchards, a vegetable garden, and a natural swimming pond.', 'Alcalali', 'finca', 750000, 0, 1960, 220, 25000, 3, 2, 1, 2, '["https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg", "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg", "https://images.pexels.com/photos/7214393/pexels-photo-7214393.jpeg", "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg"]', 3, '2025-01-15'),

-- Property 16
('Minimalist Seafront Villa', 'Contemporary villa with direct sea access. This property exemplifies minimalist design with clean lines, neutral colors, and natural materials. Floor-to-ceiling windows frame perfect views of the Mediterranean. The outdoor area features a geometric pool, zen garden, and various lounging areas.', 'Altea', 'villa', 1750000, 1, 2023, 380, 1200, 5, 5, 1, 3, '["https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg", "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg", "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg", "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg"]', 1, '2025-02-15'),

-- Property 17
('Luxury Apartment in Historic Building', 'Elegant apartment situated in a beautifully restored historic building. This property combines period charm with contemporary comfort. Features include high ceilings, original moldings, herringbone parquet floors, and a balcony overlooking a charming plaza.', 'Alicante', 'apartment', 420000, 0, 2010, 115, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg", "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg", "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg", "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"]', 2, '2025-01-20'),

-- Property 18
('Traditional Finca with Equestrian Facilities', 'Impressive country estate with comprehensive equestrian facilities. This traditional finca offers ample accommodation in beautiful rural surroundings. The property includes stables, paddocks, riding arena, and extensive land, ideal for horse enthusiasts.', 'Benissa', 'finca', 1250000, 0, 1975, 320, 50000, 5, 3, 1, 5, '["https://images.pexels.com/photos/210531/pexels-photo-210531.jpeg", "https://images.pexels.com/photos/6510344/pexels-photo-6510344.jpeg", "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", "https://images.pexels.com/photos/416965/pexels-photo-416965.jpeg"]', 3, '2025-03-01'),

-- Property 19
('Modern Villa with Home Cinema', 'Contemporary villa featuring a state-of-the-art home cinema room. This luxury property offers high-tech entertainment solutions throughout, including smart home systems and integrated audio-visual equipment. The outdoor area includes an infinity pool with underwater speakers.', 'Javea', 'villa', 1450000, 1, 2024, 340, 1100, 4, 4, 1, 3, '["https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg", "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg", "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg", "https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg"]', 1, '2025-01-30'),

-- Property 20
('Seafront Apartment with Private Garden', 'Unique ground floor apartment offering direct access to the beach. This property features a private garden and terrace, rare for an apartment. The interior has been thoughtfully designed with high-quality finishes and a layout that maximizes sea views.', 'Denia', 'apartment', 550000, 0, 2018, 125, 200, 3, 2, 0, 2, '["https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg", "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg", "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg", "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"]', 2, '2025-02-10'),

-- Property 21
('Rustic Finca with Artist Studio', 'Charming finca with a separate artist studio, perfect for creative individuals. This property offers a peaceful retreat surrounded by nature. The main house retains many original features, while the studio provides an inspiring workspace with excellent natural light.', 'Moraira', 'finca', 675000, 0, 1980, 220, 8000, 3, 2, 1, 2, '["https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", "https://images.pexels.com/photos/2893177/pexels-photo-2893177.jpeg", "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg", "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg"]', 3, '2025-01-05'),

-- Property 22
('Luxury Villa with Indoor Pool', 'Exceptional villa featuring both indoor and outdoor swimming pools. This property offers year-round swimming in a luxurious setting. The interior spaces are generous and elegant, with high-end finishes throughout. Additional features include a sauna, steam room, and home gym.', 'Calpe', 'villa', 1850000, 0, 2017, 450, 1500, 5, 5, 1, 4, '["https://images.pexels.com/photos/8031867/pexels-photo-8031867.jpeg", "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg", "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg", "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"]', 1, '2025-02-20'),

-- Property 23
('Modern Apartment with Roof Terrace', 'Stylish apartment featuring a private roof terrace with 360-degree views. This contemporary property offers bright, open living spaces with high-quality finishes. The roof terrace includes an outdoor kitchen, dining area, and lounge space, perfect for entertaining.', 'Alicante', 'apartment', 375000, 1, 2022, 100, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg", "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg", "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg", "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"]', 2, '2025-03-10'),

-- Property 24
('Historic Finca with Watchtower', 'Unique finca featuring an ancient watchtower dating back to the 16th century. This historic property has been carefully restored to preserve its heritage while offering modern comforts. The grounds include mature gardens, a swimming pool, and various outbuildings.', 'Altea', 'finca', 980000, 0, 1600, 300, 12000, 4, 3, 1, 3, '["https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg", "https://images.pexels.com/photos/7214393/pexels-photo-7214393.jpeg", "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg", "https://images.pexels.com/photos/2962056/pexels-photo-2962056.jpeg"]', 3, '2025-01-15'),

-- Property 25
('Eco-Friendly Villa', 'Sustainable villa designed with eco-friendly principles. This property features solar panels, rainwater harvesting, natural insulation, and energy-efficient systems throughout. The architecture maximizes natural light and ventilation, reducing environmental impact while providing luxurious living.', 'Finestrat', 'villa', 1250000, 1, 2023, 290, 1000, 4, 3, 1, 2, '["https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg", "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg", "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"]', 1, '2025-02-05'),

-- Property 26
('Luxury Apartment with Spa Access', 'Premium apartment located in a resort-style complex with exceptional amenities. Residents enjoy access to a full-service spa, multiple pools, fitness center, and restaurant. The property offers elegant interiors, quality appliances, and a generous terrace with sea views.', 'Calpe', 'apartment', 465000, 0, 2019, 120, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg", "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"]', 2, '2025-01-25'),

-- Property 27
('Coastal Finca with Direct Sea Access', 'Rare opportunity to acquire a coastal finca with its own private cove. This exceptional property combines the tranquility of country living with direct sea access. The house offers traditional charm with comfortable modern amenities and breathtaking views.', 'Javea', 'finca', 1950000, 0, 1970, 280, 5000, 4, 3, 1, 3, '["https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg", "https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg", "https://images.pexels.com/photos/7031414/pexels-photo-7031414.jpeg", "https://images.pexels.com/photos/7214766/pexels-photo-7214766.jpeg"]', 3, '2025-03-05'),

-- Property 28
('Architect-Designed Villa with Art Gallery', 'Unique villa featuring a private art gallery space. This architectural masterpiece serves as both a comfortable home and a showcase for art collections. The interior spaces flow seamlessly from living areas to display areas, creating a harmonious environment for art and life.', 'Moraira', 'villa', 1550000, 0, 2020, 380, 1300, 4, 4, 1, 3, '["https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg", "https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg", "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg", "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg"]', 1, '2025-01-10'),

-- Property 29
('Seafront Apartment with Private Dock', 'Exclusive apartment in a marina development with its own private boat dock. This waterfront property offers direct access to the Mediterranean, perfect for boating enthusiasts. The apartment features high-end finishes, panoramic views, and a spacious terrace.', 'Denia', 'apartment', 625000, 1, 2022, 135, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg", "https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg", "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg", "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg"]', 2, '2025-02-15'),

-- Property 30
('Historic Finca with Wine Cellar', 'Magnificent finca with a professional wine cellar and tasting room. This historic property has been in the same family for generations and offers authentic Spanish character combined with modern luxury. The extensive grounds include ancient olive trees, vineyards, and formal gardens.', 'Teulada', 'finca', 1350000, 0, 1890, 320, 30000, 5, 4, 1, 4, '["https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg", "https://images.pexels.com/photos/2962056/pexels-photo-2962056.jpeg", "https://images.pexels.com/photos/7214766/pexels-photo-7214766.jpeg", "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"]', 3, '2025-01-20');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxurious Villa in Javea', 'Stunning sea view villa with modern architecture and high-end finishes. Features an infinity pool, outdoor kitchen, and landscaped gardens.', 'Javea', 'villa', 1250000, 0, 2015, 350, 1200, 4, 3, 1, 2, '["https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg", "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg", "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"]', 1, '2025-01-15');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Modern Villa in Moraira', 'Contemporary villa with panoramic sea views located in a prestigious area. Features smart home technology, heated pool, and guest apartment.', 'Moraira', 'villa', 1450000, 0, 2018, 400, 1000, 5, 4, 1, 3, '["https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg", "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg"]', 2, '2025-01-20');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Exclusive Seafront Villa', 'Beachfront luxury villa with direct sea access. Featuring an expansive terrace, infinity pool, and private garden. Impeccable design and premium materials throughout.', 'Altea', 'villa', 2200000, 0, 2020, 480, 1500, 6, 5, 1, 4, '["https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg", "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg", "https://images.pexels.com/photos/3935331/pexels-photo-3935331.jpeg"]', 3, '2025-02-01');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Newly Built Luxury Villa', 'Brand new designer villa with panoramic sea views. Features minimalist design, floor-to-ceiling windows, infinity pool, and home automation system.', 'Benissa', 'villa', 1850000, 1, 2024, 420, 1100, 5, 4, 1, 3, '["https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg", "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"]', 1, '2025-02-15');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Mediterranean Style Villa', 'Charming villa with traditional Spanish elements combined with modern comforts. Established garden with fruit trees, private pool, and outdoor dining area.', 'Denia', 'villa', 950000, 0, 2010, 320, 950, 4, 3, 1, 2, '["https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg", "https://images.pexels.com/photos/2227787/pexels-photo-2227787.jpeg"]', 2, '2025-02-20');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Panoramic Sea View Villa', 'Spectacular villa on elevated position with uninterrupted sea views. Featuring spacious terraces, infinity pool, and Mediterranean garden.', 'Calpe', 'villa', 1650000, 0, 2017, 380, 1050, 5, 4, 1, 3, '["https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg", "https://images.pexels.com/photos/2119024/pexels-photo-2119024.jpeg"]', 3, '2025-03-01');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Exclusive Golf Villa', 'Luxurious villa located in a prestigious golf resort. Features include private garden, swimming pool, and terrace overlooking the golf course.', 'Alicante', 'villa', 1350000, 0, 2016, 350, 1000, 4, 3, 1, 2, '["https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg", "https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg"]', 1, '2025-03-05');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Modern New Build Villa', 'Contemporary design villa with open plan living, high ceilings, and large windows. Private pool, garden, and roof terrace with sea views.', 'Javea', 'villa', 1550000, 1, 2024, 360, 900, 4, 4, 1, 2, '["https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg", "https://images.pexels.com/photos/4119820/pexels-photo-4119820.jpeg"]', 2, '2025-03-10');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Elegant Villa with Sea Views', 'Sophisticated villa featuring elegant interiors, spacious living areas, and a private garden with pool. Close to amenities and beaches.', 'Moraira', 'villa', 1250000, 0, 2014, 300, 850, 4, 3, 1, 2, '["https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg", "https://images.pexels.com/photos/2416472/pexels-photo-2416472.jpeg"]', 3, '2025-03-15');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Mountain View Villa', 'Stunning villa with panoramic mountain and countryside views. Features include spacious living areas, infinity pool, and landscaped gardens.', 'Finestrat', 'villa', 1150000, 0, 2015, 330, 950, 4, 3, 1, 2, '["https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg"]', 1, '2025-03-20');

-- Apartment Properties
INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Beachfront Apartment', 'Stunning first-line apartment with direct sea views. Recently renovated with high-quality finishes. Features a large terrace and community pool.', 'Calpe', 'apartment', 550000, 0, 2012, 120, NULL, 3, 2, 0, 1, '["https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg", "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg"]', 2, '2025-01-10');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Modern Penthouse with Sea Views', 'Exclusive penthouse featuring a spacious roof terrace with panoramic sea views. Open-plan living area, designer kitchen, and luxury finishes.', 'Altea', 'apartment', 620000, 0, 2018, 145, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"]', 3, '2025-01-25');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('New Build Seafront Apartment', 'Brand new apartment in a luxury development with direct beach access. Features include high-end appliances, community pools, and beautifully landscaped gardens.', 'Benidorm', 'apartment', 420000, 1, 2024, 110, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg", "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"]', 1, '2025-02-05');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Spacious Marina Apartment', 'Elegant apartment overlooking the marina. Features include a large terrace, modern finishes, and access to community facilities including pool and gym.', 'Denia', 'apartment', 380000, 0, 2016, 100, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg", "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg"]', 2, '2025-02-10');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Resort Apartment', 'High-end apartment in a prestigious resort with golf course. Features include spacious terrace, community pools, and lush gardens.', 'Alicante', 'apartment', 490000, 0, 2019, 125, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg", "https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg"]', 3, '2025-02-25');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Modern Town Center Apartment', 'Contemporary apartment in the heart of the town. Walking distance to all amenities, beaches, and restaurants. Featuring modern finishes and a balcony.', 'Javea', 'apartment', 320000, 0, 2017, 90, NULL, 2, 1, 0, 1, '["https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg", "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg"]', 1, '2025-03-05');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Beachside New Development', 'Brand new development just 200m from the beach. Contemporary design with high-quality materials. Community pools and landscaped gardens.', 'Moraira', 'apartment', 450000, 1, 2024, 115, NULL, 3, 2, 0, 1, '["https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg", "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg"]', 2, '2025-03-10');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Penthouse with Sea Views', 'Luxurious penthouse with panoramic sea views. Features include a spacious terrace, solarium, and high-end finishes throughout.', 'Benissa', 'apartment', 580000, 0, 2020, 140, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg", "https://images.pexels.com/photos/1795501/pexels-photo-1795501.jpeg"]', 3, '2025-03-15');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Seafront Apartment with Gardens', 'First-line apartment with direct beach access. Features include a large terrace, community pools, and beautifully maintained gardens.', 'Calpe', 'apartment', 495000, 0, 2015, 120, NULL, 3, 2, 0, 1, '["https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg"]', 1, '2025-03-20');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Golf Resort Apartment', 'Premium apartment in an exclusive golf resort. Features include terrace with golf views, high-quality finishes, and resort amenities including pools and restaurant.', 'Finestrat', 'apartment', 425000, 0, 2018, 110, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg", "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg"]', 2, '2025-03-25');

-- Finca Properties
INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Traditional Spanish Finca', 'Authentic Spanish finca set in a tranquil countryside location. Features include beamed ceilings, rustic elements, pool, and established gardens with fruit trees.', 'Javea', 'finca', 850000, 0, 1990, 280, 5000, 4, 3, 1, 3, '["https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg", "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg"]', 3, '2025-01-05');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Renovated Country Finca', 'Beautifully renovated finca combining traditional charm with modern comforts. Large plot with olive trees, pool, and stunning mountain views.', 'Denia', 'finca', 920000, 0, 1985, 300, 10000, 5, 3, 1, 4, '["https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg", "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"]', 1, '2025-01-30');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Country Estate', 'Impressive estate featuring a main house and guest accommodation. Set in extensive grounds with pool, tennis court, and magnificent views.', 'Benissa', 'finca', 1750000, 0, 2000, 450, 20000, 6, 5, 1, 5, '["https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg", "https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg"]', 2, '2025-02-08');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Charming Rural Finca', 'Beautiful country property with traditional Spanish features. Set in peaceful surroundings with pool, terraces, and magnificent views.', 'Moraira', 'finca', 750000, 0, 1993, 250, 8000, 4, 2, 1, 3, '["https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg", "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg"]', 3, '2025-02-12');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Modern Country Villa', 'Contemporary finca style property combining rustic elements with modern design. Set in beautiful landscaped gardens with pool and outdoor entertaining areas.', 'Altea', 'finca', 1250000, 0, 2010, 350, 5000, 5, 4, 1, 3, '["https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg", "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"]', 1, '2025-02-27');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Countryside Retreat', 'Secluded finca in a picturesque setting. Features include pool, outdoor kitchen, and panoramic mountain views. Perfect tranquil escape.', 'Finestrat', 'finca', 680000, 0, 1995, 220, 6000, 3, 2, 1, 2, '["https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg", "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg"]', 2, '2025-03-02');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Exclusive Wine Estate', 'Unique property featuring a traditional finca with wine production facilities. Set in extensive grounds with vineyard, olive grove, and stunning views.', 'Alicante', 'finca', 1950000, 0, 1988, 400, 30000, 5, 4, 1, 4, '["https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg", "https://images.pexels.com/photos/2834219/pexels-photo-2834219.jpeg"]', 3, '2025-03-08');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Renovated Finca with Sea Views', 'Beautifully restored finca with panoramic sea and mountain views. Features include infinity pool, summer kitchen, and extensive terraces.', 'Javea', 'finca', 1350000, 0, 1992, 320, 7000, 4, 3, 1, 3, '["https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg", "https://images.pexels.com/photos/2387674/pexels-photo-2387674.jpeg"]', 1, '2025-03-12');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Authentic Finca with Modern Updates', 'Traditional Spanish finca that has been tastefully modernized. Featuring exposed beams, stone walls, and modern amenities including pool and landscaped gardens.', 'Calpe', 'finca', 890000, 0, 1989, 270, 5500, 4, 3, 1, 3, '["https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg", "https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg"]', 2, '2025-03-18');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Eco-Friendly Country Estate', 'Sustainable finca with solar power and natural water source. Set in beautiful grounds with organic garden, fruit trees, and swimming pool.', 'Denia', 'finca', 980000, 0, 2005, 290, 12000, 4, 3, 1, 3, '["https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg", "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg"]', 3, '2025-03-22');


-- Additional 30 Properties
-- Villa Properties
INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Beachfront Luxury Villa', 'Exceptional beachfront villa with direct sea access. Featuring floor-to-ceiling windows, infinity pool that blends with the sea horizon, and state-of-the-art home automation system.', 'Javea', 'villa', 2450000, 0, 2019, 520, 1600, 6, 5, 1, 4, '["https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg", "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg", "https://images.pexels.com/photos/3935331/pexels-photo-3935331.jpeg"]', 1, '2025-01-12');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Contemporary Design Villa', 'Architectural masterpiece combining contemporary design with Mediterranean lifestyle. Features include home cinema, wine cellar, heated infinity pool, and panoramic sea views.', 'Altea', 'villa', 1950000, 0, 2021, 450, 1300, 5, 5, 1, 3, '["https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg", "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg"]', 2, '2025-01-18');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Eco Villa', 'Sustainable luxury villa designed with eco-friendly materials and energy-efficient systems. Features include solar panels, green roof, and organic garden, all with stunning sea views.', 'Benissa', 'villa', 1750000, 1, 2023, 380, 1050, 4, 4, 1, 2, '["https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg", "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"]', 3, '2025-01-24');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Exclusive Cliffside Villa', 'Stunning villa perched on a cliff with breathtaking panoramic views of the Mediterranean. Features minimalist design, glass walls, infinity pool, and private access to a secluded cove.', 'Calpe', 'villa', 2850000, 0, 2020, 550, 1800, 6, 6, 1, 4, '["https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg", "https://images.pexels.com/photos/2119024/pexels-photo-2119024.jpeg"]', 1, '2025-02-03');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('New Build Smart Villa', 'State-of-the-art new build villa with complete home automation, security systems, and energy efficiency. Features include indoor/outdoor living spaces, heated pool, and Mediterranean garden.', 'Moraira', 'villa', 1680000, 1, 2024, 400, 1100, 5, 4, 1, 3, '["https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg", "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"]', 2, '2025-02-09');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Tranquil Garden Villa', 'Peaceful villa set in lush tropical gardens with mature palm trees and exotic plants. Features include outdoor living spaces, large pool, and guest apartment.', 'Denia', 'villa', 1150000, 0, 2014, 350, 1500, 4, 3, 1, 3, '["https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg", "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg"]', 3, '2025-02-17');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Executive Sea View Villa', 'Prestigious villa with sleek modern design and premium finishes throughout. Features include gym, sauna, wine cellar, and infinity pool overlooking the Mediterranean.', 'Javea', 'villa', 2350000, 0, 2022, 520, 1400, 5, 5, 1, 4, '["https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg", "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg"]', 1, '2025-02-22');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Mediterranean Oasis Villa', 'Elegant villa surrounded by extensive gardens with Mediterranean plants, fruit trees, and water features. The property includes a large pool, outdoor kitchen, and entertainment areas.', 'Benidorm', 'villa', 1280000, 0, 2015, 340, 1200, 4, 3, 1, 2, '["https://images.pexels.com/photos/2227787/pexels-photo-2227787.jpeg", "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"]', 2, '2025-03-04');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Designer Villa with Sea Access', 'Architectural masterpiece with private sea access. Features include floating staircase, panoramic windows, and multiple terraces offering spectacular sea views.', 'Altea', 'villa', 3100000, 0, 2021, 600, 2000, 7, 6, 1, 5, '["https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg", "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"]', 3, '2025-03-09');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Mountain View Luxury Villa', 'Spectacular villa with dual mountain and sea views. Features include open plan living areas, landscaped gardens with pool, and outdoor entertainment areas.', 'Finestrat', 'villa', 1220000, 0, 2017, 320, 950, 4, 3, 1, 2, '["https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg", "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"]', 1, '2025-03-14');

-- Apartment Properties
INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Premium Beach Apartment', 'High-end apartment just steps from the beach. Features include designer furniture, top-quality appliances, and a large terrace with sea views.', 'Javea', 'apartment', 650000, 0, 2019, 130, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg"]', 2, '2025-01-15');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Resort Penthouse', 'Exclusive penthouse in a 5-star resort with panoramic sea views. Features include large roof terrace, jacuzzi, and access to premium resort facilities.', 'Calpe', 'apartment', 750000, 0, 2020, 150, NULL, 3, 3, 0, 2, '["https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg", "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"]', 3, '2025-01-21');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Seafront Modern Apartment', 'Contemporary apartment with direct sea views in a new development. Features include floor-to-ceiling windows, smart home technology, and community infinity pool.', 'Altea', 'apartment', 580000, 1, 2024, 125, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"]', 1, '2025-01-28');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Exclusive Golf Apartment', 'Luxury apartment overlooking a championship golf course. Features include large terrace, high-end finishes, and access to community pools and tennis courts.', 'Alicante', 'apartment', 460000, 0, 2018, 115, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg", "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg"]', 2, '2025-02-04');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Beachside Duplex Apartment', 'Spacious duplex apartment just 100m from the beach. Features include a private garden, multiple terraces, and communal pools and gardens.', 'Moraira', 'apartment', 520000, 0, 2017, 140, NULL, 3, 2, 0, 2, '["https://images.pexels.com/photos/1795501/pexels-photo-1795501.jpeg", "https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg"]', 3, '2025-02-11');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('New Build Luxury Apartment', 'Brand new apartment in an exclusive development with sea views. Features high-end appliances, underfloor heating, and community facilities including gym and spa.', 'Benissa', 'apartment', 490000, 1, 2024, 120, NULL, 3, 2, 0, 1, '["https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg", "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg"]', 1, '2025-02-18');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Marina View Apartment', 'Elegant apartment with views over the marina. Features include a spacious terrace, modern kitchen, and access to community pools and gardens.', 'Denia', 'apartment', 430000, 0, 2016, 105, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg", "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg"]', 2, '2025-02-24');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Panoramic Sea View Penthouse', 'Spectacular penthouse with 360-degree views of the sea and mountains. Features include a wraparound terrace, solarium, and high-end finishes throughout.', 'Javea', 'apartment', 685000, 0, 2021, 160, NULL, 3, 3, 0, 2, '["https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg", "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg"]', 3, '2025-03-02');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Town Center Luxury Apartment', 'Stylish apartment in a prime location in the town center. Walking distance to all amenities, restaurants, and beaches. Recently renovated with modern finishes.', 'Calpe', 'apartment', 380000, 0, 2015, 95, NULL, 2, 2, 0, 1, '["https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg", "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg"]', 1, '2025-03-07');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Beachfront Resort Apartment', 'Luxury apartment in a premium beachfront resort with direct beach access. Features include terrace with sea views, high-end appliances, and resort facilities.', 'Benidorm', 'apartment', 540000, 0, 2019, 130, NULL, 3, 2, 0, 1, '["https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg", "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"]', 2, '2025-03-11');

-- Finca Properties
INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Historic Finca with Sea Views', 'Beautifully restored 18th century finca with panoramic sea and mountain views. Features include original stone walls, wooden beams, modern amenities, and extensive grounds.', 'Javea', 'finca', 1250000, 0, 1780, 320, 15000, 5, 4, 1, 4, '["https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg", "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg"]', 3, '2025-01-10');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Countryside Estate', 'Magnificent country estate featuring a main house and multiple guest cottages. Set in expansive grounds with infinity pool, tennis court, and equestrian facilities.', 'Benissa', 'finca', 2850000, 0, 1995, 650, 50000, 8, 7, 1, 6, '["https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg", "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg"]', 1, '2025-01-16');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Modern Rustic Finca', 'Contemporary interpretation of a traditional finca, combining rustic elements with modern architecture. Features include spacious interiors, infinity pool, and stunning views.', 'Altea', 'finca', 1450000, 0, 2012, 380, 8000, 5, 4, 1, 3, '["https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg", "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg"]', 2, '2025-01-23');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Organic Farm Estate', 'Self-sufficient finca with working organic farm, olive grove, and fruit orchards. Features include solar power, natural water source, and panoramic countryside views.', 'Denia', 'finca', 1150000, 0, 1992, 300, 25000, 4, 3, 1, 4, '["https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg", "https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg"]', 3, '2025-01-29');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Mountain Retreat Finca', 'Secluded finca set in the mountains with breathtaking views of the valley and Mediterranean sea. Features include pool, summer kitchen, and hiking trails.', 'Finestrat', 'finca', 925000, 0, 1998, 280, 10000, 4, 3, 1, 3, '["https://images.pexels.com/photos/2834219/pexels-photo-2834219.jpeg", "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"]', 1, '2025-02-05');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Wine Estate', 'Prestigious wine-producing estate featuring a beautifully renovated main house, guest accommodation, and wine production facilities. Set in extensive vineyards.', 'Alicante', 'finca', 3500000, 0, 1985, 700, 100000, 10, 8, 1, 8, '["https://images.pexels.com/photos/2387674/pexels-photo-2387674.jpeg", "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg"]', 2, '2025-02-12');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Mediterranean Garden Finca', 'Charming finca surrounded by mature Mediterranean gardens with olive trees, citrus groves, and vibrant flowering plants. Features include pool, terraces, and outdoor living spaces.', 'Moraira', 'finca', 895000, 0, 1994, 260, 7000, 4, 3, 1, 3, '["https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg", "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg"]', 3, '2025-02-19');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Renovated Historic Finca', 'Meticulously restored 19th century finca combining original features with contemporary comfort. Features include walled garden, pool, and stunning countryside views.', 'Javea', 'finca', 1650000, 0, 1850, 400, 12000, 6, 5, 1, 4, '["https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg", "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg"]', 1, '2025-02-26');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Countryside Artist Retreat', 'Unique finca that has been used as an artists studio and residence. Features include large open spaces with natural light, separate workshop, and inspiring views.', 'Calpe', 'finca', 780000, 0, 1991, 240, 6000, 3, 2, 1, 2, '["https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg", "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg"]', 2, '2025-03-05');

INSERT INTO properties (title, description, location, type, price, newbuild, build, area, plot, bedrooms, bathrooms, private_pool, parking, images, agent_id, created) VALUES 
('Luxury Equestrian Estate', 'Exceptional finca designed for horse lovers with stables, paddocks, and riding arena. The main house features luxurious accommodations with panoramic views.', 'Benissa', 'finca', 2400000, 0, 2008, 450, 40000, 6, 5, 1, 6, '["https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg", "https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg"]', 3, '2025-03-13');


