---
slug: true-cross
title: 白真十字
stage: first-face
status: ready
order: 2
goal: 拼真十字，让四个侧面的第一个菱块归位。
formula: 上勾下回
sourceUrl: https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/
sourceNote: 已按 Downloads/Level 02 的新版 Figma PNG 更新；页面正文只保留导航说明，具体步骤以 PNG 为准。
themeColor: 白色主题
animalSkin: Crocodile
observation:
  - 先看四张图的顺序：目标、观察、操作、通关预告。
  - PNG 内已包含相邻对齐、相对对齐和右手操作说明。
steps:
  - 按页面导航依次查看四张 PNG。
  - 具体判断和动作以 PNG 内说明为准。
  - 完成后进入第三关。
passCriteria:
  - 四个侧面的第一个菱块已经归位。
  - 能区分相邻对齐和相对对齐。
  - 知道什么时候需要先确认朝向。
parentTips:
  - 这一关先让孩子看图说出“是哪一种对齐”。
  - 如果操作后没有回到目标状态，回到观察图重新判断。
  - 不需要背大段文字，重点是对照 PNG 做一次。
diagrams:
  - /images/levels2/level2-01-goal.png?v=20260625-figma-png
  - /images/levels2/level2-02-observe-prepare.png?v=20260625-figma-png
  - /images/levels2/level2-03-operation.png?v=20260625-figma-png
  - /images/levels2/level2-04-pass-preview.png?v=20260625-figma-png
diagramSlots:
  - label: 目标
    purpose: 第二关目标图，包含开始状态、右手公式序列和目标状态。
    ratio: 4:3
    size: 1600x1200
    status: ready
  - label: 准备与观察
    purpose: 第二关观察图，包含转动顶层、相邻对齐、相对对齐。
    ratio: 4:3
    size: 1600x1200
    status: ready
  - label: 具体操作
    purpose: 第二关操作图，包含相邻/相对两条路径和右手操作提示。
    ratio: 4:3
    size: 1600x1200
    status: ready
  - label: 通关与预告
    purpose: 第二关通关预告图，包含完成进度和下一关目标。
    ratio: 4:3
    size: 1600x1200
    status: ready
mediaSlots:
  original: /images/levels2/level2-01-goal.png?v=20260625-figma-png
  completed: /images/levels2/level2-04-pass-preview.png?v=20260625-figma-png
  exploded: /images/levels2/level2-03-operation.png?v=20260625-figma-png
lessonBlocks:
  - id: step-1
    title: 目标
    kind: observe
    images:
      - label: 目标
        src: /images/levels2/level-02-01-goal.png?v=20260626-full-png
        alt: 第二关目标
        status: ready
  - id: step-2
    title: 观察与准备
    kind: observe
    images:
      - label: 观察与准备
        src: /images/levels2/level-02-02-observe-prepare.png?v=20260626-full-png
        alt: 第二关观察与准备
        status: ready
  - id: step-3
    title: 具体操作
    kind: observe
    images:
      - label: 具体操作
        src: /images/levels2/level-02-03-operation.png?v=20260626-full-png
        alt: 第二关具体操作
        status: ready
  - id: step-4
    title: 通关预告
    kind: observe
    button: 进入第三关
    buttonHref: /levels/first-layer-corners
    images:
      - label: 通关预告
        src: /images/levels2/level-02-04-pass-preview.png?v=20260626-full-png
        alt: 第二关通关预告
        status: ready

progress:
  completedUnits: 8
  totalUnits: 48
  label: 真十字完成
  description: 四个侧面的第一个菱块已经归位，约完成 17%。
---

## 内容状态

本关已换用 `Downloads/Level 02` 的 4 张 1600x1200 Figma PNG。PNG 内已有的步骤说明不再重复写入网页正文。
