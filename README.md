# Luca DS

A modern UI component library built with React, TypeScript, and Tailwind CSS.

## Features

- Built with React 18 and TypeScript for type safety
- Styled with Tailwind CSS with `luca-` prefix to avoid conflicts
- Tree-shakeable ES modules for optimal bundle size
- Full TypeScript definitions and IntelliSense support
- Accessible components following best practices
- Dual build system for flexible integration

## Installation

### From npm (when published)

```bash
npm install luca-ds
```

### From GitHub directly

```bash
npm install github:luca-edu/luca-ds
```

### Peer Dependencies

Make sure you have React 18+ installed:

```bash
npm install react react-dom
```

## Quick Start

### Basic Usage (with automatic styles)

Import components and styles will be automatically included:

```tsx
import { Button, Input, Card } from 'luca-ds';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Name" placeholder="Enter your name" />
      <Card>
        <h2>Card Title</h2>
        <p>Card content</p>
      </Card>
    </div>
  );
}
```

### Advanced Usage (selective imports without auto-styles)

For more control over style loading, use the `/cross` import:

```tsx
import { Button, Input } from 'luca-ds/cross';
import 'luca-ds/styles.css'; // Import styles manually when needed

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

Props:
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'

### Input

A form input component with label, error, and helper text support.

```tsx
<Input
  label="Email"
  type="email"
  placeholder="email@example.com"
  error="Invalid email"
  helperText="Enter a valid email address"
/>
```

### Card

A flexible card component with header, title, and content sections.

```tsx
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

Props:
- `variant`: 'default' | 'outlined' | 'elevated'

## Available Components

- **Button** - Versatile button with multiple variants
- **Input** - Form input with label and validation
- **Card** - Flexible card component with compound pattern
- **Layout** - Page layout with header and content sections
- **Select** - Dropdown select component
- **Checkbox** - Checkbox input component
- **Radio** - Radio button component
- **Switch** - Toggle switch component
- **Textarea** - Multi-line text input
- **Modal** - Dialog/modal component
- **Tooltip** - Hover tooltip component
- **Badge** - Label/badge component
- **Avatar** - User avatar component
- **Spinner** - Loading spinner
- And more...

See the [Storybook documentation](https://luca-edu.github.io/luca-ds/) for full component API and examples.

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/luca-edu/luca-ds.git
cd luca-ds
npm install
```

### Development Commands

```bash
# Start development server
npm run dev

# Type checking
npm run typecheck

# Build library (TypeScript + Vite dual build)
npm run build

# Run Storybook for component development
npm run storybook

# Build Storybook documentation
npm run build-storybook

# Watch CSS changes
npm run watch:css
```

## Publishing

Before publishing a new version:

1. **Update version**:
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```

2. **Build the package**:
   ```bash
   npm run build
   ```

3. **Verify package contents**:
   ```bash
   npm pack --dry-run
   ```

4. **Publish to npm**:
   ```bash
   npm publish
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Repository

https://github.com/luca-edu/luca-ds
