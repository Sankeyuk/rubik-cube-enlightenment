---
slug: yellow-cross
title: 黄面十字
stage: last-layer
status: ready
order: 5
goal: 在最后一层先做出顶面的十字，只关心顶面形状，不急着对齐侧面颜色。
formula: F R U R' U' F'
sourceUrl: https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/
sourceNote: 参考 Ruwix beginner method 的 yellow cross 路线改写为“最后一层先搭座位骨架”的关卡草稿，正文未复制原文。
themeColor: 黄色主题
animalSkin: Giraffe
observation:
  - 把未完成的顶面朝上，观察顶面黄色块形成了点、L、横线还是十字。
  - 这一关只看顶面是否形成十字，暂时不要求侧面颜色对齐。
  - 不同图形需要重复同一个公式不同次数。
steps:
  - 观察顶面当前形状：点、L、横线或已经是十字。
  - 如果是 L，把 L 放在合适方向后做公式。
  - 如果是横线，把横线横着放在眼前后做公式。
  - 如果还是没有十字，就重新观察形状，再重复公式。
passCriteria:
  - 顶面出现清楚的黄色十字。
  - 孩子知道这一关还不检查侧面颜色。
  - 做公式后能重新观察，而不是盲目连续转。
parentTips:
  - 这一关适合练习“先识别图形，再决定做几次”。
  - 如果孩子急着对齐侧面，提醒他这一关只是在搭顶面的骨架。
diagrams:
  - public/images/levels/yellow-cross-before.svg
  - public/images/levels/yellow-cross-after.svg
diagramSlots:
  - label: 起始状态
    purpose: 放顶面黄色是点、L 或横线之一的状态照片。
    ratio: 4:3
    size: 1200x900
    status: placeholder
  - label: 关键步骤
    purpose: 放点、L、横线三种分型如何回到下一种状态的展开图。
    ratio: 4:3
    size: 1200x900
    status: needed
  - label: 完成结果
    purpose: 放顶面黄色十字完成后的确认图。
    ratio: 4:3
    size: 1200x900
    status: placeholder
mediaSlots:
  original: 黄十字原始状态照片待补
  completed: 黄十字完成状态照片待补
  exploded: 点、L、横线、十字四种顶面展开图待补
lessonBlocks:
  - id: step-1
    title: 目标
    kind: observe
    images:
      - label: 目标
        src: /images/levels5/level-05-01-goal.png?v=20260626-full-png
        alt: 第五关目标
        status: ready
  - id: step-2
    title: 观察与准备
    kind: observe
    images:
      - label: 观察与准备
        src: /images/levels5/level-05-02-observe-prepare.png?v=20260626-full-png
        alt: 第五关观察与准备
        status: ready
  - id: step-3
    title: 一字操作
    kind: observe
    images:
      - label: 一字操作
        src: /images/levels5/level-05-03-line-operation.png?v=20260626-full-png
        alt: 第五关一字操作
        status: ready
  - id: step-4
    title: 拐角操作
    kind: observe
    images:
      - label: 拐角操作
        src: /images/levels5/level-05-04-corner-operation.png?v=20260626-full-png
        alt: 第五关拐角操作
        status: ready
  - id: step-5
    title: 中心点操作
    kind: observe
    images:
      - label: 中心点操作
        src: /images/levels5/level-05-05-center-operation.png?v=20260626-full-png
        alt: 第五关中心点操作
        status: ready
  - id: step-6
    title: 通关预告
    kind: observe
    button: 进入第六关
    buttonHref: /levels/yellow-edges
    images:
      - label: 通关预告
        src: /images/levels5/level-05-06-pass-preview.png?v=20260626-full-png
        alt: 第五关通关预告
        status: ready
progress:
  completedUnits: 32
  totalUnits: 48
  label: 顶面黄色十字完成
  description: 在前两层基础上，顶面四个黄色棱块朝上，按 48 格模型约完成 32/48。
casePatterns:
  - label: 分型 A：已经是横线
    when: 顶面黄色形成一条线。
    action: 把横线横着摆在眼前，做一次公式。
    result: 进入黄十字完成状态。
  - label: 分型 B：是 L 形
    when: 顶面黄色形成一个小拐角。
    action: 把 L 摆到指定方向，做一次公式。
    result: 通常回到分型 A，再按横线处理。
  - label: 分型 C：只有一个点
    when: 顶面只有中心点，没有形成 L 或横线。
    action: 做一次公式。
    result: 回到分型 B 或分型 A，再继续解。
---

## 内容状态

本关是参考路线改写草稿。点、L、横线的正确摆放方向需要配图确认。
