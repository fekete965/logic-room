import { injectable, inject } from 'inversify'

@injectable()
export class Config {
  constructor() {
    this.apiUrl = 'https://api.logicroom.co/secure-api/pete+dnd@logicroom.co'
  }
}
