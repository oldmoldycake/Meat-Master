import { Drawer, IconButton, Portal, CloseButton, Text } from "@chakra-ui/react";

/**
 * Hamburger icon component for the menu drawer.
 * 
 * @returns JSX element representing the hamburger icon.
 */
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

/**
 * MenuDrawer component that renders a collapsible menu drawer with a hamburger icon trigger.
 * 
 * @returns JSX element representing the menu drawer.
 */
export default function MenuDrawer() {
  return (
    <Drawer.Root placement="start" size="xs">
      <Drawer.Trigger asChild>
        <IconButton aria-label="Open menu" variant="ghost">
          <HamburgerIcon />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg{"gray.500"}>
            <Drawer.Header>
              <Drawer.Title>
                Meat Master
              </Drawer.Title>
            </Drawer.Header>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>

          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
