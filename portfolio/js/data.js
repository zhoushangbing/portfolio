/* ============================================================
   项目数据
   新增项目时在此数组中添加一条记录即可，页面会自动渲染：
   字段：name 名称 / category 类别 / date 完成时间
        desc 简介 / stack 技术栈数组 / image 图片路径 / alt 图片说明
   图片说明：当前图片存放于 assets/images/，可自行替换。
   ============================================================ */
window.PROJECTS = [
  {
    name: "轻记账",
    category: "移动应用",
    date: "2025.04",
    desc: "面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题，支持语音快捷记账、月度收支统计与预算提醒，使用微信云开发完成数据存储与后端能力。",
    stack: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
    image: "assets/images/project-3.jpg",
    alt: "轻记账小程序界面"
  },
  {
    name: "拾光集市",
    category: "Web 应用",
    date: "2025.09",
    desc: "面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信与信用评分等功能，从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
    stack: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    image: "assets/images/project-1.jpg",
    alt: "拾光集市二手交易平台界面"
  },
  {
    name: "城市脉搏",
    category: "数据可视化",
    date: "2026.03",
    desc: "城市实时交通与天气数据可视化大屏，集中展示交通、天气与城市运行信息，通过多数据源轮询聚合数据，结合 SVG 图表、Canvas 粒子地图与响应式布局实现可视化展示。",
    stack: ["TypeScript", "HTML / CSS", "Canvas", "SVG", "ECharts"],
    image: "assets/images/project-2.jpg",
    alt: "城市脉搏数据可视化大屏"
  },
  {
    name: "课语通",
    category: "AI 应用",
    date: "2026.07",
    desc: "基于大语言模型的课程问答助手，用户上传课程资料后建立知识索引，根据课程内容回答问题并提供引用出处与知识点小测，帮助学生快速复习和整理课程重点。",
    stack: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
    image: "assets/images/project-4.jpg",
    alt: "课语通课程问答助手界面"
  }
];
