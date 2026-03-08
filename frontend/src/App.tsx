import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box, Flex, Heading } from '@chakra-ui/react'

//import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
//import SmokeLog from './pages/SmokeLog'
import Header from './components/Header'
const SmokeLog = () => <Heading>Your Smoke History</Heading>


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex minH={"100vh"} bg={"gray.900"} color={"white"}>
        <Box flex={"1"} p={8}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/smokes" element={<SmokeLog />} />
          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  )
}

