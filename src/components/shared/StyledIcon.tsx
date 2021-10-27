interface StyledIconProps {
  styles?: string;
  icon: JSX.Element;
}
const StyledIcon = ({ styles = '', icon }: StyledIconProps) => (
  <div className={styles}>{icon}</div>
);

export default StyledIcon;
