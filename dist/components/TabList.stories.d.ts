import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
import { TabListProps } from './TabList';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        value: {
            control: false;
            description: string;
        };
        onValueChange: {
            control: false;
        };
        items: {
            control: "object";
            description: string;
        };
        defaultValue: {
            control: "text";
            description: string;
        };
        fullWidth: {
            control: "boolean";
            description: string;
        };
    };
    args: {
        items: import('./TabList').TabListItem[];
        defaultValue: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ThreeTabs: Story;
export declare const WithDisabledTab: Story;
export declare const FullWidth: Story;
//# sourceMappingURL=TabList.stories.d.ts.map