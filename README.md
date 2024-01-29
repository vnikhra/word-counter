# Word Counter

Word Counter is a TypeScript library that provides a function to count the frequency of words in a file stream.

## Installation

You can install the Word Counter library via npm:

```bash
npm install @vnikhra/word-counter
```

## Usage

### Importing

You can import the `countWords` function from the Word Counter library in your TypeScript code as follows:

```typescript
import { countWords } from '@vnikhra/word-counter';
```

### Function Signature

The `countWords` function takes a file stream as input and returns an object with the frequency of each word in the stream.

```typescript
countWords(fileStream: fs.ReadableStream): Promise<{ [word: string]: number }>;
```

### Example

Here's an example of how to use the `countWords` function:

```typescript
import { createReadStream } from 'fs';
import { countWords } from 'word-counter';

const fileStream = createReadStream('example.txt');
countWords(fileStream)
    .then(wordFrequency => {
        console.log('Word Frequency:', wordFrequency);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on GitHub.

## Build Locally

To build this library locally, you will need to have node installed on your system. I would  recommend using NVM.

### Install dependencies

Install dependencies using
```shell
npm i
```

### Build Project

Build project locally using
```shell
npm run build
```

Code will be available at `build/index.js`

### Run tests

Run Tests using
```shell
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
