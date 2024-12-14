import {Box} from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Box className="h-8 w-8 text-blue-600" />
      <span className="text-xl font-bold">Republic</span>
    </div>
  );
};

export default Logo;
