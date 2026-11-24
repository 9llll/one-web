
- **零构建**：没有 Node/编译步骤，Cloudflare Pages 直接托管即可
- **零配置**：CDN、HTTPS、全球节点由 Cloudflare Pages 提供
- **可复用**：fork 一份 → 改 `config.js` + `js/content.js` → 自动部署

---

## 一、目录结构

```
.
├── index.html          # 页面骨架（一般不用改）
├── config.js           # ★ 站点信息：标题、标语、计时起点、页脚、统计
├── js/
│   ├── content.js      # ★ 正文内容：简介、基本信息、各章节 HTML
│   ├── render.js       # 渲染逻辑（把上面两个文件填进骨架）
│   ├── app.js          # 右侧菜单滚动高亮
│   └── jquery-1.8.0.min.js
├── css/style.css       # 全部样式（含一段可删的移动端适配）
├── images/             # 图片：主视觉、正文配图、logo
├── fonts/              # 本地字体（Font Awesome + Google 字体离线包）
├── favicon.png
├── _headers            # Cloudflare Pages 缓存/安全响应头（可选）
└── robots.txt
```

**你只需要改两个文件**：`config.js`（站点信息）和 `js/content.js`（正文内容）。

---

## 二、本地预览

因为页面是纯静态的，直接双击 `index.html` 就能看。若想更贴近线上效果（相对路径、缓存都正常）：

```bash
# 方式 1：Python（Windows 自带或已安装 Python）
python -m http.server 8080

# 方式 2：Node
npx serve .
```

然后打开 `http://localhost:8080`。

---

## 三、改内容：`config.js`

| 字段 | 作用 | 示例 |
| --- | --- | --- |
| `seo.title` | 浏览器标签标题 / 搜索结果标题 | `"5.12汶川大地震 - 缅怀逝者..."` |
| `seo.description` | 搜索摘要 | `"缅怀逝者，致敬英雄，铭记国殇"` |
| `seo.keywords` | 关键词，逗号分隔 | `"5.12,汶川,纪念"` |
| `seo.favicon` | 站点图标路径 | `"favicon.png"` |
| `seo.ogImage` | 分享缩略图（可选） | `"images/mini.png"` |
| `hero.big` | 首屏大号数字 | `"5.12"` |
| `hero.title` | 首屏主标题 | `"汶川大地震"` |
| `hero.cover` | 首屏主视觉图 | `"images/mini.png"` |
| `hero.slogan` | 标语，可用 `<br>` 换行 | `"缅怀逝者，致敬英雄，铭记国殇"` |
| `hero.sinceLabel` | 计时前的说明文字 | `"2008年5月12日14时28分04秒"` |
| `hero.since` | **计时起点**，必须带时区 | `"2008-05-12T14:28:04+08:00"` |
| `hero.counter.enabled` | 是否显示计时器 | `true` |
| `hero.counter.prefix` | 计时器前缀 | `"已有"` |
| `hero.counter.units` | 年/天/时/分/秒 文字 | `{ year:"年", ... }` |
| `note` | 首屏标题下的一段寄语（支持 HTML） | `"愿逝者安息，生者坚强。"` |
| `footer.copyright` | © 后的文字 | `"5.12汶川大地震"` |
| `footer.author.text` | 署名文字 | `"龙哥出品"` |
| `footer.author.url` | 署名链接，留空则纯文本 | `"https://long.ge"` |
| `footer.author.logo` | 署名小图标，留空则不显示 | `"images/long.svg"` |
| `analytics.baidu` | 百度统计 ID，留空不加载 | `"f580d083..."` |

> **计时器注意**：`since` 请写成 `2020-01-01T00:00:00+08:00` 这种带时区的 ISO 格式。
> 只写 `2020/01/01` 在部分浏览器会被当成本地时间，跨时区访问会有偏差。
> 若不需要计时，把 `hero.counter.enabled` 设为 `false`。

---

## 四、改正文：`js/content.js`

结构只有三块：

```js
window.PAGE_CONTENT = {
  intro: {
    title: "5·12汶川地震",          // 正文最上方的百科式大标题
    paragraphs: [                    // 简介段落，按顺序渲染
      "第一段……",
      "第二段……",
    ],
    facts: [                         // 基本信息表（自动分成左右两列）
      { name: "中文名：", value: "5·12汶川地震" },
    ],
  },

  sections: [                        // 正文分节：每一节对应一个目录项 + 右侧菜单项
    {
      id: "item0",                   // 锚点 id，保持 item0、item1… 递增
      title: "地震背景",              // 目录/菜单显示的章节名
      html: `
        <h3><i class="fa fa-play"></i> 地质构造</h3>
        <div class="content">
          <p>正文段落……</p>
          <div align="center" class="tupian">
            <img src="images/xxx.jpg" />
            <br />
            <span style="font-size:12px;">图片说明</span>
          </div>
        </div>
      `,
    },
  ],
};
```

要点：

