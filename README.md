# Emotion Vanilla Example

This repo is based on:

```bash
npx create-next-app --example with-emotion-vanilla with-emotion-vanilla-app
```

To test inline CSS behavior, related to https://github.com/chakra-ui/chakra-ui-docs/issues/644, we also installed `@emotion/styled` to provide that when hitting `http://localhost:3000` the component using `@emotion/styled` shows inline CSS in the HTML source while the component using `@emotion/css` does not.

Of course CSS should be in the `<head>` tag to be valid HTML.
