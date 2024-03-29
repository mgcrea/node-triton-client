# Triton Client

<!-- markdownlint-disable MD033 -->
<p align="center">
  <a href="https://www.npmjs.com/package/@mgcrea/triton-client">
    <img src="https://img.shields.io/npm/v/@mgcrea/triton-client.svg?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/triton-client">
    <img src="https://img.shields.io/npm/dt/@mgcrea/triton-client.svg?style=for-the-badge" alt="npm total downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/triton-client">
    <img src="https://img.shields.io/npm/dm/@mgcrea/triton-client.svg?style=for-the-badge" alt="npm monthly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/triton-client">
    <img src="https://img.shields.io/npm/l/@mgcrea/triton-client.svg?style=for-the-badge" alt="npm license" />
  </a>
  <br />
  <a href="https://github.com/mgcrea/triton-client/actions/workflows/main.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/mgcrea/triton-client/main.yml?style=for-the-badge&branch=master" alt="build status" />
  </a>
  <a href="https://depfu.com/github/mgcrea/triton-client">
    <img src="https://img.shields.io/depfu/dependencies/github/mgcrea/triton-client?style=for-the-badge" alt="dependencies status" />
  </a>
</p>
<!-- markdownlint-enable MD037 -->

## Features

Typescript-ready client for [Triton Inference Server](https://github.com/triton-inference-server/server)

- Promise-based API.
- Relies on [@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader) to generate matching types.
- Built with [TypeScript](https://www.typescriptlang.org/) for static type checking with exported types along the library.

## Usage

```bash
npm install @mgcrea/triton-client --save
# or
pnpm add @mgcrea/triton-client
```

### Example

```ts
import { createClient } from "@mgcrea/triton-client";
import { formatWithOptions } from "node:util";

const client = createClient("localhost:8001");

const log = (...args: unknown[]) =>
  console.log(formatWithOptions({ depth: 10, colors: true }, ...args));

export const main = async () => {
  const live = await client.serverLive({});
  const ready = await client.serverReady({});
  const repositoryIndex = await client.repositoryIndex({});

  log({ live, ready, repositoryIndex });
};
```

## Authors

- [Olivier Louvignes](https://github.com/mgcrea) <<olivier@mgcrea.io>>

## License

```txt
The MIT License

Copyright (c) 2023 Olivier Louvignes <olivier@mgcrea.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
