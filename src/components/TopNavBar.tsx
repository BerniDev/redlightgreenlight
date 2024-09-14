export interface TopNavBarProps {
  playerName: string;
  onExit: () => void;
}

function TopNavBar({ playerName, onExit }: TopNavBarProps) {
  return (
    <div className="top-nav-bar">
      <span>Hi {playerName}</span>
      <span>
        <button onClick={onExit}>Exit</button>
      </span>
    </div>
  );
}
export { TopNavBar };
