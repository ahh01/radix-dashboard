import React from "react";
import {
  Flex,
  Button,
  Box,
  Card,
  Tabs,
  Popover,
  Grid,
  Text,
  IconButton,
} from "@radix-ui/themes";

export default function App() {
  return (
    <>
      <Card style={{  padding: "16px" }}>
        <div className="Header">
          <Flex direction="column" gap="3">
            <Tabs.Root defaultValue="account">
              <Tabs.List style={{ display: "flex", gap: "8px" }}>
                <Tabs.Trigger value="account">Overview</Tabs.Trigger>
                <Tabs.Trigger value="documents">Customers</Tabs.Trigger>
                <Tabs.Trigger value="product">Products</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                <input
                  type="search"
                  placeholder="  Search..."
                  style={{
                    marginLeft: "auto",
                    marginRight: "8px",
                    height: "36px",
                    width: "300px",
                    borderRadius: "5px",
                    borderWidth: "1px",  // Smal gräns
                    borderColor: "#ccc",  // Grå färg för gränsen
                    borderStyle: "solid",  // Solid linje
                  }}
                />
                <IconButton
                  style={{
                    backgroundImage:
                      'url("https://ui.shadcn.com/avatars/01.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
              </Tabs.List>
            </Tabs.Root>
          </Flex>
        </div>

        <Flex
          align="center"
          justify="space-between"
          style={{ marginBottom: "16px" }}
        >
          <h2 style={{ margin: 0 }}>Dashboard</h2>

          <Flex align="center" gap="3">
            <Popover.Root>
              <Popover.Trigger>
                <Button variant="soft">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Jan 20, 2023 - Feb 09, 2023
                </Button>
              </Popover.Trigger>
            </Popover.Root>
            <Button style={{ marginLeft: "16px" }}>Download</Button>
          </Flex>
        </Flex>

        <Box style={{ maxWidth: "400px" }}>
          <Tabs.Root defaultValue="overview">
            <Tabs.List
              style={{
                backgroundColor: "#f3f4f6",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
              <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
              <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </Box>

        <Grid columns="4" gap="4">
          <Card style={{ margin: "16px" }}>
            <Flex direction="column" gap="2" align="start">
              <Text size="3" weight="bold">
                Total Revenue
              </Text>
              <Text size="6" weight="bold">
                $45,231.89
              </Text>
              <Text size="1">+20.1% from last month</Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                style={{ width: "16px", height: "16px", color: "currentColor" }}
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </Flex>
          </Card>
          <Card style={{ margin: "16px" }}>
            <Flex direction="column" gap="2" align="start">
              <Text size="3" weight="bold">
                Subscriptions
              </Text>
              <Text size="6" weight="bold">
                +2350
              </Text>
              <Text size="1">+20.1% from last month</Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                style={{ width: "16px", height: "16px", color: "currentColor" }}
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </Flex>
          </Card>
          <Card style={{ margin: "16px" }}>
            <Flex direction="column" gap="2" align="start">
              <Text size="3" weight="bold">
                Sales
              </Text>
              <Text size="6" weight="bold">
                +12,234
              </Text>
              <Text size="1">+20.1% from last month</Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                style={{ width: "16px", height: "16px", color: "currentColor" }}
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <path d="M2 10h20"></path>
              </svg>
            </Flex>
          </Card>
          <Card style={{ margin: "16px" }}>
            <Flex direction="column" gap="2" align="start">
              <Text size="3" weight="bold">
                Active Now
              </Text>
              <Text size="6" weight="bold">
                +573
              </Text>
              <Text size="1">+20.1% from last month</Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                style={{ width: "16px", height: "16px", color: "currentColor" }}
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </Flex>
          </Card>
        </Grid>
      </Card>
    </>
  );
}
