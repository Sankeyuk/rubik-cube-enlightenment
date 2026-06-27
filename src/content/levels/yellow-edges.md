---
slug: yellow-edges
title: 黄面还原
stage: last-layer
status: ready
order: 6
goal: 让顶层十字的边块不仅在顶面成形，也和侧面中心块对齐。
formula: R U R' U R U2 R' U
sourceUrl: https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/
sourceNote: 参考 Ruwix beginner method 的 yellow edges 路线改写为“顶层边块回到侧面座位”的关卡草稿，正文未复制原文。
themeColor: 黄色主题
animalSkin: Giraffe
observation:
  - 顶面已经有黄色十字后，转动顶层，观察哪些边块的侧面颜色能和中心块对上。
  - 这一关处理的是顶层边块的位置，不处理角块。
  - 如果只有部分边块对齐，需要用公式交换顶层边块的位置。
steps:
  - 先转动顶层，尽量找到已经和侧面中心块对齐的边块。
  - 把需要交换的位置放到公式要求的方向。
  - 执行公式后重新检查四个侧面中心块。
  - 如果还没有全部对齐，再调整顶层方向并重复。
passCriteria:
  - 顶面仍然保持黄色十字。
  - 四个黄色边块的侧面颜色和对应中心块对齐。
  - 孩子能分清“顶面十字完成”和“边块真正坐对”。
parentTips:
  - 让孩子先慢慢转顶层检查四条边，不要马上做公式。
  - 这关可以反复问：这个边块的侧面颜色，应该找哪个中心块？
diagrams:
  - public/images/levels/yellow-edges-before.svg
  - public/images/levels/yellow-edges-after.svg
diagramSlots:
  - label: 起始状态
    purpose: 放黄十字完成但侧面边块未对齐的照片。
    ratio: 4:3
    size: 1200x900
    status: placeholder
  - label: 关键步骤
    purpose: 放顶层边块轮换方向和侧面颜色检查的展开图。
    ratio: 4:3
    size: 1200x900
    status: needed
  - label: 完成结果
    purpose: 放顶层四个边块和侧面中心块对齐后的确认图。
    ratio: 4:3
    size: 1200x900
    status: placeholder
mediaSlots:
  original: 黄边未对齐状态照片待补
  completed: 黄边全部对齐状态照片待补
  exploded: 顶层边块交换关系展开图待补
lessonBlocks:
  - id: step-1
    title: 目标
    kind: observe
    images:
      - label: 目标
        src: /images/levels6/level-06-01-goal.png?v=20260626-full-png
        alt: 第六关目标
        status: ready
  - id: step-2
    title: 观察与准备
    kind: observe
    images:
      - label: 观察与准备
        src: /images/levels6/level-06-02-observe-prepare.png?v=20260626-full-png
        alt: 第六关观察与准备
        status: ready
  - id: step-3
    title: 两个角操作
    kind: observe
    images:
      - label: 两个角操作
        src: /images/levels6/level-06-03-two-corners-operation.png?v=20260626-full-png
        alt: 第六关两个角操作
        status: ready
  - id: step-4
    title: 通关预告
    kind: observe
    button: 进入第七关
    buttonHref: /levels/yellow-corners-position
    images:
      - label: 通关预告
        src: /images/levels6/level-06-04-pass-preview.png?v=20260626-full-png
        alt: 第六关通关预告
        status: ready
progress:
  completedUnits: 36
  totalUnits: 48
  label: 顶层边块侧面也对齐
  description: 黄色十字的四个边块和侧面中心块对齐后，按 48 格模型约完成 36/48。
casePatterns:
  - label: 分型 A：两个相邻边块已对齐
    when: 转顶层后，有两个相邻侧面颜色对上中心块。
    action: 把这两个已对齐边块放到指定位置，再做公式。
    result: 四个黄边都能回到正确侧面座位。
  - label: 分型 B：两个相对边块已对齐
    when: 只有前后或左右两个相对边块能对齐。
    action: 做一次公式。
    result: 回到分型 A，再按相邻边块处理。
---

## 内容状态

本关是参考路线改写草稿。公式摆放方向和交换关系需要后续配图校准。
