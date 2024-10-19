// Функция для цветного логировани

import chalk from "chalk";

export default function logInfo(level: Level, message: string) {
  switch (level) {
    case "info":
      console.log(chalk.blue(`[INFO] ${message}`));
      break;
    case "warn":
      console.warn(chalk.yellow(`[WARN] ${message}`));
      break;
    case "error":
      console.error(chalk.red(`[ERROR] ${message}`));
      break;
    case "success":
      console.log(chalk.green(`[SUCCESS] ${message}`));
      break;
    case "debug":
      console.log(chalk.cyan(`[DEBUG] ${message}`));
      break;
    default:
      console.log(message); // Логируем обычные сообщения без цвета
      break;
  }
}

type Level = "info" | "warn" | "error" | "success" | "debug";
