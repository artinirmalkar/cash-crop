import Lable from "./Lable";

export const FormField = ({ label, children, className = "" }) => (
    <div className={`form-field ${className}`}>
      <Lable lable={label} />
      {children}
    </div>
  );