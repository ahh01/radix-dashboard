import { Card, Text, Flex, Avatar, Box, Heading } from "@radix-ui/themes";

export function RecentSales() {
  return (
    <Card
      className="w-[40%]"
      style={{
        backgroundColor: "#000000", // Svart bakgrund
        color: "#FFFFFF", // Vit text
      }}
    >
      <Box p="3">
        <Heading as="h2" size="2" style={{ color: "#FFFFFF" }}>
          Recent sales
        </Heading>
        <Text size="2" color="gray" style={{ color: "#CCCCCC" }}>
          You made 265 sales this month
        </Text>
      </Box>

      <Flex justify="between" align="center" p="3">
        <Flex gap="1" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/01.png"
            radius="full"
            fallback="O"
          />
          <Box>
            <Text size="2" weight="bold" style={{ color: "#FFFFFF" }}>
              Olivia Martin
            </Text>{" "}
            <br />
            <Text size="2" color="gray" style={{ color: "#CCCCCC" }}>
              olivia.martin@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold" style={{ color: "#FFFFFF" }}>
          +$1,9999.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/02.png"
            radius="full"
            fallback="J"
          />
          <Box>
            <Text size="2" weight="bold" style={{ color: "#FFFFFF" }}>
              Jackson Lee
            </Text>{" "}
            <br />
            <Text size="2" color="gray" style={{ color: "#CCCCCC" }}>
              jackson.lee@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold" style={{ color: "#FFFFFF" }}>
          +$39.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/03.png"
            radius="full"
            fallback="I"
          />
          <Box>
            <Text size="2" weight="bold" style={{ color: "#FFFFFF" }}>
              Isabella Nguyen{" "}
            </Text>{" "}
            <br />
            <Text size="2" color="gray" style={{ color: "#CCCCCC" }}>
              isabella.nguyen@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold" style={{ color: "#FFFFFF" }}>
          +$299.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/04.png"
            radius="full"
            fallback="W"
          />
          <Box>
            <Text size="2" weight="bold" style={{ color: "#FFFFFF" }}>
              William Kim
            </Text>{" "}
            <br />
            <Text size="2" color="gray" style={{ color: "#CCCCCC" }}>
              will@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold" style={{ color: "#FFFFFF" }}>
          +$99.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/05.png"
            radius="full"
            fallback="S"
          />
          <Box>
            <Text size="2" weight="bold" style={{ color: "#FFFFFF" }}>
              Sofia Davis
            </Text>
            <br />
            <Text size="2" color="gray" style={{ color: "#CCCCCC" }}>
              sofia.davis@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold" style={{ color: "#FFFFFF" }}>
          +$39.00
        </Text>
      </Flex>
    </Card>
  );
}
