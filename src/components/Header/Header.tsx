import './Header.css'
import { Text } from "@chakra-ui/react"

interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <div className="header">
      <Text fontSize="2xl" color="white" fontWeight="bold">
        {text}
      </Text>
    </div>
  )
}