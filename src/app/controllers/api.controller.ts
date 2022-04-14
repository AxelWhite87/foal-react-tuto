import { ApiInfo, ApiServer,
  Context, controller, Get, HttpResponseOK } from '@foal/core';
import { StoriesController } from './api';

@ApiInfo({
  title: 'Application API',
  version: '1.0.0'
})
@ApiServer({
  url: '/api'
})

export class ApiController {
  subControllers = [
    controller('/stories', StoriesController)
  ];


  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

}
