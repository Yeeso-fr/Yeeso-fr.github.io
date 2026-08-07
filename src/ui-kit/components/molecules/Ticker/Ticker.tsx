import "./Ticker.css";

export type TickerProps = {
  items: string[];
};

// The -50% keyframe in Ticker.css only loops seamlessly if a single lap is
// at least as wide as the viewport — otherwise the reset reveals a blank
// gap just before it jumps back to 0. Repeating the (short) items list a
// few times keeps a lap comfortably wider than any realistic screen.
// If this changes, scale Ticker.css's animation-duration by the same
// factor (duration = 25s × LAP_REPEATS) to keep the scroll speed constant.
const LAP_REPEATS = 5;

export const Ticker = ({ items }: TickerProps) => {
  const lap = Array.from({ length: LAP_REPEATS }, () => items).flat();
  const loopedItems = [...lap, ...lap];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {loopedItems.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static, never-reordered decorative loop
          <span className="ticker__item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
