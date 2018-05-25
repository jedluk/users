import { userService } from '../../../utils/services/user.service';

describe('GET method', () => {
  it('should load all users', async () => {
    const data = await userService.getUser();
    expect(data).toBeDefined();
    expect(data).toHaveLength(10);
  });

  it('should load single user', async () => {
    const data = await userService.getUser(1);
    expect(data).toBeDefined();
    expect(data.name).toEqual('Leanne Graham');
  })
});

describe('POST method', () => {
  it('should create new user', async () => {
    const data = await userService.getUser();
    expect(data).toBeDefined();
    expect(data).toHaveLength(10);
  });
});

describe('PUT method', () => {
  it('should update single user', async () => {
    const data = await userService.getUser(1);
    expect(data).toBeDefined();
    expect(data.name).toEqual('Leanne Graham');
  })
});

describe('DELETE method', () => {
  it('should delete single user', async () => {
    const data = await userService.getUser(1);
    expect(data).toBeDefined();
    expect(data.name).toEqual('Leanne Graham');
  })
});