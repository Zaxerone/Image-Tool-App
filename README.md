# Image Tool App

As it's name says, it's just a simple image tool app made for non-developers. Actually only capable of converting images into another format (eg. WebP -> PNG).

# Summary

1. [Functions](#functions)
   - [Conversion](#conversion)
     - [Supported Formats](#supported-formats)
2. [Development](#development)
   - [Requirements](#requirements)
     - [Packages](#packages)
     - [Platforms](#platforms)
   - [Build](#build)

# Functions

## Conversion

The conversion is done with [Sharp](https://sharp.pixelplumbing.com), so the formats supported are necessarily those supported by the tool.

### Supported formats

- JPEG
- PNG
- WebP
- GIF
- AVIF
- TIFF
- SVG

# Development

## Requirements

### Packages

- **Sharp** (v0.33.2)
- **Electron** (v29.1.4)

### Platforms

- **Node.js** (v20.11.1 or newer)

## Build

```sh
git clone https://github.com/Zaxerone/Image-Tool-App.git
cd Image-Tool-App
npm install
```
