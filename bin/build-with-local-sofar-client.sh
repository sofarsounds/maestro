#!/bin/bash
set -e

CURRENT_DIR=${PWD##*/}

if [[ $CURRENT_DIR != 'maestro' ]]; then
  echo "ERROR: You must be in the maestro/ directory to run this script (not in any subdirectories)";
  exit 0;
fi

###############
# maestro - Register maestro/react/react-dom/styled-components with yarn-link
###############

yarn install
yarn build
yarn link
cd node_modules/react
yarn link
cd ../react-dom
yarn link
cd ../styled-components
yarn link

###############
# sofar-client - Create the links in sofar-client
###############

cd ../../../sofar-client

yarn link "@sofarsounds/maestro"
yarn link "react"
yarn link "react-dom"
yarn link "styled-components"

echo 'DONE'
