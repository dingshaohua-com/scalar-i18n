// fast-rm.ts
import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import process from 'process';

export interface FastRmOptions {
  /** 路径不存在时不抛错，默认 true */
  force?: boolean;
  /** 系统命令失败后回退到 fs.promises.rm，默认 true */
  fallback?: boolean;
}

/**
 * 跨平台极速删除文件/目录
 * @param target 要删除的路径
 * @param opts 可选配置
 */
export default async function fastRm(
  target: string,
  opts: FastRmOptions = {}
): Promise<void> {
  const { force = true, fallback = true } = opts;
  const abs = path.resolve(target);

  // 路径不存在且 force=true 时直接返回
  try {
    await fs.access(abs);
  } catch (err: any) {
    if (force) return;
    throw err;
  }

  // 1) 系统级删除
  try {
    if (process.platform === 'win32') {
      execSync(`rmdir /s /q "${abs}"`, { stdio: 'inherit' });
    } else {
      execSync(`rm -rf "${abs}"`, { stdio: 'inherit' });
    }
  } catch (sysErr) {
    if (fallback) {
      // 2) 回退到 Node 异步删除
      await fs.rm(abs, { recursive: true, force: true });
    } else {
      throw sysErr;
    }
  }
}