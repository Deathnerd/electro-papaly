# Electro-Papaly
A simple Electron Wrapper for the Papaly bookmark manager

## Features
- Opens your bookmark links in your system default browser

## Build
Run the following:
```powershell
yarn # to install the packages
npm run package # Packages the executable into electro-papaly.zip
```

Unzip `electro-papaly.zip` into whatever place you want the program to reside, e.g: `C:\Program Files\ElectroPapaly\`

To package for platforms other than Windows x64, change the `electron-packager` section of the `scripts.package` part of the `package.json`. See [electron-packager](https://github.com/electron/electron-packager) for more information.