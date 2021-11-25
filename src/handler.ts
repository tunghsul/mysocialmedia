import { Request, Router } from 'itty-router'

import { getCommentsHandler, getPostsHandler, newCommentHandler, newPostsHandler, optionHandler } from './handlers/posts'

const router = Router()

router
  .options('/api/posts', optionHandler)
  .options('/api/comments', optionHandler)
  .get('/api/posts', getPostsHandler)
  .post('/api/posts', newPostsHandler)
  .get('/api/comments', getCommentsHandler)
  .post('/api/comments', newCommentHandler)
  .get('*', () => new Response('Not found', { status: 404 }))

export const handleRequest = (request: Request): Promise<Response> | Response => router.handle(request)
