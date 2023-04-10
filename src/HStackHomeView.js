import {Box, Heading, HStack, Icon, Link, Pressable, Stack, Text, VStack} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export const HStackHomeView = ({navigation}) => {
    return (
        <Stack mt={5}>
            <Box
                maxW="2xl"
                borderWidth={1}
                borderColor="gray.200"
                borderRadius={10}
                overflow="hidden"
                _dark={{borderColor: "coolGray.600", backgroundColor: "gray.700"}}
                _light={{backgroundColor: "coolGray.50"}}
                boxShadow="md"
            >
                <VStack p={6} >
                    <Heading size="md" mb={4}>Contact me</Heading>
                    <HStack alignItems="center">
                        <Icon mr={1} as={Ionicons} name="mail-outline" size="sm" color="green.500"/>
                        <Link href="mailto:yarno.vandeweyer@student.kdg.be" color="gray.500"
                              fontWeight="medium">yarno.vandeweyer@student.kdg.be</Link>
                    </HStack>
                    <HStack alignItems="center" mt={4}>
                        <Icon mr={1} as={Ionicons} name="phone-portrait-outline" size="sm" color="red.500"/>
                        <Text color="gray.500" fontWeight="medium">+32 484 52 4024</Text>
                    </HStack>
                    <HStack alignItems="center" mt={4}>
                        <Icon mr={1} as={Ionicons} name="logo-linkedin" size="sm" color={"blue.500"}/>
                        <Link href="https://www.linkedin.com/in/yarno-van-de-weyer-069986232/" color="linkedin.500"
                              fontWeight="medium">Yarno Van de Weyer</Link>
                    </HStack>
                    <HStack alignItems="center" mt={4}>
                        <Icon mr={1} as={Ionicons} name="logo-github" size="sm" color="black"/>
                        <Link href="https://github.com/yarnovdw" color="gray.500" fontWeight="medium">YarnoVdW</Link>
                    </HStack>
                    <HStack alignItems={"center"} mt={4}>
                        <Icon mr={1} as={Ionicons} name={"bug-outline"} size={"sm"} color={"purple.400"}/>
                        <Pressable onPress={() => navigation.navigate("Projects")}>
                            <Text color="gray.500" fontWeight="medium"  textDecorationLine="underline">
                                Check out some of my projects!
                            </Text>
                        </Pressable>
                    </HStack>

                </VStack>
            </Box>
        </Stack>
    );
}