import type { ConfigContext, ExpoConfig } from 'expo/config';

type AppVariant = 'development' | 'preview' | 'production';

interface VariantConfig {
  appName: string;
  bundleIdentifier: string;
}

const VARIANT_CONFIGS: Record<AppVariant, VariantConfig> = {
  development: {
    appName: '【Dev】sample-expo-sdk56',
    bundleIdentifier: 'com.sample.expo.sdk56.dev',
  },
  preview: {
    appName: '【Preview】sample-expo-sdk56',
    bundleIdentifier: 'com.sample.expo.sdk56.preview',
  },
  production: {
    appName: 'sample-expo-sdk56',
    bundleIdentifier: 'com.sample.expo.sdk56',
  },
};

/**
 * Resolve the app configuration for the current environment variant.
 */
const getVariantConfig = (): VariantConfig => {
  const variant = process.env.APP_VARIANT as AppVariant | undefined;
  return VARIANT_CONFIGS[variant ?? 'production'];
};

const variantConfig = getVariantConfig();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: variantConfig.appName,
  slug: 'sample-expo-sdk56',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'sampleexposdk56',
  userInterfaceStyle: 'automatic',
  ios: {
    icon: './assets/expo.icon',
    bundleIdentifier: variantConfig.bundleIdentifier,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#E6F4FE',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
    predictiveBackGestureEnabled: false,
    package: variantConfig.bundleIdentifier,
  },
  web: {
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#208AEF',
        image: './assets/images/splash-icon.png',
        imageWidth: 76,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    eas: {
      projectId: '542a9a8a-d4a6-419f-856a-7d570db0da91',
    },
  },
});
