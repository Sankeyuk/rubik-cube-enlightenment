export interface SeoEntry {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
  ogImage?: string;
}

export const publicSiteOrigin = "https://sankeyuk.github.io";
export const publicSiteBase = "/rubik-cube-enlightenment";
export const defaultOgImage = "/images/banners/rubik-levels-banner.jpg";

function normalizePath(path: string): string {
  let normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized.startsWith(`${publicSiteBase}/`)) {
    normalized = normalized.slice(publicSiteBase.length);
  }

  if (normalized === publicSiteBase) {
    normalized = "/";
  }

  if (!normalized.endsWith("/") && !normalized.includes(".")) {
    normalized = `${normalized}/`;
  }

  return normalized;
}

export function absoluteSiteUrl(path = "/"): string {
  const route = normalizePath(path);
  const base = publicSiteBase.replace(/\/$/, "");
  return `${publicSiteOrigin}${base}${route}`;
}

export function absoluteAssetUrl(path = defaultOgImage): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return absoluteSiteUrl(path);
}

export const routeSeo = {
  "/": {
    title: "玩转魔方，有手就行。",
    description: "给 10 岁以下孩子和家长使用的魔方启蒙网站，用关卡、故事和清晰图示理解三阶魔方复原。",
    canonicalPath: "/",
  },
  "/story": {
    title: "动物绘本魔方启蒙故事 · 玩转魔方，有手就行。",
    description: "用动物绘本和方格人找座位的方式，引导孩子先对魔方色块产生好奇心。",
    canonicalPath: "/story",
  },
  "/picturebook": {
    title: "方块村魔方绘本 · 玩转魔方，有手就行。",
    description: "连续阅读 10 页方块村竖屏绘本，先认识六色街区和动物角色，再进入魔方启蒙关卡。",
    canonicalPath: "/picturebook",
    ogImage: "/images/picturebook-skin/picturebook/block-village-v1/picturebook-block-village-01-six-districts.png",
  },
  "/levels": {
    title: "魔方启蒙 8 关地图 · 玩转魔方，有手就行。",
    description: "从入门介绍到完整复原，把三阶魔方拆成适合亲子共学的 8 个关卡。",
    canonicalPath: "/levels",
  },
  "/levels/intro": {
    title: "魔方入门介绍 · 玩转魔方，有手就行。",
    description: "先认识魔方的面、中心块、棱块、角块和基础手法，再进入第一关。",
    canonicalPath: "/levels/intro",
  },
  "/materials": {
    title: "魔方启蒙材料方向 · 玩转魔方，有手就行。",
    description: "记录后续打印材料、卡片包、故事包和工具包的产品方向。",
    canonicalPath: "/materials",
  },
  "/support": {
    title: "支持魔方启蒙项目 · 玩转魔方，有手就行。",
    description: "了解如何支持这个亲子魔方启蒙项目继续更新。",
    canonicalPath: "/support",
  },
  "/changelog": {
    title: "魔方启蒙网站更新记录 · 玩转魔方，有手就行。",
    description: "查看魔方启蒙网站、关卡内容、示意图和项目材料的公开更新记录。",
    canonicalPath: "/changelog",
  },
  "/diagrams": {
    title: "魔方示意图材料规划 · 玩转魔方，有手就行。",
    description: "记录网站需要接收的关卡示意图、比例、尺寸和素材状态。",
    canonicalPath: "/diagrams",
  },
  "/interfaces": {
    title: "魔方项目接口说明 · 玩转魔方，有手就行。",
    description: "说明网站、内容线、示意图编辑器和项目治理之间的协作边界。",
    canonicalPath: "/interfaces",
  },
} satisfies Record<string, SeoEntry>;

export const levelSeo = {
  "fake-cross": {
    title: "第一关：白假十字 · 玩转魔方，有手就行。",
    description: "学会观察白色中心块和白色棱块，用简单动作拼出白色假十字。",
  },
  "true-cross": {
    title: "第二关：白真十字 · 玩转魔方，有手就行。",
    description: "在白假十字基础上，让四个侧面的第一块颜色也对齐。",
  },
  "first-layer-corners": {
    title: "第三关：白面和第一层 · 玩转魔方，有手就行。",
    description: "处理白色角块，让白色面和第一层侧面一起完成。",
  },
  "second-layer-edges": {
    title: "第四关：第二层棱块 · 玩转魔方，有手就行。",
    description: "判断第二层棱块该向左还是向右插入，完成底部两层。",
  },
  "yellow-cross": {
    title: "第五关：黄面十字 · 玩转魔方，有手就行。",
    description: "在最后一层先做出黄色十字，只关注顶面形状。",
  },
  "yellow-edges": {
    title: "第六关：黄面边块归位 · 玩转魔方，有手就行。",
    description: "让黄面十字的边块与侧面中心块对齐。",
  },
  "yellow-corners-position": {
    title: "第七关：顶层角块归位 · 玩转魔方，有手就行。",
    description: "先让顶层角块坐到正确位置，不急着转正朝向。",
  },
  "yellow-corners-orient": {
    title: "第八关：魔方还原 · 玩转魔方，有手就行。",
    description: "在角块位置正确后调整黄色朝向，完成整个魔方。",
  },
} satisfies Record<string, Pick<SeoEntry, "title" | "description">>;

export const storySeo = {
  "color-seat-day": {
    title: "方格人找座位的一天 · 玩转魔方，有手就行。",
    description: "一个白色主题的魔方启蒙故事，让孩子理解色块需要回到正确位置。",
  },
} satisfies Record<string, Pick<SeoEntry, "title" | "description">>;

export function getLevelSeo(slug: string, fallback: Pick<SeoEntry, "title" | "description">): SeoEntry {
  const entry = levelSeo[slug as keyof typeof levelSeo] ?? fallback;
  return {
    ...entry,
    canonicalPath: `/levels/${slug}`,
    ogType: "article",
  };
}

export function getStorySeo(slug: string, fallback: Pick<SeoEntry, "title" | "description">): SeoEntry {
  const entry = storySeo[slug as keyof typeof storySeo] ?? fallback;
  return {
    ...entry,
    canonicalPath: `/story/${slug}`,
    ogType: "article",
  };
}
