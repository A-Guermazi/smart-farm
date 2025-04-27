"use client";

import {
  IconDashboard,
  IconDeviceDesktopAnalytics,
  IconBell,
  IconHomeEco,
  IconDroplet,
} from "@tabler/icons-react";

// import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* this is a button to create a new item and i don't want to implement that */}
        {/* <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline">
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>



        </SidebarMenu> */}

        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="dashboard">
              <SidebarMenuButton tooltip="Dashboard">
                <IconDashboard />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="analytics">
              <SidebarMenuButton tooltip="Analytics">
                <IconDeviceDesktopAnalytics />
                <span>Analytics</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="greenhouse">
              <SidebarMenuButton tooltip="Green House">
                <IconHomeEco />
                <span>Green House</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="weatherstation">
              <SidebarMenuButton tooltip="Weather Station">
                <IconDroplet />
                <span>Weather Station</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="reqtojoin">
              <SidebarMenuButton tooltip="Green House">
                <IconHomeEco />
                <span>Requests To Join</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="notification">
              <SidebarMenuButton tooltip="Notification">
                <IconBell />
                <span>Notification</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          {/*  */}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
