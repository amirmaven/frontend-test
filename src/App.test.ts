import axios from "axios";
import { describe, expect, it } from "vitest"
import MockAdapter from "axios-mock-adapter";

function route (path = '') {
    return typeof path === 'string'
      ? new RegExp(path.replace(/:\w+/g, '[^/]+'))
      : path
}

const mock = new MockAdapter(axios);
mock.onGet("/offices").reply(200, {
    data: [{
        id: 1,
        title: "Go-Jek",
        address: "5260 Donec St.",
        name: "Hellena John",
        job: "Software Tester",
        email: "georgia.young@gmail.com",
        phone: "(808) 555-0111",
        },
        {
        id: 2,
        title: "Tokopedia",
        address: "7526 Erat. Rd.",
        name: "Tony Stark",
        job: "Iron Man",
        email: "tonystark@gmail.com",
        phone: "(808) 777-7777",
        },
        {
        id: 3,
        title: "Bukalapak",
        address: "P.O. Box 959, 8061 Tellus Av.",
        name: "Peter Parker",
        job: "Spider-Man",
        email: "spiderman@gmail.com",
        phone: "(999) 555-0111",
        },
        {
        id: 4,
        title: "Go-Car",
        address: "8467 Elementum Av.",
        name: "Bruce Banner",
        job: "Hulk",
        email: "brucebanner@gmail.com",
        phone: "(222) 123-0111",
        }
    ],
});

mock.onGet("/offices/1").reply(200, {
    data: {
        id: 1,
        title: "Go-Jek",
        address: "5260 Donec St.",
        name: "Hellena John",
        job: "Software Tester",
        email: "georgia.young@gmail.com",
        phone: "(808) 555-0111",
    }
});

mock.onPost("/offices",{
    title: "Go-Clean",
    address: "8468 Elementum Av.",
    name: "Sam Backman",
    job: "holywings",
    email: "brucebanner@gmail.com",
    phone: "(222) 123-0111",
    }
).reply(201, {
    data: {
        id: 5,
        title: "Go-Clean",
        address: "8468 Elementum Av.",
        name: "Sam Backman",
        job: "holywings",
        email: "brucebanner@gmail.com",
        phone: "(222) 123-0111",
    }
});

mock.onPut("/offices/5",{
    title: "Go-Food",
    address: "8468 Elementum Av.",
    name: "Sam Backman",
    job: "holywings",
    email: "brucebanner@gmail.com",
    phone: "(222) 123-0111",
}).reply(200, {
    data: {
        id: 5,
        title: "Go-Food",
        address: "8468 Elementum Av.",
        name: "Sam Backman",
        job: "holywings",
        email: "brucebanner@gmail.com",
        phone: "(222) 123-0111",
    }
});

mock.onDelete("/offices/5").reply(200, {
    message: "success delete office"
});

describe("Simple working test axios mock adapter", () => {
    it("get offices", () => {
        axios.get("/offices").then(function (response) {
            expect(response.data.data.length).toBe(4);
        });
    });
    it("get office 1", () => {
        axios.get("/offices/1").then(function (response) {
            expect(response.data.data).toStrictEqual({
                id: 1,
                title: "Go-Jek",
                address: "5260 Donec St.",
                name: "Hellena John",
                job: "Software Tester",
                email: "georgia.young@gmail.com",
                phone: "(808) 555-0111",
            });
        });
    });
    it("post office", () => {
        axios.post("/offices",{
            title: "Go-Clean",
            address: "8468 Elementum Av.",
            name: "Sam Backman",
            job: "holywings",
            email: "brucebanner@gmail.com",
            phone: "(222) 123-0111",
        }).then(function(response){
            expect(response.data.data).toStrictEqual({
                id: 5,
                title: "Go-Clean",
                address: "8468 Elementum Av.",
                name: "Sam Backman",
                job: "holywings",
                email: "brucebanner@gmail.com",
                phone: "(222) 123-0111",
            });
        })
    });
    it("edit office", () => {
        axios.put("/offices/5",{
            title: "Go-Food",
            address: "8468 Elementum Av.",
            name: "Sam Backman",
            job: "holywings",
            email: "brucebanner@gmail.com",
            phone: "(222) 123-0111",
        }).then(function(response){
            expect(response.data.data).toStrictEqual({
                id: 5,
                title: "Go-Food",
                address: "8468 Elementum Av.",
                name: "Sam Backman",
                job: "holywings",
                email: "brucebanner@gmail.com",
                phone: "(222) 123-0111",
            });
        })
    });
    it("delete office",() => {
        axios.delete("/offices/5").then(function(response){
            expect(response.data.message).toBe("success delete office");
        })
    });
});