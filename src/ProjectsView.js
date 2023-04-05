import {Pressable, Text} from "react-native";
import {Avatar, Box, FlatList, Heading, HStack, Spacer, VStack} from "native-base";
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
        >
            <Pressable onPress={() => console.log(item.name)}>
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
                        <HStack justifyContent="space-between">
                            <Text fontSize="xs" color="coolGray.500">
                                {item.timeStamp}
                            </Text>
                            {(
                                <Pressable onPress={() => console.log(item.description)}>
                                    <Text fontSize="xs" color="primary.500">
                                        Read More
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
        <Box>
            <Heading fontSize="xl" p={4} pb={3}>
                Projects
            </Heading>
            <FlatList
                data={projects}
                renderItem={renderProjectItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </Box>
    );
};
