




import { useFormikContext } from "formik";
import PhoneInput from "react-phone-input-2";
import { useSelector } from "react-redux";

const Phone = ({ value, name }) => {

  const { theme } = useSelector((state) => state.theme);

  const { setFieldValue } = useFormikContext();

  const handlePhoneChange = (phone) => {
    setFieldValue(name, phone);
  };

  const containerStyles = {
    width: "100%",
    borderRadius: '0',
    backgroundColor: theme === 'light' ? '':'#232223',
    color: theme === "light" ? '#000' : '#000',
  };
  
  const inputStyles = {

    width: "100%",
    borderRadius: '0',
    backgroundColor: theme === 'light' ? '':'#232223',
    color: theme === "light" ? '#000' : '#fff',
  };

  return (
    <PhoneInput
      country={"in"}
      value={value}
      onChange={handlePhoneChange}
      countryCodeEditable={false}
      disableSearchIcon={true}
      inputProps={{
        name: {name},
        required: true,
        autoFocus: true,
      }}
      containerStyle={containerStyles}
      inputStyle={inputStyles}
    />
  );
};

export default Phone;
