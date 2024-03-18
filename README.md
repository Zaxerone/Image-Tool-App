# Image Tool App

As it's name says, it's just a simple image tool app made for non-developers. Actually only capable of converting images into another format (eg. WebP -> PNG).

# Summary

- [Functions](#functions)

  - [Conversion](#conversion)
    - [Supported Formats](#supported-formats)

- [Installing](#installing)

  - [Development](#development)

- [Requirements](#requirements)
  - [Packages](#packages)
  - [Platforms](#platforms)
- [Build](#build)

# Functions

## Conversion

The conversion is done with [Sharp](https://sharp.pixelplumbing.com), so the formats supported are necessarily those supported by the tool.

# Installing

**THERE'S NO RELEASE YET.**

### Supported formats

> These supported formats are for CONVERSION and not for IMPORTS. To see for the imports, please see the <a href="./formats.js">format File</a>.

- JPEG
- PNG
- WebP
- GIF
- AVIF
- TIFF

# Development

## Requirements

### Packages

- **Sharp** (v0.33.2 or newer)
- **Electron** (v29.1.4 or newer)

### Platforms

- **Node.js** (v20.11.1 or newer)

## Build

```sh
git clone https://github.com/Zaxerone/Image-Tool-App.git
cd Image-Tool-App
npm install
```

You can start it by running the `start` script.

```
npm run start
```
