<h1 align="center">Scalar I18n</h1>

<div align="center">

![GitHub watchers](https://img.shields.io/github/watchers/dingshaohua-com/scalar-i18n?style=social) ![GitHub stars](https://img.shields.io/github/stars/dingshaohua-com/scalar-i18n?style=social) ![GitHub forks](https://img.shields.io/github/forks/dingshaohua-com/scalar-i18n?style=social)
<br />
![node](https://img.shields.io/node/v/koa?style=flat-square)
<br />
![GitHub repo size](https://img.shields.io/github/repo-size/dingshaohua-com/scalar-i18n?style=flat-square) 
![GitHub package.json version](https://img.shields.io/github/package-json/v/dingshaohua-com/scalar-i18n?style=flat-square) 
![GitHub](https://img.shields.io/github/license/dingshaohua-com/scalar-i18n?style=flat-square) 
![GitHub open issues](https://img.shields.io/github/issues/dingshaohua-com/scalar-i18n?style=flat-square) 
![GitHub closed issues](https://img.shields.io/github/issues-closed/dingshaohua-com/scalar-i18n) 
![GitHub last commit](https://img.shields.io/github/last-commit/dingshaohua-com/scalar-i18n?style=flat-square) 
![GitHub top language](https://img.shields.io/github/languages/top/dingshaohua-com/scalar-i18n?style=flat-square)

</div>


## 介绍 Introduction
本项目用于将 [scalar](https://github.com/scalar/scalar) 的 api-reference 界面进行本地语言化，并且打包成浏览器可直接使用的版本，且实时与 [scalar](https://github.com/scalar/scalar) 保持同步。

This project is used to localize the api-reference interface of [scalar](https://github.com/scalar/scalar) into local languages, package it into a browser-ready version, and keep it synchronized with [scalar](https://github.com/scalar/scalar) in real-time.

## 使用 Usage
```bash
pnpm i
npm run full-task
```
您也可不必自行打包，直接使用构建好的产物，产物在根目录的 scalar-api-reference.js 文件中。

You don't have to build it yourself. You can directly use the pre-built artifact, which is located in the `scalar-api-reference.js` file in the root directory.

## 注意 Notes
想要改成您国家的语言，请在`bin/local`目录内添加您国家的语言！   
最后再将`replace-task.ts`中的`const conf = zhCn`该为您的语言配置文件即可！

如果大家都积极参与此项目，后续我将会将大家的语言文件都内置其中，并构建多语言版本的产物！

To change to your country's language, please add your country's language file in the `bin/local` directory!   
Finally, change `const conf = zhCn` in `replace-task.ts` to your language configuration file!

If everyone actively participates in this project, I will integrate all language files and build multi-language versions of the artifacts in the future!

![](https://github.com/dingshaohua-com/scalar-i18n/blob/main/preview/1.avif)   
![](https://github.com/dingshaohua-com/scalar-i18n/blob/main/preview/2.avif)
