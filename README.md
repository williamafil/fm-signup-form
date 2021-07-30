# Frontend Mentor Challenge - Intro Component with Sign Up Form

### Static Asset Handling

```javascript
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}
```
Reference: [import.meta.url](https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url)

### Deploy to Github Pages

Setup correct public path

```
// vite.config.js

export default defineConfig({
  base: '/REPO_NAME/'
})
```
Note: base is set to `/` by default

Reference:
[Static Deploy](https://vitejs.dev/guide/static-deploy.html#github-pages)
[Configuring Vite](https://vitejs.dev/config/#base)