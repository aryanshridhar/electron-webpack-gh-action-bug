# electron-webpack-gh-action-bug

Repo to figure out weird runtime webpack values when released via CI

#### Error

The CI build incorrectly resolves the webpack `DefinePlugin` global path to be present inside `/Users/runner` (local github action path) rather than the actual repository.

#### Logs

(In this case)

```
Error: ENOENT: no such file or directory, open '/Users/runner/work/electron-webpack-gh-action-bug/electron-webpack-gh-action-bug/static/foo.json'
```

#### Screenshot

<img width="797" alt="Screenshot 2022-07-22 at 10 14 29 PM" src="https://user-images.githubusercontent.com/53977614/180485891-c0fef8e7-6b62-47a0-a041-665dea1f910f.png">
