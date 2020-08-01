import { userService } from '../../../utils/services/user.service';

const fakeUser = {
  name: 'John Snow',
  username: 'jsnow',
  email: 'john.snow@gmail.com',
  address: {
    street: 'Yellow',
    suite: 'something',
    city: 'Winterfell',
    zipcode: '029312',
    geo: {
      lat: '29',
      lng: '31',
    },
  },
  phone: '1223 123098',
  website: 'dwarfware.org',
  company: {
    name: 'Stark',
    catchPhrase: 'Winter is coming',
    bs: 'xyz',
  },
};

describe('User service methods', () => {
  describe('login method', () => {
    test('should response with status correct while credentials are correct', async () => {
      const user = 'root';
      const password = 'root';
      const { status } = await userService.login(user, password);
      expect(status).toBe('correct');
    });

    test('should response with status invalid while credentials are invalid', async () => {
      const user = 'john';
      const password = 'snow';
      const { status } = await userService.login(user, password);
      expect(status).toBe('invalid');
    });
  });

  describe('GET method', () => {
    test('should load all users', async () => {
      const data = await userService.getUser();
      expect(data).toBeDefined();
      expect(data).toHaveLength(10);
    });

    test('should load single user', async () => {
      const expectedUser = 'Leanne Graham';
      const data = await userService.getUser(1);
      expect(data).toBeDefined();
      expect(data.name).toEqual(expectedUser);
    });
  });

  describe('POST method', () => {
    test('should create new user', async () => {
      const data = await userService.createUser(fakeUser);
      expect(data).toBeDefined();
      expect(data).toMatchObject(fakeUser);
      expect(data.id).toBe(11);
    });
  });

  describe('PUT method', () => {
    test('should update single user', async () => {
      const id = 2;
      const fakeUserWithId = { ...fakeUser, id };
      const data = await userService.updateUser(fakeUserWithId);
      expect(data).toBeDefined();
      expect(data).toMatchObject(fakeUserWithId);
    });
  });

  describe('DELETE method', () => {
    test('should delete single user', async () => {
      const id = 5;
      const data = await userService.deleteUser(id);
      expect(data).toMatchObject({});
    });
  });
});
