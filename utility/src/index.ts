// @ts-ignore
import { toString } from "qrcode";

interface Args {
  command?: string;
  text?: string;
  size?: number;
}

function parseArgs(): Args {
  const args = process.argv.slice(2);
  const result: Args = {};

  if (args.length === 0) return result;

  if (args[0] === "generate") {
    result.command = "generate";

    const sizeIndex = args.indexOf("--size");

    if (sizeIndex !== -1) {
      result.size = Number(args[sizeIndex + 1]);
      if (isNaN(result.size) || result.size <= 0) {
        console.error("Ошибка: Размер должен быть положительным числом.");
        process.exit(1);
      }
    }

    const textArgs = sizeIndex === -1 ? args.slice(1) : args.slice(1, sizeIndex);
    result.text = textArgs.join(" ").trim();
  }

  return result;
}

async function generateQRCode(text: string, size: number = 4): Promise<void> {
  try {
    const opts = {
      type: "terminal",
      margin: 1,
      width: size * 8
    };

    const qr = await toString(text, opts);
    console.log(qr);
  } catch (error) {
    console.error("Ошибка генерации QR-кода:", error);
    process.exit(1);
  }
}

async function main() {
  const { command, text, size } = parseArgs();

  if (command !== "generate") {
    console.error("Ошибка: Неизвестная команда. Используйте 'generate <text> [--size <number>]'.");
    process.exit(1);
  }

  if (!text) {
    console.error("Ошибка: Укажите текст или ссылку.");
    process.exit(1);
  }

  await generateQRCode(text, size);
}

main();
