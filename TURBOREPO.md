# Guide to TurboRepo

## Task Configuration

### `turbo.json`

#### `tasks`

1. `build`

```json
"tasks": {
    "build": {
        "dependsOn": ["^build"],
        "inputs": ["$TURBO_DEFAULT$", ".env*", "**/*.md"],
        "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    }
}
```

- `dependsOn`: when running the task, it will run the tasks with same name in "dependencies" first, then run the task on "dependents".
  (This is critical for running the task in the expected order)

- `inputs`: defines which files and directories should be checked for changes.

  - `$TURBO_DEFAULT$`: this default inputs behavior is often what you want
  - rest of inputs: build task will hit cache, ignoring the changes in the rest of inputs

- `outputs`: defines which files and directories should be cached. It uses glob pattern, so dist/\*\* handles dist folder for each package, respectively.
  (Current build's output is set to cover Next.js and tsup's build output )
