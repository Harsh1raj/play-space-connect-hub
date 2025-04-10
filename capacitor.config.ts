
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.201235ae14d740de9edcc9dfdb1bdc75',
  appName: 'CricBuddies',
  webDir: 'dist',
  server: {
    url: 'https://201235ae-14d7-40de-9edc-c9dfdb1bdc75.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
      signingType: null,
    }
  }
};

export default config;
