import { serve } from 'https://deno.land/std@0.188.0/http/server.ts'

const handler = async (_request: Request): Promise<Response> => {
  // Generate some garbage on the heap
  const _ = {
    timestamp: new Date().getTime(),
  }

  return new Response(JSON.stringify({ hello: 'world' }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}

serve(handler, { port: Deno.env.get('PORT') })
