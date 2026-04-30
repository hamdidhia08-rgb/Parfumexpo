import ActivityCard from '@/Components/Admin/Card/ActivityCard'
import RecentSignupCard from '@/Components/Admin/Card/RecentSignupCard'
import TopPerfumesCard from '@/Components/Admin/Card/TopPerfumesCard'
import VisitorTrafficCard from '@/Components/Admin/Card/VisitorTrafficCard'
import { ChartAreaInteractive } from '@/Components/Admin/Chart/VisitorsChart'
import OverviewBox from '@/Components/Admin/OverviewBox/OverviewBox'
import React from 'react'

export default function Page() {
  return (
    <div>
        <OverviewBox/>
        <ChartAreaInteractive/>

      {/* 2 COMPONENTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-7">
        <VisitorTrafficCard/>
        <RecentSignupCard/>
      </div>
    </div>
  )
}
