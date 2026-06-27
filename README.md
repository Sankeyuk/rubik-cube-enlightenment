# Cube, Find your Seat · Website

This is the Astro implementation workspace for `Cube, Find your Seat` / `帮魔方找到座位`.

The project specs live one level above this folder:

- `../BRIEF.md`
- `../DESIGN.md`
- `../ARCHITECTURE.md`
- `../AGENTS.md`
- `../iterations/v1-launch/PRD.md`
- `../iterations/v1-launch/CONTENT.md`

## Development Order

Build mobile first, then enhance desktop.

The primary use case is a parent and child using a phone beside a physical cube. Every page and component should work at narrow widths before adding desktop layout improvements.

## Source Structure

```text
src/
  components/
    layout/
    learning/
    ui/
  content/
  data/
  layouts/
  pages/
  styles/
```

## Current Shipped State

As of 2026-06-27, the website has a lightweight 方块村 / animal skin layer:

- `/picturebook` renders the 10 official vertical picturebook pages.
- Home links to the picturebook and shows the six animal avatars while keeping the main CTA on `/levels`.
- `/levels` cards show a primary animal, optional helper animal, and one short hint per level.
- `/levels/fake-cross` and `/levels/first-layer-corners` contain the first `AnimalHint` detail-page samples.
- `/materials` shows picturebook, sticker, avatar-sticker, and printable-material directions.

This layer should stay secondary to the tutorial. Do not place animal artwork over formulas, arrows, hand diagrams, or lesson PNGs.

## Commands

Use Corepack pnpm if global `pnpm` is unavailable:

```sh
corepack pnpm install
corepack pnpm dev
corepack pnpm build
```

## Constraints

- Do not add login, community features, comments, complex 3D, or animation-heavy UI.
- Do not invent cube teaching details. Leave draft content as draft until confirmed.
- Keep content schema and routes aligned with `../ARCHITECTURE.md`.
- Keep visual implementation aligned with `../DESIGN.md`.
