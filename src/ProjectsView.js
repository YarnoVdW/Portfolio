import {StyleSheet, Text, View} from "react-native";
import {Pressable, Box, FlatList, Heading, HStack, VStack} from "native-base";
import {useEffect, useState} from "react";


async function fetchProjects() {
    try {
        const response = await fetch("https://api.github.com/users/yarnoVdW/repos");
        const data = (await response).json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const Projects =() =>{
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function getProjects() {
            const data = await fetchProjects();
            setProjects(data);
            console.log(data);
        }
        getProjects();
    }, []);
    const renderProjectItem = ({ item }) => (

        <Box
            borderWidth={1}
            borderColor="gray.200"
            borderRadius={4}
            overflow="hidden"
            shadow={"lg"}
            mb={4}
            mx={2}
            style={styles.box}
        >
            <Pressable _pressed={{bgColor:"coolGray.200"}} onPress={() => console.log(item.name)}>
                <Box p={4}>
                    <VStack space={2}>
                        <Heading size="md" isTruncated>
                            {item.name}
                        </Heading>
                        <Text color="coolGray.600" isTruncated>
                            {item.description == null? "" : item.description.length > 50
                                ? `${item.description.slice(0, 50)}...`
                                : item.description}
                        </Text>
                        <Text style={styles.textLanguage}>
                            {item.language}
                        </Text>
                        <HStack justifyContent="space-between">
                            <Text fontSize="xs" color="coolGray.500">
                                {item.timeStamp}
                            </Text>
                            {(
                                <Pressable onPress={() => console.log(item.description)}>
                                    <Text fontSize="xs" color="coolGray.500">
                                        Lees meer...
                                    </Text>
                                </Pressable>
                            )}
                        </HStack>
                    </VStack>
                </Box>
            </Pressable>
        </Box>
    );

    return (
        <View style={styles.container}>
            <Box >
                <Heading fontSize="xl" p={4} pb={3}>
                    Projecten
                </Heading>
                <FlatList
                    data={projects}
                    renderItem={renderProjectItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Box>
        </View>

    );
};
const styles = StyleSheet.create({
    textLanguage: {
        color: "#8b5cf6"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    box: {
        backgroundColor: "#f9fafb",

    }
});