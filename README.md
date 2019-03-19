# eslint-config-plain-typescript

Plain config without any rules that makes ESLint working with typescript

## How to use.

- Install it as a dependency.

```
  yarn add eslint-config-plain-typescript
```

- Make sure you have `typescript` and `tsconfig.json` in root of the project

- Add in your `.eslintrc` extension like that:

```
"extends": ["plain-typescript"]
```

- After that your ESLint will start to parse all Typescript code.

## How to extend.

There is some rules that are not compatible with `js` so when you use them it's nice
to put the inside of the `override` object in your `.eslintrc` config like that.

```json5
{
  extends: ["airbnb", "plain-typescript"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        // These are rules that should apply to ts/tsx files only
        "@typescript-eslint/no-unused-vars": "error"
      }
    }
  ],
  rules: {
    // These are rules that go for both and are proven to not be conflicting
    "no-unused-vars": "error"
  }
}
```

Also please refer to the `typescript` [recommended config](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json) for more info about available rules and rules that are incompatible.

## Compatibility with other plugins

Few rules are incompatible and need special plugins/configs.
For example `plugin:import/typescript` is needed to be extended so `eslint-plugin-import` will start working properly
if you will extend `airbnb` preset for example etc.
It's described [here](https://github.com/benmosher/eslint-plugin-import#typescript) in detail.

## Note

Not 100% sure, but put it after all the other configs that you may import.
The only configs that you should extend after is `prettier` related stuff, others should go before this one I assume.
More on `prettier` integraion [here](https://github.com/prettier/eslint-config-prettier#installation)

## Depends on.

There three suckers gonna be installed along the way with installation.

```
  "dependencies": {
    "babel-eslint": "10.0.1",
    "@typescript-eslint/parser": "^1.4.2",
    "@typescript-eslint/eslint-plugin": "1.4.2"
  }
```

These two suckers should be installed separatly as `devDependencies`:

```
  "peerDependencies": {
    "eslint": ">=5.15",
    "typescript": "^>=3"
  }
```
