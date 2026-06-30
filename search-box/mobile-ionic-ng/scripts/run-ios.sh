#!/usr/bin/env bash
set -euo pipefail

if [ ! -d "ios/App" ]; then
  echo "iOS platform not found yet. Adding it first..."
  pnpm exec cap add ios
fi

echo "Building Angular web assets for Capacitor..."
pnpm run build

echo "Syncing the web build into the native iOS project..."
pnpm exec cap sync ios

echo "Running the app on the selected iOS simulator/device..."
pnpm exec cap run ios
