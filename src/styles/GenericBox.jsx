import { Box } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const GenericBox = ({children, gap, fd,  w, p, fw, key, bg, br}) => {
  return (
    <Box display="flex" flexDirection={fd} alignItems="center" w={w} gap={gap} p={p} flexWrap={fw} justifyContent="center" key={key} bg={bg} borderRadius={br}>
        {children}
    </Box>
  )
}

export default GenericBox