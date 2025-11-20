import { default as React } from 'react';
export interface Step {
    title: string;
    subtitle: string;
}
export interface StepsProps {
    steps: Step[];
    currentStep: number;
    className?: string;
    robotImageUrl?: string;
    showRobot?: boolean;
}
export declare const Steps: React.FC<StepsProps>;
export default Steps;
//# sourceMappingURL=Steps.d.ts.map