# kyrelldixon.com

Personal site of Kyrell Dixon. Blog, notes, and experiments.

## Stack

- [Astro 6](https://astro.build/)
- [Bun](https://bun.sh/) (runtime + package manager)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Solid.js (for a few interactive islands)
- Deployed on [Cloudflare Workers + Static Assets](https://developers.cloudflare.com/workers/static-assets/)

## Local dev

```bash
bun install
bun dev            # http://localhost:4321
bun run build
bun run cf:dev     # build + serve via wrangler (static assets over Workers)
bun run deploy     # build + wrangler deploy
```

## Attribution

Template forked from [tailwind-astro-starting-blog](https://github.com/wanoo21/tailwind-astro-starting-blog) by [Ion Prodan](https://github.com/wanoo21) (MIT). `LICENSE` preserved.

## License

MIT
