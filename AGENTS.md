# ELEGENN GLOBAL Website Project

## 项目概述

这是一个为 **ELEGENN GLOBAL**（高功能护肤品公司）构建的韩文企业网站，基于Word文档策划案开发。

### 核心功能

- **首页 (/)**: Hero Banner、品牌故事、核心技术展示、4大产品展示、统计数据
- **关于我们 (/about)**: 公司概述、CEO致辞、愿景使命、核心价值观
- **技术页面 (/technology)**: PDRN、Peptide Complex、HA、Advanced Formulation核心技术详情
- **产品页面 (/products)**: 4款产品详细介绍及购买引导
- **联系页面 (/contact)**: 商业合作咨询表单、业务领域介绍

## 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

## 目录结构

```
src/
├── app/                      # 页面路由
│   ├── page.tsx             # 首页
│   ├── about/               # 关于我们
│   ├── technology/          # 技术页面
│   ├── products/            # 产品页面
│   ├── contact/             # 联系页面
│   └── api/                 # API路由
│       └── fetch-document/  # Word文档获取API
├── components/
│   ├── navigation.tsx       # 导航组件
│   ├── footer.tsx           # 页脚组件
│   └── ui/                  # Shadcn UI组件库
└── ...
```

## 设计规范

### 品牌色彩

- **主色**: Tiffany Blue (#81D8D0)
- **辅助色**: Deep Teal (#0A8A82)
- **深色**: Forest Green (#1A3A35)
- **点缀色**: Silver (#C0C0C0)
- **背景色**: Clean White & Light Mint (#E8F8F7)

### 字体

- **韩文**: Pretendard, Noto Sans KR
- **英文标题**: Playfair Display (Serif)
- **正文**: Noto Sans KR

## 开发命令

```bash
# 安装依赖
pnpm install

# 开发环境
pnpm dev

# 构建生产版本
pnpm build

# 生产环境
pnpm start
```

## 环境变量

无需额外配置，所有配置通过 `.coze` 文件管理。

## 测试验证

- ✅ 首页 (/) - 200 OK
- ✅ 关于我们 (/about) - 200 OK
- ✅ 技术页面 (/technology) - 200 OK
- ✅ 产品页面 (/products) - 200 OK
- ✅ 联系页面 (/contact) - 200 OK
- ✅ Word文档API (/api/fetch-document) - 正常
