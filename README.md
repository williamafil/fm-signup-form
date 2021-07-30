# Frontend Mentor Challenge - Intro Component with Sign Up Form

### Static Asset Handling

```javascript
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}
```
Reference: [import.meta.url](https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url)