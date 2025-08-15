
import { execSync, spawnSync } from 'child_process';
import path from 'path';
import fs from 'fs';
// import { rm } from 'fs/promises';   // ESM
import fastRm from './fast-rm'

// 删除 scalar 目录（如果存在）
const scalarDir = path.resolve('scalar');
await fastRm(scalarDir)

// fs.promises.rm（异步）删除大目录通常比 fs.rmSync（同步）快 2～5 倍，原因：
// 异步并发：Node.js 内部会把 IO 操作并行化，而同步方法只能串行。
// 事件循环不阻塞：同步删除时会一直占用主线程，异步让出 CPU，整体吞吐量更高。
// 系统级优化：底层 uv_fs 线程池可并发发起系统调用。
// console.log('删除旧仓库');
// try {
//   await rm(scalarDir, {
//     recursive: true,   // 递归删除目录
//     force: true        // 路径不存在时不抛错
//   });
//   console.log('删除完成');
// } catch (err) {
//   console.error('删除失败:', err);
// }

// // fs.rmSync(scalarDir, { recursive: true, force: true });

// 直接拿到 stdout 字符串
console.log('开始克隆仓库');
const output = execSync('git clone --depth 1 https://github.com/scalar/scalar.git ', { encoding: 'utf8' });
console.log(output);


console.log('安装scalar项目依赖');
const scalarPath = path.resolve('scalar');
spawnSync('pnpm i', {
  cwd: scalarPath, // 关键：使用 cwd 指定工作目录
  stdio: 'inherit', // 继承父进程的输入输出（显示日志）
  shell: true, // 允许使用 shell 语法（如 &&、> 等）
});
