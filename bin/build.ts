import { spawnSync } from 'child_process';
import path from 'path';

const scalarPath = path.resolve('scalar');
const scalarApiClientPath = path.join(scalarPath, 'packages', 'api-client');
const scalarComponentsPath = path.join(scalarPath, 'packages', 'components');
const scalarBuildToolingPath = path.join(scalarPath, 'packages', 'build-tooling');



// console.log('开始构建scalar build-tooling，因为components依赖它');
// spawnSync('npm run build', {
//   cwd: scalarBuildToolingPath, // 关键：使用 cwd 指定工作目录
//   stdio: 'inherit', // 继承父进程的输入输出（显示日志）
//   shell: true, // 允许使用 shell 语法（如 &&、> 等）
// });

// console.log('开始构建scalar components，因为api-client依赖它');
// spawnSync('npm run build', {
//   cwd: scalarComponentsPath, // 关键：使用 cwd 指定工作目录
//   stdio: 'inherit', // 继承父进程的输入输出（显示日志）
//   shell: true, // 允许使用 shell 语法（如 &&、> 等）
// });


// console.log('开始构建scalar api-client，因为reference依赖它');
// spawnSync('npm run build', {
//   cwd: scalarApiClientPath, // 关键：使用 cwd 指定工作目录
//   stdio: 'inherit', // 继承父进程的输入输出（显示日志）
//   shell: true, // 允许使用 shell 语法（如 &&、> 等）
// });

console.log('开始构建scalar reference');
spawnSync('npm run build:api-reference', {
  cwd: scalarPath, // 关键：使用 cwd 指定工作目录
  stdio: 'inherit', // 继承父进程的输入输出（显示日志）
  shell: true, // 允许使用 shell 语法（如 &&、> 等）
});

