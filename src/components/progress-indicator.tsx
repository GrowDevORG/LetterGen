interface ProgressIndicatorProps {
  currentStep: number;
}

export default function ProgressIndicator({
  currentStep,
}: ProgressIndicatorProps) {
  const steps = [
    'Personal Info',
    'Skills',
    'Experience',
    'Education',
    'Career Goals',
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                index + 1 === currentStep
                  ? ' border-blue-300 bg-blue-500'
                  : index + 1 < currentStep
                    ? 'bg-blue-500 border-primary'
                    : 'border-blue-500 bg-white'
              }`}
            />
            <span className="mt-2 text-sm text-muted-foreground text-center">
              {step}
            </span>
          </div>
        ))}
        <div className="absolute top-2 left-0 right-0 h-[2px] -z-10">
          <div className="h-full bg-blue-500">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
