#!/bin/bash
set -e

yarn build
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/repo/.npmrc

npm publish --tag beta
