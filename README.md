# The Meet Group - Take Home Interview Assignment

This is an example of a simple in-memory cache API which contains three routes:

- Add a key-value pair into the in-memory store with the option of using a ttl
- Fetch a key-value pair from the in-memory store
- Delete a key-value pair from the in-memory store

The main application can be found under src/ with the routes being under src/routes/, the caching service under src/services/, and the main entrypoint being app.js with some boilerplate in bin/www

## Info on routes provided

Like mentioned above, there are three routes:

- `GET /api/v1/cache/:id`: allows for fetching a cached item with the `:id` being replaced by the id of the item you'd like to retrieve
- `POST /api/v1/cache`: allows for adding a cached item to the memory-store with the `id`, `value`, and the optional `ttl` being provided in the request body in JSON format
- `DELETE /api/v1/cache/:id`: allows for deleting a cached item by the `:id` provided

## Running this application

1. Run npm install to install deps
2. Run npm start to run application
3. Or run npm test if you'd like to run the tests instead

Made by Kevin Tayah
