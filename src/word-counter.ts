import * as fs from "fs";

export async function countWords(
  fileStream: fs.ReadStream,
): Promise<{ [word: string]: number }> {
  const wordCounts: { [word: string]: number } = {};

  await new Promise<void>((resolve, reject) => {
    fileStream.on("data", (chunk: Buffer) => {
      const lines = chunk.toString().split("\n");

      lines.forEach((line) => {
        const words = line
          .trim()
          .replace(/[^\w\d\s]/g, "")
          .split(/\s+/);

        words.forEach((word) => {
          if (word !== "") {
            // Exclude empty strings after punctuation removal
            wordCounts[word] = (wordCounts[word] || 0) + 1;
          }
        });
      });
    });

    fileStream.on("end", () => {
      resolve();
    });

    fileStream.on("error", (err) => {
      reject(err);
    });
  });

  return wordCounts;
}
