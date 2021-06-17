import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  show_alert: boolean;
  message: string;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}

const AlertNotification: React.FC<Props> = ({ message, show_alert, setShowAlert }) => {
  return (
    <div className={show_alert ? "h-1/5 min-w-full p-4 flex items-center fixed visible" : "h-1/5 min-w-full p-4 flex items-center absolute invisible"}>
    <div className="space-x-2 bg-white rounded flex items-start text-indigo-600 my-4 mx-auto max-w-2xl shadow-lg">
        <div className="w-1 self-stretch bg-indigo-500">
            
        </div>
        <div className="flex space-x-2 p-4">
            <h3 className="text-indigo-800 tracking-wider flex-1">
                <span className="">{ message }</span> 
                <span className="font-thin hover:text-gray-900 text-2xl cursor-pointer ml-5" onClick={() => { setShowAlert(false) }}>x</span>
            </h3>
        </div>
    </div>
</div>
  )
}

export default AlertNotification;