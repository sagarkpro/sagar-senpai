import TimelineEvent from '@/models/TimelineEvent'
import React from 'react'

export default function JourneyComponent({...props}: Readonly<TimelineEvent>) {
  return (
    <div className="w-full text-white mt-4">
      hello im prop - {props.status}
      <div className="w-full">
        {props.content}
      </div>
    </div>
  )
}
