import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('./Card').CardProps & import('react').RefAttributes<HTMLDivElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
            description: string;
        };
        align: {
            control: "select";
            options: string[];
        };
        interactive: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const HoverState: Story;
export declare const AlignedContent: Story;
//# sourceMappingURL=Card.stories.d.ts.map