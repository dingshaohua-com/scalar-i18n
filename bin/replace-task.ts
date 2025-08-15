import conf from "./conf";
import path from "path";
import fs from "fs";

// export default () => {
  console.log('执行替换');
  // 替换指定文件中的字段
  conf.forEach((item) => {
    const filePath = path.resolve('scalar', item.file);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      console.warn(`文件不存在: ${filePath}`);
      return;
    }

    try {
      // 读取文件内容
      let fileContent = fs.readFileSync(filePath, "utf8");
      let hasChanges = false;

      // 处理普通字段替换
      if (item.fields) {
        item.fields.forEach((field) => {
          if (fileContent.includes(field.oldStr)) {
            fileContent = fileContent.replace(
              new RegExp(field.oldStr, "g"),
              field.newStr
            );
            hasChanges = true;
            console.log(
              `✓ 替换成功: ${field.oldStr} -> ${field.newStr} (${item.file})`
            );
          } else {
            console.warn(`⚠ 未找到字符串: ${field.oldStr} (${item.file})`);
          }
        });
      }

      // 处理插入类型的操作
      if (item.type === "insert" && item.line && item.content) {
        const lines = fileContent.split("\n");
        lines.splice(item.line - 1, 0, item.content);
        fileContent = lines.join("\n");
        hasChanges = true;
        console.log(`✓ 插入成功: 在第 ${item.line} 行插入内容 (${item.file})`);
      }

      // 如果有变更，写回文件
      if (hasChanges) {
        fs.writeFileSync(filePath, fileContent, "utf8");
        console.log(`📝 文件已更新: ${item.file}`);
      }
    } catch (error) {
      console.error(`❌ 处理文件时出错 ${item.file}:`, error);
    }
  });

  console.log("\n🎉 所有文件处理完成！");
// };
