// components/AnnouncementCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MoreHorizontal } from "lucide-react";

interface AnnouncementProps {
  title: string;
  time: string;
}

export default function AnnouncementCard({
  announcements,
}: {
  announcements: AnnouncementProps[];
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">Announcement</CardTitle>
        <Button variant="ghost" size="sm">
          Today, 13 Sep 2021
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {announcements.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Star size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal size={16} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Button variant="link" className="mt-4 text-red-500">
          See All Announcement
        </Button>
      </CardContent>
    </Card>
  );
}
