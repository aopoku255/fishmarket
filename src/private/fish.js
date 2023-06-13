import { faker } from "@faker-js/faker";

const fishes = [];

const status = ["Completed", "Pending", "ongoing"];

for (let i = 0; i < 100; i++) {
  fishes.push({
    category: faker.animal.fish(),
    image: faker.image.urlLoremFlickr({ category: "fish" }),
    location: faker.location.city(),
    name: faker.person.fullName(),
    code: `NT ${faker.number.int({ min: 100, max: 999 })}`,
    quantity: faker.number.int({ min: 1000, max: 99999 }),
    purchase: faker.number.int({ min: 1000, max: 99999 }),
    remaining: faker.number.int({ min: 1000, max: 99999 }),
    amount: faker.number.int({ min: 1000, max: 99999 }),
    status: status[faker.number.int({ min: 0, max: 2 })],
  });
}

export default fishes;
