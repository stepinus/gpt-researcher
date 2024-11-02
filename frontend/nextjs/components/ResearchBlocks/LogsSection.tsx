import Image from "next/image";
import LogMessage from './elements/LogMessage';

interface Log {
  header: string;
  text: string;
  metadata: any;
  key: string;
}

interface OrderedLogsProps {
  logs: Log[];
}

const LogsSection = ({ logs }: OrderedLogsProps) => {
  return (
    <div className="container h-auto w-full shrink-0 rounded-lg border border-solid border-[#C2C2C2] bg-gray-800 shadow-md p-5">
      <div className="flex items-start gap-4 pb-3 lg:pb-3.5">
        <Image src="/img/thinking.svg" alt="logs" width={24} height={24} />
        <h3 className="text-base font-bold uppercase leading-[152.5%] text-white">
          Agent Work
        </h3>
      </div>
      <div className="overflow-y-auto min-h-[200px] max-h-[500px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
        <LogMessage logs={logs} />
      </div>
    </div>
  );
};

export default LogsSection; 