import { Grid, GridItem } from '@chakra-ui/react'
import MenuDrawer from './MenuDrawer'

/**
 * Header component that renders the application header with a menu drawer.
 * 
 * @returns {JSX.Element} The rendered Header component
 */
export default function Header() {
  return (
    <Grid
      h{"50px"}
      templateRows{"repeat(1,1fr"}
      templateColumns{"repeat(5, 1fr)"}
      gap{4}
    >
      <GridItem rowSpan{1} colSpan{1} bgColor{"gray.600"}>
        <MenuDrawer />
      </GridItem>


    </Grid>
  )

}