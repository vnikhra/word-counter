import * as fs from "fs";
import { countWords } from "./index";

describe("countWords function", () => {
  test("should count words in a file stream", async () => {
    // Create a temporary file stream with some text
    const fileContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem  dolor sit , consectetur  elit.";
    const tempFilePath = "temp.txt";
    fs.writeFileSync(tempFilePath, fileContent);
    const fileStream = fs.createReadStream(tempFilePath);

    // Call countWords function
    const wordCounts = await countWords(fileStream);

    // Verify word counts
    expect(wordCounts).toEqual({
      Lorem: 2,
      ipsum: 1,
      dolor: 2,
      sit: 2,
      amet: 1,
      consectetur: 2,
      adipiscing: 1,
      elit: 2,
      Sed: 1,
      do: 1,
      eiusmod: 1,
      tempor: 1,
      incididunt: 1,
      ut: 1,
      labore: 1,
      et: 1,
      dolore: 1,
      magna: 1,
      aliqua: 1,
    });

    // Clean up: remove the temporary file
    fs.unlinkSync(tempFilePath);
  });

  test("should handle empty file stream", async () => {
    // Create an empty file stream
    const tempFilePath = "temp.txt";
    fs.writeFileSync(tempFilePath, "");
    const fileStream = fs.createReadStream(tempFilePath);

    // Call countWords function
    const wordCounts = await countWords(fileStream);

    // Verify word counts
    expect(wordCounts).toEqual({});
  });

  test("should handle error", async () => {
    // Create a file stream with non-existing file
    const fileStream = fs.createReadStream("nonexistent.txt");

    // Call countWords function and expect it to reject with an error
    await expect(countWords(fileStream)).rejects.toThrow(
      "ENOENT: no such file or directory",
    );
  });
});
