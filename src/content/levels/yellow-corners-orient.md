---
slug: yellow-corners-orient
title: 魔方还原
stage: last-layer
status: ready
order: 8
goal: 在角块已经坐对位置后，把每个黄角转到正确朝向，完成整个魔方。
formula: R' D' R D
sourceUrl: https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/
sourceNote: 参考 Ruwix beginner method 的 orient yellow corners 路线改写为“坐对以后再转正”的关卡草稿，正文未复制原文。
themeColor: 黄色主题
animalSkin: Giraffe
observation:
  - 确认顶层角块已经在正确座位，只是黄色没有全部朝上。
  - 选择一个没转正的角块，放到前右上的操作位置。
  - 这一关中间看起来会暂时变乱，关键是不要转整个魔方。
steps:
  - 把一个没转正的黄角放到前右上角。
  - 重复公式，直到这个角块黄色朝上。
  - 只转顶层，把下一个没转正的黄角送到前右上角。
  - 对每个没转正的角块重复同样动作，直到整个魔方完成。
passCriteria:
  - 所有黄角都转正。
  - 操作过程中没有旋转整个魔方，只转顶层切换目标角块。
  - 最后六面全部完成。
parentTips:
  - 这关最容易慌，家长要提醒孩子：中间暂时变乱是正常现象。
  - 每次只盯一个角块，完成后只转顶层换下一个目标。
diagrams:
  - public/images/levels/yellow-corners-orient-before.svg
  - public/images/levels/yellow-corners-orient-after.svg
diagramSlots:
  - label: 起始状态
    purpose: 放黄角坐对但朝向未转正的状态照片。
    ratio: 4:3
    size: 1200x900
    status: placeholder
  - label: 关键步骤
    purpose: 放前右上角操作位、只转顶层换目标角块的展开图。
    ratio: 4:3
    size: 1200x900
    status: needed
  - label: 完成结果
    purpose: 放六面完成后的最终确认图。
    ratio: 4:3
    size: 1200x900
    status: placeholder
mediaSlots:
  original: 黄角待转正状态照片待补
  completed: 魔方完成状态照片待补
  exploded: 前右上角操作位和只转顶层示意图待补
lessonBlocks:
  - id: step-1
    title: 目标
    kind: observe
    images:
      - label: 目标
        src: /images/levels8/level-08-01-goal.png?v=20260626-full-png
        alt: 第八关目标
        status: ready
  - id: step-2
    title: 具体操作
    kind: observe
    images:
      - label: 具体操作
        src: /images/levels8/level-08-02-operation.png?v=20260626-full-png
        alt: 第八关具体操作
        status: ready
  - id: step-3
    title: 魔方还原
    kind: observe
    button: 了解更多
    buttonHref: /changelog
    images:
      - label: 魔方还原
        src: /images/levels8/level-08-03-pass.png?v=20260626-full-png
        alt: 第八关魔方还原
        status: ready
progress:
  completedUnits: 48
  totalUnits: 48
  label: 六面完成
  description: 所有角块转正后，48 个格子全部坐回正确座位。
casePatterns:
  - label: 分型 A：当前角块没转正
    when: 前右上角的黄角还没有黄色朝上。
    action: 重复公式，直到这个角块黄色朝上。
    result: 当前角块完成，然后只转顶层切换下一个目标角块。
  - label: 分型 B：当前角块已经转正
    when: 前右上角的黄角已经黄色朝上。
    action: 不做公式，只转顶层找下一个没转正的角块。
    result: 回到分型 A，继续处理下一个角块。
---

## 内容状态

本关是参考路线改写草稿。需要重点配图说明“只转顶层，不转整颗魔方”。
