export interface TopNavBarProps {
  playerName: string;
  midButtonText: string;
  onExit: () => void;
  onClick: () => void;
}

function TopNavBar({
  playerName,
  midButtonText,
  onExit,
  onClick,
}: TopNavBarProps) {
  return (
    <div className="top-nav-bar">
      <span>
        <b data-testid="salute-message">Hi {playerName}!</b>
      </span>
      <span>
        <button data-testid="navigation-button" className="primary" onClick={onClick}>
          {midButtonText}
        </button>
      </span>
      <span>
        <button data-testid="exit-button" className="secondary" onClick={onExit}>
          Exit
        </button>
      </span>
    </div>
  );
}
export { TopNavBar };
