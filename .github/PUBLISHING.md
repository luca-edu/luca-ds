# Publishing Guide

This document explains how to publish the Luca DS package to GitHub Packages.

## Overview

This package is configured to publish to **GitHub Packages** automatically when you create a new version tag. GitHub Packages is GitHub's package registry that's tightly integrated with your repository.

## Prerequisites

**No manual token setup required!** The GitHub Actions workflow uses the built-in `GITHUB_TOKEN` automatically. You just need to push a tag and the workflow will handle everything.

## Publishing Process

### Automatic Publishing (Recommended)

The package is automatically published to GitHub Packages when you create a new tag:

```bash
# 1. Update version in package.json
npm version patch  # 1.0.0 -> 1.0.1
# or
npm version minor  # 1.0.0 -> 1.1.0
# or
npm version major  # 1.0.0 -> 2.0.0

# 2. Push the changes and tag
git push && git push --tags
```

This will trigger the workflow that:
- ✓ Runs type checking
- ✓ Builds the package
- ✓ Publishes to GitHub Packages as `@luca-edu/luca-ds`

### Manual Publishing

You can also trigger publishing manually:

1. Go to Actions tab in GitHub
2. Select "Publish to GitHub Packages" workflow
3. Click "Run workflow"
4. Select the branch
5. Click "Run workflow"

## What Gets Published

The workflow publishes to **GitHub Packages** (private registry):

- **Package name**: `@luca-edu/luca-ds`
- **Registry**: GitHub Packages (npm.pkg.github.com)
- **Access**: Private (requires authentication)

## Installation Instructions

### For Private Repository Users

Since this is a **private repository**, users need authentication to install the package. There are two methods:

#### Method 1: Using GitHub Personal Access Token (Recommended)

1. **Create a GitHub Personal Access Token**:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Select scopes: `read:packages` (minimum required)
   - Copy the token

2. **Configure `.npmrc` in your project**:
   ```bash
   # In your project root, create or edit .npmrc
   @luca-edu:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

3. **Install the package**:
   ```bash
   npm install @luca-edu/luca-ds
   ```

#### Method 2: Using npm login

```bash
# Login to GitHub Packages
npm login --scope=@luca-edu --auth-type=legacy --registry=https://npm.pkg.github.com

# When prompted:
# Username: your-github-username
# Password: your-github-personal-access-token
# Email: your-email@example.com

# Then install
npm install @luca-edu/luca-ds
```

### Installation from Specific Version

```bash
# Install specific version
npm install @luca-edu/luca-ds@1.0.0

# Install specific tag
npm install @luca-edu/luca-ds@v1.0.0
```

### Using in package.json

```json
{
  "dependencies": {
    "@luca-edu/luca-ds": "^1.0.0"
  }
}
```

Then run `npm install` (with proper authentication configured).

## Version Management

Follow semantic versioning:

- **Patch** (1.0.0 → 1.0.1): Bug fixes, minor changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Major** (1.0.0 → 2.0.0): Breaking changes

## Continuous Integration

All pushes and pull requests run the CI workflow:

- Type checking with TypeScript
- Build verification
- Package contents validation
- Storybook build
- Tests on Node 18.x and 20.x

## Important Notes for Private Repository

### Access Control

- Users must have **read access** to the repository to install the package
- Users need a GitHub Personal Access Token with `read:packages` scope
- The package will NOT appear in public npm search

### Team Access

To give someone access to install the package:

1. Go to repository Settings → Collaborators
2. Add the user as a collaborator
3. They can then install using their own GitHub token

Or for organization packages:
1. Users must be members of the `luca-edu` organization
2. Configure their `.npmrc` with authentication

## Troubleshooting

### Publishing fails with "403 Forbidden"

- Ensure the workflow has `packages: write` permission (already configured)
- Check that GitHub Actions is enabled in repository settings

### Installation fails with "401 Unauthorized"

- Verify the user has a valid GitHub Personal Access Token
- Ensure token has `read:packages` scope
- Check the user has read access to the repository
- Verify `.npmrc` is configured correctly

### Package not found after publishing

- Check the Actions tab for workflow status
- Go to repository main page → Packages (right sidebar)
- Verify the package was published successfully
- Make sure you're using the scoped name `@luca-edu/luca-ds`

### Cannot install in CI/CD

In GitHub Actions, use `GITHUB_TOKEN`:

```yaml
- name: Install dependencies
  run: |
    echo "@luca-edu:registry=https://npm.pkg.github.com" >> .npmrc
    echo "//npm.pkg.github.com/:_authToken=${{ secrets.GITHUB_TOKEN }}" >> .npmrc
    npm install
```

## Release Checklist

Before creating a new release:

- [ ] All tests pass
- [ ] Type checking passes (`npm run typecheck`)
- [ ] Build succeeds (`npm run build`)
- [ ] CHANGELOG updated (if you have one)
- [ ] Version bumped in package.json
- [ ] Tag created and pushed
- [ ] GitHub release created (optional but recommended)

## Creating GitHub Releases

After the tag is published, create a release on GitHub:

1. Go to https://github.com/luca-edu/luca-ds/releases/new
2. Select your tag (e.g., v1.0.0)
3. Add release title: "Release v1.0.0"
4. Add release notes describing changes
5. Click "Publish release"

This makes it easier for users to see what changed between versions.
