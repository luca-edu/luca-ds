import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('./ButtonIcon').ButtonIconProps & import('react').RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        state: {
            control: "select";
            options: string[];
            description: string;
        };
        outline: {
            control: "select";
            options: string[];
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Hover: Story;
export declare const Selected: Story;
export declare const Disabled: Story;
export declare const Rounded: Story;
export declare const AllStates: Story;
//# sourceMappingURL=ButtonIcon.stories.d.ts.map