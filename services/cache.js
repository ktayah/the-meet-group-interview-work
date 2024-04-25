
const NodeCache = require( "node-cache" );
const cache = new NodeCache();

const get = (id) => {
    return cache.get(id);
}

const set = (id, value, ttl) => {
    cache.set(id, value);
    if (ttl) {
        cache.ttl(id, ttl);
    }
}

const del = (id) => {
    cache.del(id);
}

const del_all = () => {
    cache.flushAll();
}

module.exports = {get, set, del, del_all}