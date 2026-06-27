export interface AnimalProfile {
  id: string;
  name: string;
  role: string;
  color: string;
  home: string;
  avatar: string;
  sticker: string;
  alt: string;
}

export interface LevelAnimalSkin {
  primary: string;
  secondary?: string[];
  hint: string;
}

const characterBase = "/images/picturebook-skin/characters";

export const animalProfiles = {
  "abi-crocodile": {
    id: "abi-crocodile",
    name: "鳄鱼阿白",
    role: "白色家的向导",
    color: "白色",
    home: "白色街区",
    avatar: `${characterBase}/abi-crocodile/style-tests/round3-style-lock/png/abi-round3-avatar-1_8cm-300dpi.png`,
    sticker: `${characterBase}/abi-crocodile/style-tests/round3-style-lock/png/abi-round3-sticker.png`,
    alt: "白色鳄鱼阿白头像",
  },
  "yellow-giraffe": {
    id: "yellow-giraffe",
    name: "长颈鹿小黄",
    role: "顶面观察员",
    color: "黄色",
    home: "黄色街区",
    avatar: `${characterBase}/yellow-giraffe/style-tests/round3-style-lock/png/yellow-giraffe-round3-avatar-1_8cm-300dpi.png`,
    sticker: `${characterBase}/yellow-giraffe/style-tests/round3-style-lock/png/yellow-giraffe-round3-sticker.png`,
    alt: "黄色长颈鹿小黄头像",
  },
  "red-rooster": {
    id: "red-rooster",
    name: "公鸡大红",
    role: "方向提醒员",
    color: "红色",
    home: "红色街区",
    avatar: `${characterBase}/red-rooster/style-tests/round3-style-lock/png/red-rooster-round3-avatar-1_8cm-300dpi.png`,
    sticker: `${characterBase}/red-rooster/style-tests/round3-style-lock/png/red-rooster-round3-sticker.png`,
    alt: "红色公鸡大红头像",
  },
  "orange-parrot": {
    id: "orange-parrot",
    name: "鹦鹉橙橙",
    role: "邻居传令员",
    color: "橙色",
    home: "橙色街区",
    avatar: `${characterBase}/orange-parrot/style-tests/round3-style-lock/png/orange-parrot-round3-avatar-1_8cm-300dpi.png`,
    sticker: `${characterBase}/orange-parrot/style-tests/round3-style-lock/png/orange-parrot-round3-sticker.png`,
    alt: "橙色鹦鹉橙橙头像",
  },
  "blue-butterfly": {
    id: "blue-butterfly",
    name: "蝴蝶蓝蓝",
    role: "慢观察伙伴",
    color: "蓝色",
    home: "蓝色街区",
    avatar: `${characterBase}/blue-butterfly/style-tests/round3-style-lock/png/blue-butterfly-round3-avatar-1_8cm-300dpi.png`,
    sticker: `${characterBase}/blue-butterfly/style-tests/round3-style-lock/png/blue-butterfly-round3-sticker.png`,
    alt: "蓝色蝴蝶蓝蓝头像",
  },
  "green-mantis": {
    id: "green-mantis",
    name: "螳螂绿绿",
    role: "完成检查员",
    color: "绿色",
    home: "绿色街区",
    avatar: `${characterBase}/green-mantis/style-tests/round3-style-lock/png/green-mantis-round3-avatar-1_8cm-300dpi.png`,
    sticker: `${characterBase}/green-mantis/style-tests/round3-style-lock/png/green-mantis-round3-sticker.png`,
    alt: "绿色螳螂绿绿头像",
  },
} satisfies Record<string, AnimalProfile>;

export const villageAnimals = Object.values(animalProfiles);

export const levelAnimals = {
  "fake-cross": {
    primary: "abi-crocodile",
    secondary: ["blue-butterfly"],
    hint: "先看白色家的方向。",
  },
  "true-cross": {
    primary: "abi-crocodile",
    secondary: ["orange-parrot"],
    hint: "白色十字也要看邻居。",
  },
  "first-layer-corners": {
    primary: "abi-crocodile",
    secondary: ["blue-butterfly"],
    hint: "先判断阿白在哪一层。",
  },
  "second-layer-edges": {
    primary: "orange-parrot",
    secondary: ["green-mantis"],
    hint: "第二层邻居要看方向。",
  },
  "yellow-cross": {
    primary: "yellow-giraffe",
    secondary: ["blue-butterfly"],
    hint: "站到顶面看黄色。",
  },
  "yellow-edges": {
    primary: "yellow-giraffe",
    secondary: ["red-rooster"],
    hint: "方向别转错。",
  },
  "yellow-corners-position": {
    primary: "yellow-giraffe",
    secondary: ["orange-parrot"],
    hint: "找到正确路口。",
  },
  "yellow-corners-orient": {
    primary: "yellow-giraffe",
    secondary: ["green-mantis"],
    hint: "最后慢慢检查。",
  },
} satisfies Record<string, LevelAnimalSkin>;

export const picturebookBase = "/images/picturebook-skin/picturebook/block-village-v1";

export const picturebookPages = [
  {
    page: 1,
    src: `${picturebookBase}/picturebook-block-village-01-six-districts.png`,
    alt: "方块村里有六条颜色街区，六个动物住在自己的颜色家里",
  },
  {
    page: 2,
    src: `${picturebookBase}/picturebook-block-village-02-animals-home.png`,
    alt: "六个动物在各自颜色街区里安稳生活",
  },
  {
    page: 3,
    src: `${picturebookBase}/picturebook-block-village-03-chaos.png`,
    alt: "方块村被转乱后，动物们站到了不同颜色的街区",
  },
  {
    page: 4,
    src: `${picturebookBase}/picturebook-block-village-04-pause-observe.png`,
    alt: "孩子先停下来观察方块村里哪里不一样",
  },
  {
    page: 5,
    src: `${picturebookBase}/picturebook-block-village-05-gentle-hands.png`,
    alt: "孩子用轻轻的手准备帮助动物回家",
  },
  {
    page: 6,
    src: `${picturebookBase}/picturebook-block-village-06-find-abi.png`,
    alt: "孩子先找到白色鳄鱼阿白的位置",
  },
  {
    page: 7,
    src: `${picturebookBase}/picturebook-block-village-07-sign-neighbor-crossroad.png`,
    alt: "方块村用门牌、邻居和路口解释魔方块的位置",
  },
  {
    page: 8,
    src: `${picturebookBase}/picturebook-block-village-08-abi-going-home.png`,
    alt: "鳄鱼阿白正在回到白色街区",
  },
  {
    page: 9,
    src: `${picturebookBase}/picturebook-block-village-09-others-waiting.png`,
    alt: "其他动物也在等待孩子继续帮助它们回家",
  },
  {
    page: 10,
    src: `${picturebookBase}/picturebook-block-village-10-start-level-one.png`,
    alt: "绘本结束后引导孩子进入第一关学习",
  },
] as const;
