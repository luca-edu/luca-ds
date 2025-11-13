# Publishing Guide

This document explains how to publish the Luca DS package using GitHub Actions.

## Prerequisites

### 1. NPM Token (for npm registry)

To publish to npm, you need to create an NPM access token:

1. Go to [npmjs.com](https://www.npmjs.com/) and login
2. Click on your profile picture → "Access Tokens"
3. Click "Generate New Token" → "Classic Token"
4. Select "Automation" type
5. Copy the token

### 2. Add NPM Token to GitHub Secrets

1. Go to your repository: https://github.com/luca-edu/luca-ds
2. Go to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click "Add secret"

## Publishing Process

### Automatic Publishing (Recommended)

The package is automatically published when you create a new tag:

```bash
# 1. Update version in package.json
npm version patch  # 1.0.0 -> 1.0.1
# or
npm version minor  # 1.0.0 -> 1.1.0
# or
npm version major  # 1.0.0 -> 2.0.0

# 2. Push the tag (npm version creates it automatically)
git push && git push --tags
```

This will trigger the workflow that:
- Runs type checking
- Builds the package
- Publishes to npm registry
- Publishes to GitHub Packages

### Manual Publishing

You can also trigger publishing manually:

1. Go to Actions tab in GitHub
2. Select "Publish Package" workflow
3. Click "Run workflow"
4. Select the branch
5. Click "Run workflow"

## What Gets Published

The workflow publishes to TWO registries:

### 1. npm Registry (npmjs.com)
- Package name: `luca-ds`
- Install: `npm install luca-ds`
- Public access

### 2. GitHub Packages
- Package name: `@luca-edu/luca-ds`
- Install: `npm install @luca-edu/luca-ds --registry=https://npm.pkg.github.com`
- Requires authentication for private repos

## Installation Instructions

### From npm (Public)

```bash
npm install luca-ds
```

### From GitHub Packages

Users need to configure `.npmrc`:

```bash
# Create .npmrc in project root
echo "@luca-edu:registry=https://npm.pkg.github.com" > .npmrc

# Install
npm install @luca-edu/luca-ds
```

For private repos, also add authentication:
```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### From GitHub Repository Directly

```bash
# Latest from main branch
npm install luca-edu/luca-ds

# Specific tag/version
npm install luca-edu/luca-ds#v1.0.0
```

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

## Troubleshooting

### Publishing fails with "401 Unauthorized"

- Verify NPM_TOKEN secret is set correctly
- Ensure token has "Automation" permissions
- Check token hasn't expired

### Package not found after publishing

- Wait a few minutes for npm to index
- Clear npm cache: `npm cache clean --force`
- Verify package name doesn't conflict with existing packages

### GitHub Packages authentication issues

- Ensure you have read access to the repository
- Create a GitHub personal access token with `read:packages` scope
- Configure `.npmrc` with authentication

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
