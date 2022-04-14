import { Context, controller, Get, HttpResponseOK } from '@foal/core';
import { StoriesController } from './api';

export class ApiController {
  subControllers = [
    controller('/stories', StoriesController)
  ];


  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

}
