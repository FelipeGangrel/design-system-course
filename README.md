# Design System

## Docs package

You can append `--use-npm` to use npm instead of yarn.

```bash
npx sb init --builder @storybook/builder-vite --type react
```

### Tips:

If you encounter the error code: `ERR_OSSL_EVP_UNSUPPORTED` when running `yarn dev` or `yarn build`, you can try running the following command on the terminal:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```


## Components

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep
