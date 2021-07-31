# Frontend Mentor Challenge - Intro Component with Sign Up Form

## Style Guide (tailwind.config.js theme extend)

note: files in the public directory are served at the root path.
Instead of /public/bg-intro-desktop.png, use /bg-intro-desktop.png.

```javascript
extend: {
  backgroundImage: (theme) => ({
    // "pattern-mobile": "url('../public/bg-intro-mobile.png')",
    // "pattern-desktop": "url('../public/bg-intro-desktop.png')",
    "pattern-mobile": "url('./bg-intro-mobile.png')",
    "pattern-desktop": "url('/bg-intro-desktop.png')",
  }),
  colors: {
    blue: {
      dark: "#3E3C49",
      DEFAULT: "#5E54A4",
      grayish: "#B9B6D3",
    },
    red: "#FF7979",
    green: {
      DEFAULT: "#38CC8B",
      light: "#77E2B3",
    },
  },
  boxShadow: {
    btn: "inset 0px -4px 0px rgba(0,0,0,0.0908818)",
    div: "0px 8px 0px rgba(0,0,0,0.14688)",
  },
  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
  },
},
```

## Static Asset Handling

```javascript
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href;
}
```

Reference: [import.meta.url](https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url)

## Deploy to Github Pages

Setup correct public path

```javascript
// vite.config.js

export default defineConfig({
  base: "/REPO_NAME/",
});
```

Note: base is set to `/` by default

Reference:
[Static Deploy](https://vitejs.dev/guide/static-deploy.html#github-pages)
[Configuring Vite](https://vitejs.dev/config/#base)
