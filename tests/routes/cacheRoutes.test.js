const request = require('supertest');
const app = require("../../app");
const cache = require("../../src/services/cache");
const helpers = require("../../src/utils/testHelpers");

afterEach(() => {
    cache.del_all();
});

describe("GET /api/v1/cache/:id", () => {
    test("returns value when exists", () => {
        cache.set("key", "value");

        return request(app)
        .get("/api/v1/cache/key")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
            expect(res.body.result).toEqual("value")
        });
    });

    test("returns 404 when not found", async () => {
        const response = await request(app)
        .get("/api/v1/cache/key")
        .expect(404);
        
        expect(response.body.error).toBe("not found");
    });
});

describe("POST /api/v1/cache", () => {
    test("adds key-value pair with ttl to cache", async () => {
        await request(app)
        .post("/api/v1/cache")
        .send({id: "name", value: "John", ttl: 0.1})
        .expect(201)

        expect(cache.get("name")).not.toBeUndefined();
        await helpers.sleep(100);
        expect(cache.get("name")).toBeUndefined();
    });
});

describe("DELETE /api/v1/cache/:id", () => {
    test("deletes key-value pair from cache", async () => {
        cache.set("key", "value");

        await request(app)
        .delete("/api/v1/cache/key")
        .expect(200)

        expect(cache.get("key")).toBeUndefined();
    });
});