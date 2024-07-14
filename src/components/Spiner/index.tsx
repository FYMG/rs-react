import SpinnerSVG from '@assets/spinner.svg?react';

interface ISpinnerProperties {
  className?: string;
}

function Spinner({ className = '' }: ISpinnerProperties) {
  return (
    <div className={`${className ?? ''} flex content-center justify-center`}>
      <SpinnerSVG className="h-full w-full animate-spin fill-blue-600 text-gray-200 dark:text-gray-600" />
    </div>
  );
}

export default Spinner;
