# Image Tool App

As its name suggests, this is a simple image tool app designed for non-developers. Currently, it can only convert images into another format (e.g., WebP to PNG).

![electron_hd4Ql24s6l](https://github.com/Zaxerone/Image-Tool-App/assets/46900584/1d2da86d-0f74-4b3d-a0bc-2c6446543cd2)

# Table of contents

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

The conversion is done with [Sharp](https://sharp.pixelplumbing.com), so the supported formats are necessarily those supported by the tool.

# Installing

**THERE'S NO RELEASE YET.**

### Supported formats

> <picture>
>   <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/light-theme/note.svg">
>   <img alt="Note" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/note.svg">
> </picture><br>
>
> These supported formats are for CONVERSION only and may differ from the formats supported for imports. Please refer to the [format file](./formats.js) for import formats.

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

> <picture>
>   <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/light-theme/error.svg">
>   <img alt="Error" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/error.svg">
> </picture><br>
>
> Your package-manager must be UP-TO-DATE or it will result in an error.

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
