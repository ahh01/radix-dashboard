import {
  Flex,
  Tabs,
  IconButton,
} from "@radix-ui/themes";

export function Header() {
  return (
    <>
      <div className="Header">
        <Flex direction="column" gap="3">
          <Tabs.Root defaultValue="account">
            <Tabs.List size="2">
              <Tabs.Trigger value="account">Overview</Tabs.Trigger>
              <Tabs.Trigger value="documents">Customers</Tabs.Trigger>
              <Tabs.Trigger value="product">Products</Tabs.Trigger>
              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              <input
                type="search"
                placeholder="Search..."
                className="flex h-9 w-full"
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
    </>
  );
}