// src/components/Version.jsx
import { version } from '../../package.json'

const Version = () => {
  return (
    <div className="text-sm text-gray-500">
      v{version}
    </div>
  );
};

export default Version;