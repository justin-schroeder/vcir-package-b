# Vitest Conditional Imports Reproduction (VCIR)

In order to reproduce the issue we need 2 modules with conditional "exports" blocks. This is package-b in this graph:

```
My-Project
├── package-b
│   ├── package-a
```

When package-b and package-a both have `development` conditional exports and vitest is run in development, the `development` conditional exports from package-a *should* be used.