import React from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DevicesIcon from '@mui/icons-material/Devices';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import IosShareIcon from '@mui/icons-material/IosShare';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  return (
    <div className='flex flex-col items-center p-6 gap-36'>
      <div className='text-center w-10 h-10 flex items-end justify-center bg-logoColor rounded-2xl'>
        <KeyboardVoiceIcon className='text-white text-end' style={{ fontSize: 32, lineHeight: 0 }} />
      </div>
      <div className='flex items-center justify-center flex-col gap-12'>
        <div>
          <HomeIcon className='text-buttonColor' style={{ fontSize: 22 }} />
        </div>
        <div className='relative'>
          <QuestionAnswerIcon className='text-buttonColor m-1.5' style={{ fontSize: 22 }} />
          <span className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></span>
        </div>
        <div className='relative'>
          <LocalPhoneIcon className='text-buttonColor m-1.5' style={{ fontSize: 22 }} />
          <span className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></span>
        </div>
        <div>
          <DevicesIcon className='text-buttonColor' style={{ fontSize: 22 }} />
        </div>
        <div className='border flex items-center justify-center w-10 h-10 rounded-lg'>
          <SupervisorAccountIcon className='text-logoColor' style={{ fontSize: 22 }} />
        </div>
        <div>
          <IosShareIcon className='text-buttonColor' style={{ fontSize: 22 }} />
        </div>
        <div className='relative'>
          <CalendarMonthIcon className='text-buttonColor m-1.5' style={{ fontSize: 22 }} />
          <span className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></span>
        </div>
        <div>
          <SettingsIcon className='text-buttonColor' style={{ fontSize: 22 }} />
        </div>
      </div>
    </div>
  )
}

export default Navigation