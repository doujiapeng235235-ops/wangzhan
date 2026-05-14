# Cloudflare Pages 上线说明

## 推荐方式：GitHub + Cloudflare Pages

1. 把当前项目推送到 GitHub 仓库。
2. 打开 Cloudflare Dashboard，进入 `Workers & Pages`。
3. 选择 `Create application`，再选择 `Pages`。
4. 选择 `Connect to Git`，绑定 GitHub 仓库。
5. 构建配置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `australia-sponsor-nav`
   - Production branch: `main`
6. 部署完成后，先用 Cloudflare 提供的 `*.pages.dev` 地址检查全站。

## 备用方式：Direct Upload

如果暂时不用 GitHub，可以上传生成的 zip 包：

`deployment/australia-sponsor-nav-cloudflare-pages.zip`

上传位置：

`Workers & Pages` -> `Create application` -> `Pages` -> `Upload assets`

注意：zip 包根目录已经直接包含 `index.html`，不要再额外套一层文件夹。

## 绑定域名

1. 在 Cloudflare Pages 项目里进入 `Custom domains`。
2. 添加根域名，例如 `yourdomain.com`。
3. 再添加 `www.yourdomain.com`。
4. 如果域名不在 Cloudflare，需要按提示修改 DNS：
   - 根域名通常按 Cloudflare 提示接入 DNS 托管或添加对应记录。
   - `www` 子域名通常添加 CNAME，指向 Cloudflare Pages 的 `*.pages.dev` 地址。
5. 等待 HTTPS 证书自动签发，DNS 生效后测试两个地址。

## 上线前检查

```powershell
node --check australia-sponsor-nav\app.js
node --check australia-sponsor-nav\jobs.js
```

上线后检查：

- 首页、岗位数据库、职业库、CSOL 页面都能打开。
- 图片资源正常加载。
- 首页搜索能跳转 `jobs.html`。
- 岗位数据库筛选 186 / 482 正常。
- 手机宽度下无横向滚动。
