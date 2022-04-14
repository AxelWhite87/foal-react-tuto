import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';
import { Story, User } from '../../entities';

export class StoriesController {
  @Get()
  @ValidateQueryParam('authorId', { type: 'number' }, { required: false })
  async readStories(ctx: Context){
    const authorId = ctx.request.query.authorId as number|undefined;
    let queryBuilder = Story
        .createQueryBuilder('story')
        .leftJoinAndSelect('story.author', 'author')
        .select([
            'story.id',
            'story.title',
            'story.link',
            'author.id',
            'author.name'
        ]);

    if (authorId !== undefined){
      queryBuilder = queryBuilder.where('author.id = :authorId', {authorId})
    }
    const stories = await queryBuilder.getMany();
    return new HttpResponseOK(stories);
  }
}
