# real estate

This is a sample project using the latest tech stack.

- nextjs for client and server
- zod for schema validation and parsing
- react-query for request handling and caching
- tailwind v4 for styling (welcome to class hell)
- sqlite on backend side for storing data
- AI to get database filled with fake data
- motion for fancy animations

## Design

The design is related to what most of the real estate agency website offer.

## Screenshot

![alt text](screens/overview.png)

### build

All the data is fake and not related to any existing estate. The images are taken from unsplash using the ![lite dataset](https://github.com/unsplash/datasets/tree/master).
This data is NOT in the repo. Make sure you download keywords.tsv and photos.tsv and put it into database/unsplash-data.

To generate the database with fakedata please run

```
# move to application folder
cd real-estate

# create initial database (if already existing use npm run db:all)
npm run db:create
npm run db:fill

# start dev server
npm run dev
```

### open todos

here is a list of open todos grouped by section

##### general

- error handling
- unit tests and integration tests with playwright
- animations using motion
- add all missing pages like
  - about us
  - imprint
  - data policy

##### resultlist

- infinite scroll instead of pagintaion

##### details

- related properties
- with map
- sending with error or success message
- add view all photos

##### compare

- comparison of two properties

##### administration

- authentication
- admin interface for adding new properties
