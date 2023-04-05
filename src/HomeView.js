import {AspectRatio, Box, Center, Heading, HStack, Stack, Image} from "native-base";
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import flex from "native-base/src/components/primitives/Flex";
import {useState} from "react";
import {Projects} from "./ProjectsView";
export const HomeView = ({navigation}) => {
    return(
        <View style={styles.box}>
            <Box style={styles.box}>
                <Box maxW="80" alignItems={"center"}  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                        </AspectRatio>

                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md">
                                Mijn portfolio
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.300"
                            }} fontWeight="500">
                                Van de Weyer Yarno
                            </Text>
                        </Stack>
                        <Text fontWeight="400">
                            Ik ben Yarno, student applicatieontwikkeling aan Karel de Grote.
                            Al van jongs af aan ben ik heel gepassioneerd over computers.
                            Het schrikt me dus ook niet af om in mijn vrije tijd veel bij te leren.
                            Als je me niet achter mijn computer ziet zitten, zit ik waarschijnlijk in het bos op mijn Mountainbike.
                        </Text>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Pressable onPress={()=> {
                                    alert("test alert");
                                }}>
                                    <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                    }} fontWeight="400">
                                        Lees meer...
                                    </Text>
                                </Pressable>

                            </HStack>
                        </HStack>
                    </Stack>
                </Box>
            </Box>
            <HStack alignItems="center" justifyContent={"center"} marginBottom={10}>
                <Button title={"Projects"} onPress={()=>{
                    navigation.navigate("Projects");
                }}>
                </Button>
            </HStack>
        </View>


    );

};

const styles = StyleSheet.create({
    box: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
});