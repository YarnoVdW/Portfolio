import {StyleSheet, Text, View} from "react-native";
import {Box, FlatList, Heading, HStack, Pressable, VStack} from "native-base";
import {useEffect, useState} from "react";


async function fetchProjects() {
    try {
        const response = await fetch("https://api.github.com/users/yarnoVdW/repos");
        return (await response).json();
    } catch (error) {
        console.log(error)
    }
}

export const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function getProjects() {
            const data = await fetchProjects();
            setProjects(data);
        }
        getProjects();
    }, []);

    const renderProjectItem = ({item}) => (
        <Box
            borderWidth={1}
            borderColor="gray.200"
            borderRadius={4}
            overflow="hidden"
            backgroundColor={"coolGray.50"}
            shadow={"lg"}
            mb={2}
            mx={2}
            style={styles.box}>
            <Pressable _pressed={{bgColor: "coolGray.200"}} onPress={() => alert(item.name)}>
                <Box p={4}>
                    <VStack space={2}>
                        <Heading size="md" isTruncated>
                            {item.name}
                        </Heading>
                        <Text color="coolGray.600" isTruncated>
                            {item.description == null ? "" : item.description.length > 50
                                ? `${item.description.slice(0, 100)}...`
                                : item.description}
                        </Text>
                        <HStack justifyContent="space-between">
                            <Text fontSize="xs" style={styles.textLanguage}>
                                {item.language == null ? "" : item.language}
                            </Text>
                            {(
                                <Text fontSize="xs" color="coolGray.500">
                                    Read more...
                                </Text>
                            )}
                        </HStack>
                    </VStack>
                </Box>
            </Pressable>
        </Box>
    );

    return (
        <View style={styles.container}>
            <Box>
                <Heading marginTop={10} fontSize="xl" p={4} pb={3}>
                    Projects
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
    }
});