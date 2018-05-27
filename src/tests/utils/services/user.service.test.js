import { userService } from '../../../utils/services/user.service';

const fakeUser = {
  id: Math.round(Math.random() * 10) + 10,
  name: "John Snow",
  username: "jsnow",
  email: "john.snow@gmail.com",
  address: {
    street: "Yellow",
    suite: "something",
    city: "Winterfell",
    zipcode: "029312",
    geo: {
      lat: "29",
      lng: "31"
    }
  },
  phone: "1223 123098",
  website: "dwarfare.org",
  company: {
    name: "Stark",
    catchPhrase: "Winter is coming",
    bs: "xyz"
  }
}

describe('GET method', () => {
  test('should load all users', async () => {
    const data = await userService.getUser();
    expect(data).toBeDefined();
    expect(data).toHaveLength(10);
  });

  test('should load single user', async () => {
    const data = await userService.getUser(1);
    expect(data).toBeDefined();
    expect(data.name).toEqual('Leanne Graham');
  })
});

describe('POST method', () => {
  test('should post new user', async () => {
    const data = await userService.createUser(fakeUser);
    expect(data).toBeDefined();
    expect(data).toMatchObject(fakeUser);
  });
});

describe('PUT method', () => {
  test('should update single user', async () => {
    const ID = 2;
    fakeUser.id = ID;
    const data = await userService.updateUser(ID, fakeUser);
    expect(data).toBeDefined();
    expect(data).toMatchObject(fakeUser);
  })
});

describe('DELETE method', () => {
  test('should delete single user', async () => {
    const data = await userService.deleteUser(1);
    expect(data).toMatchObject({});
  })
});