# 部署说明

## 服务器
- Jenkins 服务器需要安装 nodejs
- 部署服务器需要 nginx

## 步骤
- 在 Jenkins build 服务器上 git clone 仓库 https://github.com/magnumwm/web-2.1.git
- cd 到 ./web-2.1 文件夹
- git checkout 选择 develop 分支
- 执行命令 `npm install` （第一次需要安装大量 npm 包，应该很慢，第二次有 node_modules 文件夹后，这步应该很快）
- 执行命令 `npm run build`
- cd 到 dist 文件夹
- 将dist目录下所有文件复制到服务器对应目录

## Jenkins一键部署
- 仓库 https://github.com/magnumwm/web-2.1.git
- 文件复制到服务器地址 /data/instal/web-2.1
- web服务器地址 /data/release/web-2.1

## 回滚步骤
- 后续讨论