1. **加一节**：在 `sections` 里追加一个对象，`id` 用下一个序号（如 `item9`），`title` 写章节名，菜单和目录会**自动更新**，不需要再改 HTML。
2. **删一节**：直接删掉该对象即可；`id` 不必连续。
3. **小节标题**用 `<h3>`（二级小节用 `<h4>`），前面加 `<i class="fa fa-play"></i>` 与整体风格一致。
4. **图片**放进 `images/`，用相对路径 `images/xxx.jpg` 引用；图片会自动套用“黑白→悬停变彩色”的滤镜。
5. `html` 里用的是反引号模板字符串，**正文中不要出现反引号 `` ` `` 和 `${`**（出现的话写成 `\``、`\${`）。
6. 正文很长时建议拆成多节，别写成一个巨型 `html`。

---

## 五、部署到 Cloudflare Pages（三种方式，任选其一）

### 方式 A：Git 集成（最推荐，推代码即自动部署）

1. 把本仓库推到 GitHub（见第六节）。
2. 打开 <https://dash.cloudflare.com> → 左侧 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
3. 授权 GitHub，选中你的仓库。
4. 构建设置按下表填写（**本模板无需构建**）：

   | 设置项 | 填写值 |
   | --- | --- |
   | Project name | 随便起，如 `memo-512`（会成为 `memo-512.pages.dev`） |
   | Production branch | `main` |
   | Framework preset | `None` |
   | Build command | **留空** |
   | Build output directory | `/`（或留空） |
   | Root directory | `/`（留空即可） |

5. 点 **Save and Deploy**，约 30 秒后拿到 `https://xxx.pages.dev`。
6. 之后每次 `git push`，Cloudflare 会自动重新部署；每次 PR 还会生成预览环境。

### 方式 B：Wrangler 命令行直接上传（不想用 Git 时）

```bash
npx wrangler login
npx wrangler pages deploy . --project-name=memo-512
```

首次会提示创建项目，之后一条命令即发布。适合只在本机改、不想走 GitHub 的场景。

### 方式 C：控制台拖拽上传（最快验证）

Cloudflare 控制台 → Workers & Pages → Create → Pages → **Upload assets** → 把整个文件夹拖进去即可。
缺点：后续每次更新都要手动重传，不适合长期维护。

### 绑定自定义域名

Pages 项目 → **Custom domains** → 添加域名（如 `512.long.ge`）→ 按提示在 Cloudflare DNS 加一条 CNAME 记录指向 `xxx.pages.dev`（域名也在 Cloudflare 托管时是一键完成）。
若域名不在 Cloudflare，需在域名商处把 DNS 指向 Cloudflare 或直接加 CNAME。

---

## 六、把这个仓库做成「模板仓库」

推到 GitHub 后：

1. 仓库 → **Settings** → 勾选 **Template repository**。
2. 之后仓库页面顶部会出现绿色 **Use this template** 按钮。

使用者流程（**以后只需 3 步**）：

1. 点 **Use this template** → **Create a new repository**（或直接 Fork）。
2. 克隆下来，改 `config.js` 和 `js/content.js`（想换图就替换 `images/` 里的文件）。
3. 在 Cloudflare Pages 里连一次这个新仓库 → 自动上线。以后改内容只要 push。

> 小技巧：把 `config.js` 里的示例值改成占位注释（如 `你的标题`），并在 README 顶部加一句「使用前请先改 config.js」，能显著降低使用者漏改的概率。

---

## 七、首次推送 GitHub 的命令

```bash
cd memorial-page-template

git init
git add .
git commit -m "init: memorial page template"

# 先在 GitHub 新建一个空仓库（不要勾选 README/gitignore）
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

推送后进入仓库 **Settings → Template repository** 打勾（可选，但推荐）。

---

## 八、多站点复用建议

| 场景 | 做法 |
| --- | --- |
| 一套模板做多个纪念页 | 每个页面一个 fork，各自连一个 Cloudflare Pages 项目（免费额度足够） |
| 同一主题多语言 | 复制一份 `index.html` + `config.en.js` / `content.en.js`，放在 `/en/` 下，用相对路径引用同一套 `css`、`images` |
| 想改成浅色主题 | 改 `css/style.css` 里 `body{background}` 与 `#app{color}`，再调 `h2`/`p` 的 `color` |
| 想加备案号 | 在 `config.js` 的 `footer.author.text` 里追加，或直接在 `index.html` 页脚 `<ul>` 后加一行 |

---

## 九、常见问题

**Q1. 线上打开是白屏 / 只有骨架？**
脚本没加载成功。检查 `index.html` 里四个 `<script>` 顺序是否被改动：`config.js` → `js/content.js` → `js/render.js` → `js/app.js`，且路径与实际文件一致（Cloudflare Pages 是大小写敏感的）。

**Q2. 改了内容但线上没变？**
Cloudflare Pages 默认缓存 HTML 较短，`js/*` 可能被浏览器缓存。强制刷新（Ctrl+F5）或在 URL 后加 `?v=2` 验证。真机排查可在控制台 → Caching → Purge Everything。

**Q3. 计时器显示不对？**
`hero.since` 没写时区，或写成了 `2020/01/01`。改为 `2020-01-01T00:00:00+08:00`。注意本模板的“年”按 365 天折算（与原版一致），跨闰年会差一天左右，属正常。

**Q4. 图片不显示？**
`images/` 没一起上传，或文件名大小写不一致。Cloudflare Pages 对大小写敏感，Linux 本地预览才会暴露该问题。

**Q5. 大陆访问慢？**
Cloudflare Pages 的 `*.pages.dev` 在国内访问不稳定。绑定自己的域名并开启 Cloudflare 代理后通常能改善；若仍不理想，可考虑把静态文件同步一份到国内对象存储/CDN。

**Q6. 要不要保留百度统计？**
模板默认 `analytics.baidu` 为空、不加载任何第三方脚本。填上你自己的统计 ID 即可，别沿用示例里的他人的 ID。

**Q7. 想彻底去掉右侧悬浮菜单？**
删掉 `index.html` 里 `<div id="menu">…</div>` 整块，并删除 `js/app.js` 的引用；目录（`#catalog-wrap`）会保留。

---

