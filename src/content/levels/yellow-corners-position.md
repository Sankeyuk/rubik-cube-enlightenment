---
slug: yellow-corners-position
title: 顶层角块归位
stage: last-layer
status: ready
order: 7
goal: 先让最后一层角块回到正确座位，暂时不要求黄色朝上。
formula: U R U' L' U R' U' L
sourceUrl: https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/
sourceNote: 参考 Ruwix beginner method 的 yellow corners 路线改写为“角块先坐对座位”的关卡草稿，正文未复制原文。
themeColor: 黄色主题
animalSkin: Giraffe
observation:
  - 观察顶层角块的三种颜色，判断它应该属于哪个角落座位。
  - 这一关只管位置，不管角块有没有转正。
  - 如果已经有一个角块在正确座位，把它放到指定角落，再处理其他角块。
steps:
  - 找一个颜色组合已经属于正确角落的角块。
  - 把这个角块放到准备位置。
  - 执行公式，让其他三个角块轮换座位。
  - 如果没有任何角块在正确座位，先做一次公式，再重新寻找。
passCriteria:
  - 四个顶层角块都在属于自己的角落座位。
  - 角块是否黄色朝上不作为本关完成条件。
  - 孩子能说出角块座位由三个中心颜色共同决定。
parentTips:
  - 用“三个颜色决定一个角落”的说法，帮助孩子避免只看黄色。
  - 本关容易把“位置”和“方向”混在一起，家长可以反复提醒先不管朝向。
diagrams:
  - public/images/levels/yellow-corners-position-before.svg
  - public/images/levels/yellow-corners-position-after.svg
diagramSlots:
  - label: 起始状态
    purpose: 放黄角还没有坐到正确角落的状态照片。
    ratio: 4:3
    size: 1200x900
    status: placeholder
  - label: 关键步骤
    purpose: 放寻找正确角块、定位到前右上角和切换分型的展开图。
    ratio: 4:3
    size: 1200x900
    status: needed
  - label: 完成结果
    purpose: 放四个黄角都坐对座位但还未全部转正的确认图。
    ratio: 4:3
    size: 1200x900
    status: placeholder
mediaSlots:
  original: 黄角未归位状态照片待补
  completed: 黄角全部归位状态照片待补
  exploded: 角块三色座位判断展开图待补
lessonBlocks:
  - id: step-1
    title: 目标
    kind: observe
    images:
      - label: 目标
        src: /images/levels7/level-07-01-goal.png?v=20260626-full-png
        alt: 第七关目标
        status: ready
  - id: step-2
    title: 具体操作
    kind: observe
    images:
      - label: 具体操作
        src: /images/levels7/level-07-02-operation.png?v=20260626-full-png
        alt: 第七关具体操作
        status: ready
  - id: step-3
    title: 通关预告
    kind: observe
    button: 进入第八关
    buttonHref: /levels/yellow-corners-orient
    images:
      - label: 通关预告
        src: /images/levels7/level-07-03-pass-preview.png?v=20260626-full-png
        alt: 第七关通关预告
        status: ready
progress:
  completedUnits: 40
  totalUnits: 48
  label: 顶层角块先归位
  description: 四个角块先坐到正确角落，暂时不要求黄色朝上，按 48 格模型约完成 40/48。
casePatterns:
  - label: 分型 A：有一个角块已经坐对
    when: 至少一个黄角的三个颜色属于它所在的角落。
    action: 把这个角块放到指定位置，使用公式轮换其他角块。
    result: 四个角块逐步坐回正确座位。
  - label: 分型 B：没有角块坐对
    when: 四个顶层角块都不属于当前角落。
    action: 先做一次公式。
    result: 回到分型 A，再用一个已坐对的角块作为锚点。
---

## 内容状态

本关是参考路线改写草稿。保留“归位”和“转正”分开的教学重点。
