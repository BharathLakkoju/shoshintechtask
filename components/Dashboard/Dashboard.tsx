import StatCard from "@/components/Dashboard/StatCard";
import ChartCard from "@/components/Dashboard/ChartCard";
import AnnouncementCard from "@/components/Dashboard/AnnouncementCard";
import ScheduleCard from "@/components/Dashboard/ScheduleCard";
import RecentActivityCard from "@/components/Dashboard/RecentActivityCard";

const announcements = [
  { title: "Outing schedule for every department", time: "5 Minutes ago" },
  { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-start mt-20 md:mt-24 lg:ml-24">
      <div className="pl-10 py-8 pr-8 max-w-[50rem]">
        <span className="text-2xl font-bold">Dashboard</span>

        <div className="grid md:grid-cols-3 gap-6 mb-6 mt-6">
          <StatCard
            title="Available Position"
            value={24}
            subtext="4 Urgently needed"
            color="red"
          />
          <StatCard
            title="Job Open"
            value={10}
            subtext="4 Active hiring"
            color="blue"
          />
          <StatCard
            title="New Employees"
            value={24}
            subtext="4 Department"
            color="purple"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ChartCard
            title="Total Employees"
            value={216}
            subtext={
              <>
                <div className="flex flex-col gap-1 my-3">
                  <span>120 men</span>
                  <span>96 Women</span>
                </div>
              </>
            }
            change="+2% Past month"
          />
          <ChartCard
            title="Talent Request"
            value={16}
            subtext={
              <>
                <div className="flex flex-col gap-1 my-3">
                  <span>6 men</span>
                  <span>10 Women</span>
                </div>
              </>
            }
            change="+5% Past month"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-2">
            <AnnouncementCard announcements={announcements} />
          </div>
        </div>
      </div>
      <div className="min-w-[200px] flex flex-col justify-start items-start gap-10 lg:mt-20">
        <RecentActivityCard />
        <ScheduleCard />
      </div>
    </div>
  );
}
