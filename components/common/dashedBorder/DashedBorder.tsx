const DashedBorder = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="30"
        fill="none"
        stroke="#f4c550"
        strokeWidth="1.5"
        strokeDasharray="12 16"
      />
    </svg>
  );
};

export default DashedBorder;
