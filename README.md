# 🎻 Maestro - Sofar's UI Kit

This repo holds Sofar's UI component library. It is arranged in a [monorepo structure](https://codeburst.io/monorepos-by-example-part-1-3a883b49047e) using the open source package [Lerna](https://github.com/lerna/lerna).

Lerna allows you to place arrange multiple projects, each with their own `package.json` file (and differing dependencies) in the same repository tree. Lerna specifies that your individual packages belong in the `packages/` folder.

You can create a new package via Lerna's CLI by running:

```
lerna create @sofarsounds/my-package
```

Lerna allows you to move shared dependencies from multiple `package.json` files to the top level `package.json` via `hoisting`.

# Conventions

As you see above, we want to get into a habit of namespacing our package names with our organisational name (`@sofarsounds`) on NPM.

So if you are creating a new package (whether or not it will end up on the NPM registry), please use the naming convention:

```
@sofarsounds/my-package-name
```

You can find the `@sofarsounds` org on the NPM repository at [https://www.npmjs.com/~sofarsounds](https://www.npmjs.com/~sofarsounds)


# Best practices

- When developing new UI components, you should use `storybook` to develop the components. This will allow you to develop UI components in an isolated environment without worrying about global CSS impacting the look and feel of the components. You can run the storybook from the root of this repo by running `yarn run storybook`.

# First time setup

To setup this project, run:

```
yarn bootstrap
```

Then to run all of the projects, run:

```
yarn start
```

# To run storybook on the UI Kit

Run:

```
yarn run storybook
```
