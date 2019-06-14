# Contributing

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/guastallaigor/vue-tiez/issues)

Thanks for your interest in contributing to Vue Tiez! ❤️ 

**Please ask first before starting work on any significant new features!**

The main goal right now is that we have all the components and sections from [Zeit Design System][zeit-design]

## Coding standards

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/standard/standard)

We also follow [Stylelint][stylelint] / [Stylelint Config Standard][stylelint-config-standard]

You can use `yarn run stylelint` and `yarn run stylelint:vue` to check if there's anything wrong regarding the lint

## Basic information

* Project setup?
  [We've got you covered!](#project-setup)
  
* Found a bug?
  [Let us know!][new-issue]

* Patched a bug?
  [Make a PR!][new-pr]

* Adding a new feature?
  Make sure to [open an issue][new-issue] describing your feature, then open a [new PR][new-pr] when you're ready for feedback!

* Commit formatting
  [Commitizen/Commitlint](#commit-formatting)

## Project setup

The following steps will get you up and running:

1. Fork and clone the repo
```sh
$ git clone https://github.com/YOUR_GITHUB_USERNAME/vue-tiez.git
```
2. Install the required dependencies:
```sh
$ cd vue-tiez
$ yarn
```

### Storybook
For visual testing, this project contains storybook which you can run by doing the next command
```sh
$ yarn storybook
```

### Jest
Before making the PR, if you changed or added something that needs to be tested, please make the tests inside the `tests/unit` folder

To run the tests, you can use the next command

```sh
$ yarn test:unit
```

To develop using tests, you can use this command also

```sh
$ yarn test:watch
```

## Commit formatting

We use [Commitizen][commitizen] and [`commitlint`][commitlint] to make sure all of the commits to the project are easy to read

You can commit using `npm run commit` to help you with that

There's a `pre-push` hook that runs all the unit tests before you can push it

If an error occurs, you can use the `npm run commit:retry` command that runs the previous `npm run commit` that you already filled




[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/conventional-changelog/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/guastallaigor/vue-tiez/issues/new/choose
[new-pr]: https://github.com/guastallaigor/vue-tiez/compare/master...master
[zeit-design]: https://zeit.co/design
[stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
