"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import { getAosProps } from "@/lib/animations/aos";
import { Bell } from "lucide-react";
import { memo } from "react";
import {
  notificationChannels,
  notificationPreviews,
  notificationStats,
  type NotificationChannel,
  type NotificationPreview,
} from "./_data/complianceData";

const ChannelCard = memo(function ChannelCard({
  channel,
  index,
}: {
  channel: NotificationChannel;
  index: number;
}) {
  const Icon = channel.icon;

  return (
    <article
      {...getAosProps("fade-right", index * 80)}
      className="ds-card flex items-start gap-4 p-5 transition-shadow duration-300 hover:shadow-md"
    >
      <div className="ds-icon-box h-12 w-12 shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="mb-1 text-base font-semibold text-ds-text">
          {channel.title}
        </h3>
        <p className="text-sm leading-relaxed text-ds-muted-foreground">
          {channel.description}
        </p>
      </div>
    </article>
  );
});

const NotificationRow = memo(function NotificationRow({
  notif,
}: {
  notif: NotificationPreview;
}) {
  return (
    <div className="flex items-start gap-3 px-5 py-4 transition-colors duration-200 hover:bg-ds-muted/30">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ds-muted/50">
        <Bell className={`h-5 w-5 ${notif.iconClassName}`} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${notif.tagClassName}`}
          >
            {notif.tag}
          </span>
          <span className="shrink-0 text-xs text-ds-muted-foreground">
            {notif.time}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ds-muted-foreground">
          {notif.message}
        </p>
      </div>
    </div>
  );
});

const NotificationSection = () => (
  <section className="rounded-3xl border border-ds-border bg-ds-surface-elevated px-4 py-16 md:px-8 [content-visibility:auto]">
    <div className="mb-12">
      <SectionTitle
        label="Notification System"
        icon={Bell}
        title="Always Stay"
        titleHighlight="In The Loop"
        description="Never miss a critical update. Our multi-channel notification system keeps buyers, suppliers, and admins informed in real time."
        aosAnimation="fade-up"
      />
    </div>

    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
      <div className="space-y-5">
        {notificationChannels.map((channel, index) => (
          <ChannelCard key={channel.id} channel={channel} index={index} />
        ))}

        <div className="mt-2 grid grid-cols-3 gap-4">
          {notificationStats.map((stat, index) => (
            <div
              key={stat.label}
              {...getAosProps("zoom-in-up", index * 60)}
              className="ds-card p-4 text-center shadow-sm"
            >
              <p className="text-xl font-bold text-ds-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-ds-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <MotionReveal direction="left" delay={0.1}>
        <div className="ds-card overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-ds-border px-5 py-4">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-ds-primary" />
              <span className="text-sm font-semibold text-ds-text">
                Notification Feed
              </span>
            </div>
            <span
              className="h-2.5 w-2.5 rounded-full bg-ds-primary motion-safe:animate-pulse"
              aria-hidden
            />
          </div>

          <MotionStagger className="divide-y divide-ds-border" stagger={0.08}>
            {notificationPreviews.map((notif) => (
              <MotionStaggerItem key={notif.id}>
                <NotificationRow notif={notif} />
              </MotionStaggerItem>
            ))}
          </MotionStagger>

          <div className="border-t border-ds-border px-5 py-3 text-center">
            <span className="cursor-pointer text-sm font-medium text-ds-primary transition-opacity hover:underline">
              View All Notifications →
            </span>
          </div>
        </div>
      </MotionReveal>
    </div>
  </section>
);

export default NotificationSection;
