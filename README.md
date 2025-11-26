# Luca DS

A modern UI component library built with React, TypeScript, and Tailwind CSS.

## Features

- Built with React 18 and TypeScript for type safety
- Styled with Tailwind CSS for easy customization
- Tree-shakeable ES modules
- Full TypeScript definitions
- Accessible components following best practices

## Installation

```bash
npm i @lucaedu-2/luca-ds
```

## Usage

Import the components and styles in your application:

```tsx
import { Button, Input, Card } from 'luca-ds';
import 'luca-ds/styles.css';

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
  <CardContent>Card content goes here</CardContent>
</Card>
```

Props:

- `variant`: 'default' | 'outlined' | 'elevated'

## Development

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the library:

```bash
npm run build
```

## License

ISC
