# Github Actions yaml linter

## WIP

## Install
- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=securisec.github-actions)
- Or clone the repo and build with `vsce package` and install VSIX file from VS Code. 


VSCode extension that provides linting and intellisense for github actions yaml files. 

This plugin also provides intellisense for common extensions like checkout, upload/download artifacts etc.

Pull requests are welcome! 

## Demo
<p align="center">
    <img src="https://github.com/securisec/code-github-actions/raw/master/resources/demo.gif" width="65%">
</p>

## Update Actions
To update actions automatically, create a new file called `dependabot.yml` in the `.github/workflows` directory with the following contents:

```yaml
version: 2
updates:
  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"
```