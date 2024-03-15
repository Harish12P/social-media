//import { Icon } from "@iconify/react";
import TextInput from "../components/TextInput";
const LoginComponent = () => {
  return (
    <div className="w-full h-full flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        {/* <Icon icon="logos:spotify" width="150" /> */}
      </div>
      <div className="inputRegion w-1/3">
        <TextInput />
      </div>
    </div>
  );
};
export default LoginComponent;
