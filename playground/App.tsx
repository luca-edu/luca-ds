import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardIcon,
} from '../src';

const examIllustration =
  'https://www.figma.com/api/mcp/asset/e4737da7-cdfe-472d-b28a-2bd49f3bd188';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Luca UI Kit</h1>
          <p className="text-gray-600">
            Component playground showcasing the updated card experience for the
            teacher platform.
          </p>
        </div>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Card States
          </h2>
          <div className="flex flex-wrap gap-6">
            <Card className="max-w-xs">
              <CardIcon>
                <img
                  src={examIllustration}
                  alt="Exam illustration"
                  className="h-full w-full object-contain"
                />
              </CardIcon>
              <CardHeader>
                <CardTitle>Title</CardTitle>
              </CardHeader>
              <CardDescription>Two{'\n'}lines</CardDescription>
            </Card>

            <Card variant="hover" className="max-w-xs">
              <CardIcon>
                <img
                  src={examIllustration}
                  alt="Exam illustration"
                  className="h-full w-full object-contain"
                />
              </CardIcon>
              <CardHeader>
                <CardTitle>Title</CardTitle>
              </CardHeader>
              <CardDescription>Two{'\n'}lines</CardDescription>
            </Card>
          </div>
        </section>

        <Card
          align="start"
          interactive={false}
          className="w-full max-w-3xl self-center"
        >
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription className="text-gray-500">
              Combine CardIcon, CardTitle, and CardDescription to recreate the
              tile spec from the design file.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-base text-gray-600">
            <p>
              Cards are interactive by default. Disable hover transitions by
              passing <code>{'interactive={false}'}</code> when the component is
              used inside static layouts.
            </p>
            <p>
              Use the <code>hover</code> variant to render the focused state
              showcased in the Figma handoff.
            </p>
            <p>
              Change alignment with the <code>align</code> prop to integrate the
              card into content-heavy layouts or dashboards.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
