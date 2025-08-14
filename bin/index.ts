import { execSync } from 'child_process';

// 直接拿到 stdout 字符串
const output = execSync('git -v ', { encoding: 'utf8' });
console.log(output);