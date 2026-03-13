/**
 * App Component
 * 
 * Main application component that sets up routing and layout structure.
 * It renders a responsive layout with header, sidebar (commented out), and
 * dynamic routes for dashboard and smoke log pages.
 * 
 * @component
 * @example
 * // Renders the main app structure
 * <App />
 */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box, Flex, Heading } from '@chakra-ui/react'

//import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
//import SmokeLog from './pages/SmokeLog'
import Header from './components/Header'

/**
 * SmokeLog placeholder component
 * 
 * Displays a heading indicating where smoke history will be shown.
 * Currently a temporary placeholder until full implementation.
 * 
 * @component
 * @returns {JSX.Element} The rendered smoke log placeholder
 */
const SmokeLog = () => <Heading>Your Smoke History</Heading>


/**
 * Main application component
 * 
 * Wraps the entire app in React Router and Chakra UI layout components.
 * Provides the top-level navigation structure and route handling.
 * 
 * @returns {JSX.Element} The rendered application structure
 */
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex minH={"100vh"} bg{"gray.900"} color{"white"}>
        <Box flex{"1"} p{8}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/smokes" element={<SmokeLog />} />
          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  )
}