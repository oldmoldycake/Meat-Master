import { Grid, GridItem, Box, Text } from "@chakra-ui/react";

const recentSmokesMock = ["Ribs", "Pulled Pork", "Salmon"]
export default function Dashboard() {
  return (
    <Grid
      h={"200px"}
      templateRows={"repeat(3, 1fr)"}
      templateColumns={"repeat(2, 1fr)"}
      gap={4}
    >
      <GridItem rowSpan={3} colSpan={1}>
        <Box
          bg="gray.700"
          borderRadius={"lg"}
          padding={"10px"}
          boxShadow={"dark-lg"}
          border={"1px solid"}
          borderColor={"gray.900"}
        >
          <Text>Weather: NIce :)</Text>
        </Box>
      </GridItem>
      {recentSmokesMock.map((meat, index) => (
        <GridItem key={index} colSpan={1} rowSpan={1}>
          <Box
            bg="gray.700"
            borderRadius={"lg"}
            padding={"10px"}
            boxShadow={"dark-lg"}
            border={"1px solid"}
            borderColor={"gray.900"}
          >
            <Text>{meat}</Text>
          </Box>
        </GridItem>
      ))}
    </Grid>

  )

}
