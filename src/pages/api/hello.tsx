import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(_req: NextRequest) {
  return new Response(
    JSON.stringify({
      name: 'Jim Halpert',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
