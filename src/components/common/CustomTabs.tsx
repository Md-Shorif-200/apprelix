"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type TabItem = {
  value: string;
  label: string;
  content?: React.ReactNode;
};

type CustomTabsProps = {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  tabs: TabItem[];
  className?: string;
  tabsListClassName?: string;
  tabsTriggerClassName?: string;
  activeTabsTriggerClassName?: string;
  inactiveTabsTriggerClassName?: string;
  tabsContentClassName?: string;
  showContent?: boolean;
};

const CustomTabs = ({
  defaultValue,
  value,
  onValueChange,
  tabs,
  className = "",
  tabsListClassName = "",
  tabsTriggerClassName = "",
  activeTabsTriggerClassName = "data-active:bg-gradient-to-r from-[#FFD785] to-[#B7814B] border-none shadow-none ring-0 outline-none  data-active:text-black font-semibold",
  inactiveTabsTriggerClassName = "text-(--ds-text-muted) ",
  tabsContentClassName = "",
  showContent = true,
}: CustomTabsProps) => {
  const commonTabsListClassName =
    "!h-auto rounded-md border border-(--ds-border-accent) bg-(--ds-bg) p-1";
  const commonTabsTriggerClassName =
    "!h-auto cursor-pointer rounded-md transition-colors hover:text-(--ds-text)";

  return (
    <Tabs
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={`w-full ${className}`}
    >
      <TabsList
        className={`grid w-full ${commonTabsListClassName} ${tabsListClassName}`}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`${commonTabsTriggerClassName} ${inactiveTabsTriggerClassName} ${activeTabsTriggerClassName} ${tabsTriggerClassName}`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {showContent &&
        tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className={tabsContentClassName}
          >
            {tab.content}
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default CustomTabs;
