# TransBuddy 🎤 面试实时翻译 + AI 回答助手

Real-time interview translation overlay with AI-powered structured answer generation.

## 核心功能

1. **实时双语字幕** - 英文语音识别 → 中文翻译，双语字幕在屏幕上半部分
2. **AI 结构化回答** - 基于你的经历，GPT 自动检测面试问题并生成 STAR 格式的英文回答 + 中文摘要

## 两种使用方式

### 方式 1: 浏览器直接打开（最快，推荐）

直接用 Chrome/Edge 打开 `index.html` 即可。

```bash
# macOS
open -a "Google Chrome" index.html

# Windows
start chrome index.html

# Linux
google-chrome index.html
```

> ⚠️ 浏览器模式下窗口不能穿透点击和置顶，建议把浏览器窗口缩小放在屏幕一侧。

### 方式 2: Electron 悬浮窗（推荐正式面试用）

```bash
# 安装依赖
npm install

# 启动
npm start
```

Electron 模式支持：
- 🔝 窗口永远置顶（覆盖在视频会议上方）
- 👻 半透明背景，可以透过看到面试官
- ⌨️ 快捷键控制

## 使用步骤

1. 打开后填写：
   - **OpenAI API Key** (需要 GPT-4o 权限)
   - **你的背景经历** (越详细越好 - 项目、指标、技术栈)
   - **目标职位** (可选)
2. 点击 **Start Interview Mode**
3. 允许麦克风权限
4. 开始面试！
   - 上半屏：实时显示英文+中文字幕
   - 下半屏：AI 自动检测问题并生成结构化回答
   - 点击 "Ask Now" 可手动触发对最近几句话生成回答

## 快捷键 (Electron 模式)

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+Shift+T` | 显示/隐藏窗口 |
| `Ctrl+Shift+↑` | 增加不透明度 |
| `Ctrl+Shift+↓` | 降低不透明度 |
| `Ctrl+Shift+P` | 切换鼠标穿透 |

## 翻译选项

- **GPT Translation**: 用 GPT-4o-mini 翻译，质量最好
- **Free Translation**: 用 MyMemory 免费 API，不消耗你的 API 额度

## 技术栈

- Web Speech API (语音识别)
- OpenAI GPT-4o (答案生成)
- OpenAI GPT-4o-mini (翻译)
- Electron (可选，悬浮窗模式)
- 纯 HTML/CSS/JS，无框架依赖

## 注意事项

- 需要 Chrome 或 Edge 浏览器 (Speech API 兼容性)
- 需要稳定的网络连接 (API 调用)
- 首次使用需要允许麦克风权限
- API Key 会保存在本地 localStorage 中

## License

MIT
