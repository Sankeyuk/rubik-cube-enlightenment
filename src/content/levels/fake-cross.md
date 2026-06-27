---
slug: fake-cross
title: 白假十字
stage: first-face
status: ready
order: 1
goal: 学会一个动作「上」，让（U）白色面的四个菱块归位。
formula: 上
sourceUrl: https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/
sourceNote: 参考 Ruwix beginner method 的 white cross 路线，保留本站“假十字”作为更细的儿童启蒙拆分。本版内容来自 level1-page-handoff，图片源为 final-figma-png。
themeColor: 白色主题
animalSkin: Crocodile
observation:
  - 把白色中心块朝上。
  - 选定绿色中心块面对自己。
  - 观察中心块的位置不会变。
steps:
  - 观察与准备：把白色中心块朝上，绿色中心块面对自己。
  - 核心动作：绿色中心块两边的白色菱块可以通过「上」转到顶层。
  - 判断：顶部位置无白菱块时直接处理；有白色菱块时先让位。
  - 具体操作：观察四个立面，分别处理中间层、上层和底面白菱块。
passCriteria:
  - 4 个白色菱块已经找到。
  - 孩子能说出中心块不会变。
  - 孩子能说出什么时候直接「上」，什么时候先让位。
parentTips:
  - 先让孩子确认白色中心块和绿色工作台面，再开始操作。
  - 不要求速度，先确认孩子能观察中间层、上层和底面。
diagrams:
  - /images/levels1/level1-01-goal.png?v=20260616-final-figma
  - /images/levels1/level1-02-observe-prepare.png?v=20260616-final-figma
  - /images/levels1/level1-03-action-explain.png?v=20260616-final-figma
  - /images/levels1/level1-04-judge.png?v=20260616-final-figma
  - /images/levels1/level1-05-cases-operation.png?v=20260616-final-figma
  - /images/levels1/level1-06-next-preview.png?v=20260616-final-figma
diagramSlots:
  - label: 目标
    purpose: 第一关目标图，说明通过动作「上」让白色菱块归位。
    ratio: 949:332
    size: 949x332
    status: ready
  - label: 观察与准备
    purpose: 白色中心块朝上，绿色中心块面对自己。
    ratio: 110:111
    size: 220x222
    status: ready
  - label: 核心动作
    purpose: 解释核心动作“上”。
    ratio: 521:173
    size: 1042x346
    status: ready
  - label: 状态判断
    purpose: 判断目标位置是否被占用。
    ratio: 960:367
    size: 960x367
    status: ready
  - label: 具体操作
    purpose: 汇总第一关三类白菱块处理。
    ratio: 119:164
    size: 476x656
    status: ready
  - label: 预告下一关
    purpose: 第一关结束后的下一关成果预告。
    ratio: 379:261
    size: 758x522
    status: ready
mediaSlots:
  original: /images/levels1/level-01-01-observe-prepare-legacy.png?v=20260626-full-png
  completed: /images/levels1/level-01-06-pass-preview.png?v=20260626-full-png
  exploded: /images/levels1/level-01-04-formula-explain.png?v=20260626-full-png
lessonBlocks:
  - id: step-1
    title: 观察与准备
    kind: observe
    images:
      - label: 观察与准备
        src: /images/levels1/level-01-01-observe-prepare-legacy.png?v=20260626-full-png
        alt: 第一关观察与准备
        status: ready
  - id: step-2
    title: 具体操作
    kind: observe
    images:
      - label: 具体操作
        src: /images/levels1/level-01-02-operation-legacy.png?v=20260626-full-png
        alt: 第一关具体操作
        status: ready
  - id: step-3
    title: 目标
    kind: observe
    images:
      - label: 目标
        src: /images/levels1/level-01-03-goal.png?v=20260626-full-png
        alt: 第一关目标
        status: ready
  - id: step-4
    title: 核心动作
    kind: observe
    images:
      - label: 核心动作
        src: /images/levels1/level-01-04-formula-explain.png?v=20260626-full-png
        alt: 第一关核心动作
        status: ready
  - id: step-5
    title: 判断
    kind: observe
    images:
      - label: 判断
        src: /images/levels1/level-01-05-judge.png?v=20260626-full-png
        alt: 第一关判断
        status: ready
  - id: step-6
    title: 通关预告
    kind: observe
    button: 进入第二关
    buttonHref: /levels/true-cross
    images:
      - label: 通关预告
        src: /images/levels1/level-01-06-pass-preview.png?v=20260626-full-png
        alt: 第一关通关预告
        status: ready

progress:
  completedUnits: 4
  totalUnits: 48
  label: 完成第一面的四个棱块
  description: 假十字做完后，大约完成 4 个格子的任务，也就是整颗魔方的 8% 左右。
---

## 内容状态

本关已接入 level1-page-handoff 的最终 Figma PNG 与网站文案结构。PNG 来自 `final-figma-png/`，不是 `png-preview/`。
