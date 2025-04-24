"use client";
import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";


import {
  IconSettings,
  IconHelpCircle,
  IconSearch,
} from "@tabler/icons-react"


export function NavSecondary({
  ...props
}) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
        
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="settings">
                  <IconSettings/>
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="gethelp">
                  <IconHelpCircle/>
                  <span>Get Help</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
 
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="Search">
                  <IconSearch/>
                  <span>Search</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
 
 


        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
