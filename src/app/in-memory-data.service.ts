import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const roles = [
      { id: 11, name: 'Administrator' },
      { id: 12, name: 'Manager' },
      { id: 13, name: 'Operator' },
      { id: 14, name: 'Secretary' },
      { id: 15, name: 'Owner' },
      { id: 16, name: 'Student' },
      { id: 17, name: 'Teacher' },
      { id: 18, name: 'Professor' },
      { id: 19, name: 'Engineer' },
      { id: 20, name: 'Builder' }
    ];
    const users = [
      { id: 11, name: 'LRS', email: 'leorenis@test.com' },
      { id: 12, name: 'LAIZA', email: 'laiza@test.com' },
      { id: 13, name: 'MARIA', email: 'maria@test.com' },
      { id: 14, name: 'JOAO', email: 'joao@test.com' }
    ];
    return {roles, users};
  }
}