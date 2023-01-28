# Design System Course

## Docs package

You can remove `--use-npm` to use yarn instead of npm.

```bash
npx sb init --builder @storybook/builder-vite --type react --use-npm
```

### Tips:

If you encounter the error code: `ERR_OSSL_EVP_UNSUPPORTED` when running `npm run dev` or `npm run build`, you can try running the following command on the terminal:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```


## Components

- [X] Text
- [X] Heading
- [X] Box
- [X] Button
- [X] TextInput
- [X] TextArea
- [X] Checkbox
- [X] Avatar
- [X] MultiStep
