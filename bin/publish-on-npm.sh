#!/bin/bash
set -e

echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/repo/.npmrc

npm publish --access public
