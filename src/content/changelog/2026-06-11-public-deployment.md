---
title: "公开仓库部署跑通"
date: "2026-06-11"
type: "bugfix"
project: "website"
tags:
  - "技术实现"
  - "部署"
  - "仓库"
summary: "从内部开发仓库拆出公开部署仓库，只发布魔方网站，避免公开完整内部资料。"
highlights:
  - "创建 public repo：Sankeyuk/rubik-cube-enlightenment。"
  - "GitHub Pages 地址上线，首页和第一关页面均返回 HTTP 200。"
  - "修复 GitHub Actions 中 pnpm 初始化顺序问题。"
  - "通过 GitHub Pages API 启用 workflow 部署模式。"
  - "沉淀 GitHub Pages 公开仓库部署排错 SOP 到内部知识库。"
documents:
  - label: "公开网站"
    href: "https://sankeyuk.github.io/rubik-cube-enlightenment/"
  - label: "公开仓库"
    href: "https://github.com/Sankeyuk/rubik-cube-enlightenment"
---

部署过程暴露出三类问题：token 权限、私有仓库 Pages 限制、workflow 环境顺序。解决后，网站有了可以给外部访问的公开地址。
