import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function MobileNavItem({ label, children, href, onToggle }) {
  return (
    <Stack spacing={4} onClick={() => onToggle()}>
      <NavLink to={href ?? "#"}>
        <Box
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            textTransform="uppercase"
            py={2}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              // transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Box>
      </NavLink>

      <Collapse animateOpacity style={{ marginTop: "0 !important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children?.map((child) => (
            <Box as="a" key={child.label} py={2} href={child.href}>
              {child.label}
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
