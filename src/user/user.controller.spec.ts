import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = app.get<UserController>(UserController);
  });

  describe('findAllUsers', () => {
    it('should return an array of users', () => {
      const result = controller.findAllUsers();
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toContain('Mohamed');
      expect(result).toContain('Sawah');
    });
  });
});


/*================================== Test documentation ==================================

This test uses the Test and TestingModule classes from NestJS to create a testing module,
 and then retrieves an instance of the UserController from the module using the app.get() method.

The describe() function is used to group the tests for the UserController together,
 and the beforeEach() function is used to set up the controller instance before each test.

The it() function is used to define a specific test case, in this case for the findAllUsers() method.
 The expect() function is used to make assertions about the result of the method call, checking that it is defined,
  is an array, and contains the expected user names.

This test assumes that the UserController is correctly configured and functioning as expected,
 and only tests the behavior of the findAllUsers() method.

========================================================================================*/
