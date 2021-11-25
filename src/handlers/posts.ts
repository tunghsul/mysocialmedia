import { uuid } from '@cfworker/uuid'

declare const MY_KV: KVNamespace
declare const COMMENT_KV: KVNamespace

export const getPostsHandler = async (): Promise<Response> => {
  const { keys } = await MY_KV.list()

  const posts = []
  for (const k of keys) {
    const value = await MY_KV.get(k.name)
    if (value) {
      const data = JSON.parse(value)
      data['id'] = k.name
      posts.push(data)
    }
  }

  const body = JSON.stringify({ posts })
  const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }
  return new Response(body, { headers })
}

export const optionHandler = (): Response => {
  const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }
  return new Response('', { headers })
}

export const newPostsHandler = async (request: Request): Promise<Response> => {
  const body = await request.json()
  const data = JSON.parse(JSON.stringify(body))
  const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }

  const { title, username, content } = data
  if (!title || !username || !content) {
    return new Response(JSON.stringify({ message: 'bad request' }), {
      headers,
      status: 400,
    })
  }

  let id = uuid()

  while (MY_KV.get(id) == null) {
    id = uuid()
  }

  await MY_KV.put(id, JSON.stringify(body))

  return new Response(JSON.stringify({ message: 'success', id }), { headers })
}

export const getCommentsHandler = async (): Promise<Response> => {
  const { keys } = await COMMENT_KV.list()

  const comments = []
  for (const k of keys) {
    const value = await COMMENT_KV.get(k.name)
    if (value) {
      const data = JSON.parse(value)
      data['id'] = k.name
      comments.push(data)
    }
  }

  const body = JSON.stringify({ comments })
  const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }
  return new Response(body, { headers })
}

export const newCommentHandler = async (
  request: Request,
): Promise<Response> => {
  const body = await request.json()
  const data = JSON.parse(JSON.stringify(body))
  const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }

  const { postId, username, content } = data
  if (!postId || !username || !content) {
    return new Response(JSON.stringify({ message: 'bad request' }), {
      headers,
      status: 400,
    })
  }

  let id = uuid()

  while (COMMENT_KV.get(id) == null) {
    id = uuid()
  }

  await COMMENT_KV.put(id, JSON.stringify(body))

  return new Response(JSON.stringify({ message: 'success' }), { headers })
}
