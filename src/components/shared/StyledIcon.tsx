interface StyledIconProps {
  styles?: string;
  button?: boolean;
  icon: JSX.Element;
  onClick?: () => void;
}
const StyledIcon = ({
  styles = '',
  button = false,
  icon,
  onClick,
}: StyledIconProps) => (
  <>
    {button ? (
      <button className={styles} onClick={onClick}>
        {icon}
      </button>
    ) : (
      <div className={styles}>{icon}</div>
    )}
  </>
);

export default StyledIcon;
