#!/bin/bash
set -e

cd packages/uikit

echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/repo/packages/uikit/.npmrc

npm publish --access public
