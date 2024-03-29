import { Box, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

export const HtmlContent: FC = () => (
  <Box zIndex="999" p="80px"  w="100vw">
    <VStack
      position="absolute"
      justifyContent="start"
      alignItems="start"
      spacing={0}
    >
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <Heading as="h1" fontSize="100px" fontWeight={800} mt="80px">
          Full Stack
        </Heading>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <Heading as="h2" fontSize="120px" fontWeight={800}>
          Web Developer
        </Heading>
      </motion.div>
    </VStack>
    <VStack
      position="absolute"
      top='100vh'
      w="100%"
      right='-500px'
      spacing={0}
    >
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <Heading as="h1" fontSize="100px" fontWeight={800} mt="80px">
          Leonardo
        </Heading>
      </motion.div>
    </VStack>
  </Box>
);
