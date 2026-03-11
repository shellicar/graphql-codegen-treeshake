# @shellicar/graphql-codegen-treeshake

> A graphql-codegen preset that tree-shakes unused types from TypeScript output

## Installation

```sh
pnpm add -D @shellicar/graphql-codegen-treeshake
```

## Quick Example

```ts
// codegen.ts
import { preset } from '@shellicar/graphql-codegen-treeshake';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/**/*.graphql',
  documents: ['src/**/requests.ts'],
  generates: {
    'src/lib/graphql/': {
      preset,
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
```

## Documentation

For full documentation, visit the [GitHub repository](https://github.com/shellicar/graphql-codegen-treeshake).
