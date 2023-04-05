import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Box, Heading, HStack, Pressable, Stack, Text, VStack} from 'native-base';
import {HStackHomeView} from "./HStackHomeView";

export const HomeView = ({navigation}) => {
    const description = " I'm currently studying applied information technologies at KdG university in Antwerp.\n" +
        "My skills include Java, .NET, Kotlin,..., being social and talkative.\n" +
        "I thought myself some cyber security skills.\n" +
        "In my spare time I developed an android game called Fire Fighter which is available on the play store!\n" +
        "Whenever I am not studying for school you will probably find me in the woods on my mountainbike or behind my laptop learning new computer languages. At this moment I’m developing an app which will help students find out their ideal study method and give them more insight about mental health during academic year!\n" +
        +"Please feel free to reach out to me via LinkedIn Messenger if you would like to get to know me more!";

    return (
        <View style={styles.container}>
            <VStack p={2}>
                <Box
                    maxW="90%"
                    borderWidth={1}
                    borderColor="coolGray.200"
                    borderRadius={10}
                    overflow="hidden"
                    _dark={{borderColor: "coolGray.600", backgroundColor: "gray.700"}}
                    _light={{backgroundColor: "gray.50"}}
                >
                    <Avatar marginLeft={4} marginTop={5} source={{
                        uri: "https://scontent.fbru1-1.fna.fbcdn.net/v/t39.30808-6/275046006_2880018462163135_1363094168630374256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nLmX689CpFEAX_ujQQx&_nc_ht=scontent.fbru1-1.fna&oh=00_AfAbEpi6wLJJYJLIrw7x6gx265sK9MiHbX854c7Ov1NyvA&oe=643176C0"
                    }} size="2xl"
                    >
                    </Avatar>
                    <Stack p={4} space={3}>
                        <Stack space={2}>
                            <Heading size="md">
                                Yarno Van de Weyer
                            </Heading>
                            <Text fontSize="xs" _light={{color: "violet.500"}} _dark={{color: "violet.300"}}
                                  fontWeight="500">
                                Full-stack Development
                            </Text>
                        </Stack>
                        <Text fontWeight="400">
                            {description.slice(0, 305).concat("...")}
                        </Text>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Pressable onPress={() => alert("test alert")}>
                                <Text color="coolGray.500" _dark={{color: "warmGray.200"}} fontWeight="400">
                                    Read more...
                                </Text>
                            </Pressable>
                        </HStack>
                    </Stack>
                </Box>
                <HStackHomeView navigation={navigation}/>
            </VStack>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
});


