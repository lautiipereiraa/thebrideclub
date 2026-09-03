interface FundProgressBarProps {
  percent: number;
}

export function FundProgressBar({ percent }: FundProgressBarProps) {
  const width = Math.min(100, Math.max(0, percent));

  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-blush-100">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blush-300 via-wine-soft to-wine transition-all duration-700"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
