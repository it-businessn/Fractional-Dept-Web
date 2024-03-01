import {
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function GetStartedForm() {
  return (
    <>
      <Heading
        textAlign="center"
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
      >
        Thank you for your interest!
      </Heading>
      <Text textAlign="center" fontSize={{ base: "md", lg: "lg" }}>
        Please fill in the form below and our representative will contact you
        shortly.
      </Text>
      <Stack p="2em 0">
        <HStack>
          <FormControl>
            <Input type="text" placeholder="First Name" />
          </FormControl>
          <FormControl>
            <Input type="text" placeholder="Last Name" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <Input type="email" placeholder="Email" />
          </FormControl>
          <FormControl>
            <Input type="text" placeholder="Phone" />
          </FormControl>
          <FormControl>
            <Input type="text" placeholder="Ext" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <Input type="text" placeholder="Title" />
          </FormControl>
          <FormControl>
            <Input type="text" placeholder="Company name" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <Input type="text" placeholder="Address" />
          </FormControl>
          <FormControl>
            <Input type="text" placeholder="City/Town" />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <Select placeholder="Province">
              <option>British Columbia</option>
            </Select>
          </FormControl>
          <FormControl>
            <Input type="text" placeholder="Postal code" />
          </FormControl>
        </HStack>
        <HStack w={"100%"}>
          <FormControl>
            <Input
              type="text"
              placeholder="Number of employees
                                                "
            />
          </FormControl>
          <FormControl>
            <Select placeholder="Current solution">
              <option>British Columbia</option>
            </Select>
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <Select placeholder="How did you hear about us?">
              <option>Partnership Opportunity</option>
            </Select>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>I'm interested in</FormLabel>
          <HStack justify={"space-evenly"}>
            <Stack direction={"column"}>
              <Checkbox>Payroll and HR</Checkbox>
              <Checkbox>Managed IT</Checkbox>
              <Checkbox>Bookkeeping</Checkbox>
            </Stack>
            <Stack direction={"column"}>
              <Checkbox>C-Suite Level Services</Checkbox>
              <Checkbox>Marketing</Checkbox>
              <Checkbox> Artificial Intelligence</Checkbox>
            </Stack>
          </HStack>
        </FormControl>
      </Stack>
    </>
  );
}
