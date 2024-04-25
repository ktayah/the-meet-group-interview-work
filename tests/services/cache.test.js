const cache = require("../../services/cache");

afterEach(() => {
    cache.del_all();
});

describe("cache.get", () => {
    test("returns undefined when key does not exist", () => {
        expect(cache.get("non-existent id")).toBeUndefined();
    });

    test("returns value when key exists", () => {
        const id = "id";
        const value = "test_value";
        cache.set(id, value);

        expect(cache.get(id)).toBe(value);
    });
});

describe("cache.set", () => {
    test("adds key-value pair into cache", () => {
        const id = "id";
        cache.set(id, "test_value");

        expect(cache.get(id)).not.toBeUndefined();
    });

    test("adds key-value pair into cache with a ttl", async () => {
        // Set ttl to 100 ms
        const id = "id";
        cache.set(id, "test_value", 0.1);

        expect(cache.get(id)).not.toBeUndefined();

        // Wait for ttl to be invoked
        await sleep(100);
        expect(cache.get(id)).toBeUndefined();
    });
});

describe("cache.del", () => {
    test("deletes key-value pair from cache", () => {
        const id = "some-id";
        cache.set(id, "value");

        expect(cache.get(id)).toBeTruthy();
        
        cache.del(id)
        expect(cache.get(id)).toBeUndefined();
    });
});

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}