import {Text} from "react-native";
import {Avatar, Box, FlatList, Heading, HStack, Spacer, VStack} from "native-base";

export const Projects =() =>{
    const data = fetch("https://api.github.com/users/yarnoVdW/repos");
    return (
     <Box>
        <Heading fontSize="xl" p="4" pb="3">
            Projects
        </Heading>
        <FlatList  renderItem={({
                                               item
                                           }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">

                <VStack>
                    <Text _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" bold>
                        {item.fullName}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        "test"
                    </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
                    color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                    {item.timeStamp}
                </Text>
            </HStack>
        </Box>} keyExtractor={item => item.id} />
    </Box>
    );
}