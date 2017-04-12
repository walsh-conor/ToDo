App.info({
  id: 'com.conor-walsh',
  name: 'To-Do',
  description: 'To-Do List App',
  author: 'Conor Walsh',
  email: 'cw.conorwalsh@gmail.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  'android_ldpi': 'resources/icons/app-icon-36.png',
  'android_mdpi': 'resources/icons/app-icon-48.png',
  'android_hdpi': 'resources/icons/app-icon-72.png',
  'android_xhdpi': 'resources/icons/app-icon-96.png',
  'android_xxhdpi': 'resources/icons/app-icon-144.png',
  'android_xxxhdpi': 'resources/icons/app-icon-192.png'
});

App.launchScreens({
  'android_ldpi_portrait': 'resources/splash/logo.png',
  'android_ldpi_landscape': 'resources/splash/logo.png',
  'android_mdpi_portrait': 'resources/splash/logo.png',
  'android_mdpi_landscape': 'resources/splash/logo.png',
  'android_hdpi_portrait': 'resources/splash/logo.png',
  'android_hdpi_landscape': 'resources/splash/logo.png',
  'android_xhdpi_portrait': 'resources/splash/logo.png',
  'android_xhdpi_landscape': 'resources/splash/logo.png'
});

App.accessRule('*');