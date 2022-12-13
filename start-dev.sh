#!/usr/bin/env bash

cd web-client; npm ci; npm run start &
react_app_ps=$!
cd ../server; npm ci; npm run dev
node_app_ps=$!

echo "don't forget to kill the processes when finished!"
echo react_app_ps
echo node_app_ps

