import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';
import { LucaRobotIcon } from '../shared/icons';
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
export const Steps: React.FC<StepsProps> = ({
  steps,
  currentStep,
  className,
  robotImageUrl,
  showRobot = true,
}) => {
  const [robotPosition, setRobotPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Calcular la posición del robot basada en el step actual
  useEffect(() => {
    const calculatePosition = () => {
      if (stepRefs.current.length === 0 || !containerRef.current) return;

      const activeStepRef = stepRefs.current[currentStep];
      if (!activeStepRef) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const stepRect = activeStepRef.getBoundingClientRect();

      // Calcular la posición relativa del step dentro del contenedor
      const stepCenterX = stepRect.left + stepRect.width / 2 - containerRect.left;
      // El robot debe estar centrado sobre el step, ajustado para que esté arriba
      const newPosition = stepCenterX - 45; // 45px es la mitad del ancho del robot (90px)

      return newPosition;
    };

    // Pequeño delay para asegurar que los elementos estén renderizados
    const timer = setTimeout(() => {
      const newPosition = calculatePosition();
      if (newPosition !== null && newPosition !== undefined) {
        setIsAnimating(true);
        setRobotPosition(newPosition);

        // Resetear el estado de animación después de que termine
        setTimeout(() => {
          setIsAnimating(false);
        }, 600); // Duración de la animación
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentStep, steps.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'luca-relative luca-bg-white luca-box-border luca-flex luca-flex-col luca-items-start luca-px-10 luca-py-4 luca-rounded-lg luca-w-full',
        className
      )}
    >
      <div className="luca-relative luca-flex luca-flex-col luca-gap-4 luca-items-start luca-pb-0 luca-pt-12 luca-px-0 luca-shrink-0 luca-w-full">
        {/* Línea base */}
        <div className="luca-relative luca-h-8 luca-w-full">
          <div className="luca-absolute luca-bg-[#e5e7eb] luca-h-1 luca-left-0 luca-rounded-sm luca-top-4 luca-w-full" />

          {/* Puntos de los steps */}
          <div className="luca-absolute luca-flex luca-items-center luca-justify-between luca-left-1/2 luca-top-0 luca-transform luca-translate-x-[-50%] luca-w-full luca-max-w-[899px]">
            {steps.map((_, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="luca-relative luca-flex luca-items-center luca-justify-center"
                >
                  <div
                    className={cn(
                      'luca-box-border luca-flex luca-items-center luca-justify-center luca-p-[3px] luca-rounded-2xl luca-size-8 luca-border-[3px] luca-border-solid luca-border-white',
                      isActive || isCompleted
                        ? 'luca-bg-[#ffba31]'
                        : 'luca-bg-[#f3f4f6]'
                    )}
                  >
                    <p
                      className={cn(
                        "luca-font-['Poppins'] luca-font-bold luca-leading-[21px] luca-text-sm luca-shrink-0",
                        isActive || isCompleted
                          ? 'luca-text-[#111827]'
                          : 'luca-text-[#9ca3af]'
                      )}
                    >
                      {index + 1}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Títulos y subtítulos de los steps */}
        <div className="luca-flex luca-items-start luca-justify-between luca-h-[38px] luca-w-full">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={index}
                className="luca-flex-1 luca-h-[38px] luca-min-h-px luca-min-w-px luca-shrink-0"
              >
                <div className="luca-flex luca-flex-col luca-gap-0.5 luca-h-[38px] luca-items-start luca-w-full">
                  <div className="luca-flex luca-h-[19.5px] luca-items-start luca-w-full">
                    <p
                      className={cn(
                        'luca-flex-1 luca-font-["Poppins"] luca-leading-5 luca-text-sm luca-whitespace-pre-wrap',
                        isActive
                          ? 'luca-font-medium luca-text-[#111827]'
                          : 'luca-font-normal luca-text-[#9ca3af]',
                        isFirst && 'luca-text-left',
                        !isFirst && !isLast && 'luca-text-center',
                        isLast && 'luca-text-right'
                      )}
                    >
                      {step.title}
                    </p>
                  </div>
                  <div className="luca-flex luca-h-[16.5px] luca-items-start luca-w-full">
                    <p
                      className={cn(
                        'luca-flex-1 luca-font-["Poppins"] luca-font-normal luca-leading-4 luca-text-xs luca-whitespace-pre-wrap',
                        isActive
                          ? 'luca-text-[#6b7280]'
                          : 'luca-text-[#9ca3af]',
                        isFirst && 'luca-text-left',
                        !isFirst && !isLast && 'luca-text-center',
                        isLast && 'luca-text-right'
                      )}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Robot animado */}
        {showRobot && ( 
            <div
            className={cn(
                'luca-absolute luca-size-[90px] luca-top-[-15px] luca-transition-all luca-duration-[700ms] luca-ease-in-out',
                isAnimating && 'luca-animate-[robotWalk_0.6s_ease-in-out]'
            )}
            style={{
                left: `${robotPosition}px`,
            }}
            >
            <div className="luca-absolute luca-left-[-39px] luca-size-[90px] luca-top-[-10px]">
                {
                    robotImageUrl ?
                    (
                        <img
                            alt="Luca Robot"
                            className="luca-absolute luca-inset-0 luca-max-w-none luca-object-cover luca-pointer-events-none luca-size-full"
                            src={robotImageUrl}
                        />
                    ) : <LucaRobotIcon className='luca-absolute luca-left-[-13px] luca-top-[-10px]' />
                }
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

Steps.displayName = 'Steps';

export default Steps;

