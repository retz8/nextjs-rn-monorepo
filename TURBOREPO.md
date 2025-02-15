# Guide to TurboRepo

## Task Configuration

### `turbo.json`

#### `tasks`

1. `build`

```json
"tasks": {
    "build": {
        "dependsOn": ["^build"],
    }
}
```

- `dependsOn`: when running the task, it will run the tasks with same name in "dependencies" first, then run the task on "dependents".

(This is critical for running the task in the expected order)

- `outputs`: defines which files and directories should be cached. It uses glob pattern, so dist/\*\* handles dist folder for each package, respectively.

(Current build's output is set to cover Next.js and tsup's build output )
