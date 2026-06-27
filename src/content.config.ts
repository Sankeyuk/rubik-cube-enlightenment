import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const diagramSlotSchema = z.object({
  label: z.string(),
  purpose: z.string(),
  ratio: z.string(),
  size: z.string(),
  status: z.enum(["placeholder", "needed", "ready"]).default("placeholder"),
});

const lessonImageSchema = z.object({
  label: z.string(),
  src: z.string().optional(),
  filename: z.string().optional(),
  alt: z.string(),
  ratio: z.string().optional(),
  status: z.enum(["ready", "needed", "placeholder"]).default("ready"),
});

const lessonBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  eyebrow: z.string().optional(),
  kind: z
    .enum(["goal", "observe", "formula", "states", "cases", "pass", "next"])
    .default("observe"),
  body: z.array(z.string()).optional(),
  formula: z.string().optional(),
  videoCue: z.string().optional(),
  qa: z
    .object({
      question: z.string(),
      answer: z.string(),
    })
    .optional(),
  mnemonic: z.string().optional(),
  notes: z.array(z.string()).optional(),
  button: z.string().optional(),
  buttonHref: z.string().optional(),
  images: z.array(lessonImageSchema).optional(),
  items: z
    .array(
      z.object({
        title: z.string(),
        body: z.array(z.string()).optional(),
        images: z.array(lessonImageSchema).optional(),
      }),
    )
    .optional(),
});

const levels = defineCollection({
  loader: glob({ base: "./src/content/levels", pattern: "**/*.md" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    stage: z.enum(["first-face", "second-layer", "last-layer"]),
    status: z.enum(["ready", "placeholder", "draft"]),
    order: z.number(),
    goal: z.string(),
    formula: z.string(),
    sourceUrl: z.string().url().optional(),
    sourceNote: z.string().optional(),
    themeColor: z.string().optional(),
    animalSkin: z.string().optional(),
    observation: z.array(z.string()),
    steps: z.array(z.string()),
    passCriteria: z.array(z.string()),
    parentTips: z.array(z.string()),
    diagrams: z.array(z.string()),
    diagramSlots: z.array(diagramSlotSchema).optional(),
    lessonBlocks: z.array(lessonBlockSchema).optional(),
    mediaSlots: z.object({
      original: z.string(),
      completed: z.string(),
      exploded: z.string(),
    }),
    progress: z.object({
      completedUnits: z.number().min(0).max(48),
      totalUnits: z.number().min(1).default(48),
      label: z.string(),
      description: z.string(),
    }),
    casePatterns: z
      .array(
        z.object({
          label: z.string(),
          when: z.string(),
          action: z.string(),
          result: z.string(),
        }),
      )
      .optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ base: "./src/content/stories", pattern: "**/*.md" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    status: z.enum(["draft", "needs-art", "needs-layout", "published"]),
    themeColor: z.string().optional(),
    animalSkin: z.string().optional(),
    relatedStage: z.enum(["first-face", "second-layer", "last-layer"]).optional(),
    relatedLevelSlug: z.string().optional(),
    frames: z.array(
      z.object({
        purpose: z.string(),
        ratio: z.string(),
        size: z.string(),
        src: z.string().optional(),
        alt: z.string().optional(),
        prompt: z.string(),
        status: z.enum(["placeholder", "needed", "ready"]),
      }),
    ),
    diagramRefs: z.array(z.string()).optional(),
  }),
});

const changelog = defineCollection({
  loader: glob({ base: "./src/content/changelog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.enum(["feature", "improvement", "bugfix"]),
    project: z.enum(["website", "color-editor", "picturebook-skin"]),
    tags: z.array(z.string()),
    summary: z.string(),
    highlights: z.array(z.string()),
    documents: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { levels, stories, changelog };
