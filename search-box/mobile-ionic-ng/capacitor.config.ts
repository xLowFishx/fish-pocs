import type { CapacitorConfig } from '@capacitor/cli';

// Capacitor is the native runtime layer.
// It wraps the compiled web app from /www inside a real iOS project when we add/sync the ios platform.
const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mobile-ionic-ng',
  webDir: 'www',
};

export default config;
