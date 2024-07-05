import User from "../src/models/User";

describe("User", () => {
  test("should create a user with the given name", () => {
    const name = "John Doe";
    const user = new User(name);

    expect(user.name).toBe(name);
  });
});
