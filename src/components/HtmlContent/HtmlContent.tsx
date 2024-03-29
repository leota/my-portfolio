import { useWindow } from "@/hooks/use-window";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import { motion } from "framer-motion";
import { FC } from "react";

export const HtmlContent: FC = () => {
  const { isMobile } = useWindow();
  return (
    <Box zIndex="999" w="100vw">
      <motion.section
        style={{
          position: "absolute",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <Heading
            as="h1"
            fontSize={isMobile ? "40px" : "100px"}
            fontWeight={800}
            mt="80px"
          >
            Full Stack
          </Heading>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <Heading
            as="h2"
            fontSize={isMobile ? "40px" : "120px"}
            fontWeight={800}
          >
            Web Developer
          </Heading>
        </motion.div>
      </motion.section>
      <VStack
        position="absolute"
        top="100vh"
        w="100%"
        right="-500px"
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
};
