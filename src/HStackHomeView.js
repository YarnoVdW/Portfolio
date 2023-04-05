import {Box, Button, Heading, HStack, Icon, Link, Text, VStack} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export const HStackHomeView = ({navigation}) => {
    return (
        <HStack space={2} mt={5} display={"flex"}>
            <Box
                maxW="30%"
                borderWidth={1}
                borderColor="coolGray.200"
                borderRadius={10}
                overflow="hidden"
                _dark={{borderColor: "coolGray.600", backgroundColor: "gray.700"}}
                _light={{backgroundColor: "gray.50"}}
            >
                <Text fontWeight="400">
                    Dummy information 1
                </Text>
                <Button marginTop={10} onPress={() => navigation.navigate("Projects")}>Projects</Button>
            </Box>
            <Box
                maxW="60%"
                borderWidth={1}
                borderColor="gray.200"
                borderRadius={10}
                overflow="hidden"
                _dark={{borderColor: "coolGray.600", backgroundColor: "gray.700"}}
                _light={{backgroundColor: "coolGray.50"}}
                boxShadow="md"
            >
                <VStack p={5} >
                    <Heading size="md" mb={4}>Contact me</Heading>
                    <HStack alignItems="center">
                        <Icon as={Ionicons} name="mail-outline" size="sm" color="gray.500"/>
                        <Link href="mailto:yarno.vandeweyer@student.kdg.be" color="gray.500"
                              fontWeight="medium">yarno.vandeweyer@student.kdg.be</Link>
                    </HStack>
                    <HStack alignItems="center" mt={4}>
                        <Icon as={Ionicons} name="phone-portrait-outline" size="sm" color="gray.500"/>
                        <Text color="gray.500" fontWeight="medium">+32 484 52 4024</Text>
                    </HStack>
                    <HStack alignItems="center" mt={4}>
                        <Icon as={Ionicons} name="logo-linkedin" size="sm" color="linkedin.500"/>
                        <Link href="https://www.linkedin.com/in/yarno-van-de-weyer-069986232/" color="linkedin.500"
                              fontWeight="medium">Yarno Van de Weyer</Link>
                    </HStack>
                    <HStack alignItems="center" mt={4}>
                        <Icon as={Ionicons} name="logo-github" size="sm" color="gray.500"/>
                        <Link href="https://github.com/yarnovdw" color="gray.500" fontWeight="medium">yarnovdw</Link>
                    </HStack>
                </VStack>
            </Box>
        </HStack>


    );
}