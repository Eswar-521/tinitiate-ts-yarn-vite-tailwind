# React Vite TypeScript Tailwind Project (`ts-yarn-vite-tailwind`)

This project is a **React + Vite + TypeScript + Tailwind CSS** setup using **Yarn** as the package manager.

## 📌 **Project Setup**
### **1. Initialize the Project**
Run the following command to create a new Vite project with TypeScript:
```sh
yarn create vite ts-yarn-vite-tailwind 
```

```sh
cd ts-yarn-vite-tailwind
```

##  Install Dependencies
```sh
yarn
```

## Install Tailwind Css
```sh
npm install tailwindcss @tailwindcss/vite
```

## vite.config.ts
```sh
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
})
```

## Import Tailwind CSS
- Add an @import to your CSS file that imports Tailwind CSS.

```sh
@import "tailwindcss";
```

## Start the Development Server
```sh
yarn dev
```
