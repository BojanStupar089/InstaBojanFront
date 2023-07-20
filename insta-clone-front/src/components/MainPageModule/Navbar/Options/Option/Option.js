export const Option = ({ redirect, icon }) => {
  const redirection = () => (window.location.href = redirect);

  return (
    <span className="icon" onClick={redirection} tabIndex="0">
      {icon}
    </span>
  );
};
