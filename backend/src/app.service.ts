import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, node enviroment: ' + process.env.NODE_ENV;
  }
}
