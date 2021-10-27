interface StyledIconProps {
  styles?: string;
  icon: JSX.Element;
}
const StyledIcon = ({ icon, styles = '' }: StyledIconProps) => (
  <div className={styles}>{icon}</div>
);

export default StyledIcon;
