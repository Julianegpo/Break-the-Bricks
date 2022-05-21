
# Break the Bricks

[![Node JS page](https://img.shields.io/badge/node-v17.8.0-brightgreen?style=for-the-badge&logo=appveyor)](https://nodejs.org/)
[![npm page](https://img.shields.io/badge/npm-v8.5.5-green?style=for-the-badge&logo=appveyor)](https://www.npmjs.com/)
[![Typescript page](https://img.shields.io/badge/typescript-v4.6.4-blue?style=for-the-badge&logo=appveyor)](https://www.typescriptlang.org/)
[![Parcel page](https://img.shields.io/badge/parcel-v2.5.0-yellow?style=for-the-badge&logo=appveyor)](https://parceljs.org/)
[![rimraf npm page](https://img.shields.io/badge/rimraf-v3.0.2-yellowgreen?style=for-the-badge&logo=appveyor)](https://www.npmjs.com/package/rimraf)

[Play here!](https://julianegpo.github.io/break-the-bricks/)

![](assets%5Cimg%5Creadme%5Cgame-img.PNG)

# Table of content

1. [About the game](#about-the-game)
    1. [Input map](#input-map)
1. [Technology stack](#technology-stack)
1. [Setting up](#setting-up)
1. [Project structure](#project-structure)
1. [Sources](#sources)
1. [Gratitudes](#gratitudes)

# About the game

Mid-season project at CORE Code School.

The game is based on the world-famous-arcade game from 80s, Arkanoid!

## Input map

| Move          | Bar      |
| ------------- | -------- |
| Begin game    | Spacebar |
| Move right    | ➡        |
| Move left     | ⬅        |

# Technology stack

## Dependencies

In this project there are this dependencies:

- [Typescript](https://www.typescriptlang.org/)
- [Parcel](https://parceljs.org/)
- [Rimraf](https://www.npmjs.com/package/rimraf)

# Setting up

To initialize the project at your local, you must have installed `npm` and run

`npm install`. 

This command will download all the dependencies at `packaje.json`.

## Build and deployment

This project is prepared to be hosted in [Github Pages](https://pages.github.com/).

In order to deploy, you must execute one of the scripts hosted in `package.json`.

- `npm run dev` -> you must have run the command `npm install` before in order to have installed `Parcel` and this will run `parcel .src/index.html`.
- `npm run build` -> this command executes the `clean` script and `ghbuild`.
- `npm run ghbuild` -> this command compiles and creates the sources at the directory `/docs` for `Github Pages` deployment.
- `npm run clean` -> rimraf will clear the files at `/docs`. This directory hosts the deployment files.

# Project structure

```
├── actors\
│   ├── Actor.ts\
│   ├── Ball.ts\
│   ├── Bar.ts\
│   ├── Brick.ts\
│   ├── BrickManager.ts\
│   ├── FPSViewer.ts\
├── assets\
│   ├── img\
│       ├── backgrounds\
│       ├── readme\
│       ├── sprites\
│   ├── sounds\
│   ├── utils\
│       ├── Constants.ts\
├── public\
│   ├── css\
│       ├── style.css\
├── src\
│   ├── script.ts\
│   ├── index.html\
├── docs (or build)\
├── node_modules\
├── package.json\
├── package-lock.json\
└── .gitignore\
```

# Sources

- [The Sprites Resource](https://www.spriters-resource.com/)
- [The Sounds Resource](https://www.sounds-resource.com/)

# Gratitudes

The gratitudes to this project goes to [Luis Miguel Feijoo](https://github.com/luismiguelfeijoo) my teacher who made me feel powerful enough to know I'm capable of developing whatever I want!