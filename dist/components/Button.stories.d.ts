import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('./Button').ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
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
        state: {
            control: "select";
            options: string[];
            description: string;
        };
        disabled: {
            control: "boolean";
            description: string;
        };
        leftIcon: {
            control: "boolean";
            description: string;
            mapping: {
                true: import("react/jsx-runtime").JSX.Element;
                false: undefined;
            };
        };
        rightIcon: {
            control: "boolean";
            description: string;
            mapping: {
                true: import("react/jsx-runtime").JSX.Element;
                false: undefined;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PrimaryDefault: Story;
export declare const PrimaryNoIcons: Story;
export declare const PrimaryLeftIcon: Story;
export declare const PrimaryDisabled: Story;
export declare const PrimaryAlert: Story;
export declare const SecondaryDefault: Story;
export declare const SecondaryNoIcons: Story;
export declare const SecondaryDisabled: Story;
export declare const SecondaryAlert: Story;
export declare const AllVariants: {
    render: () => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=Button.stories.d.ts.map