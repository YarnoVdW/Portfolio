import {Animated, StyleSheet, Text, useColorScheme} from "react-native";
import {Box, Heading, HStack, Pressable, useColorMode, VStack, View} from "native-base";
import React, {useEffect, useState} from "react";

async function fetchProjects() {

    try {
        const response = await fetch("https://api.github.com/users/yarnoVdW/repos");
        return (await response).json();
    } catch (error) {
        console.log(error)
    }

}

export const Projects = () => {
    const colorMode = useColorScheme();
    const backgroundColor = colorMode === 'light' ? 'coolGray.50' : 'coolGray.300';
    console.log(colorMode);
    const scrollY = React.useRef(new Animated.Value(0)).current;

    const AnimatedBox = Animated.createAnimatedComponent(Box);

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function getProjects() {
            const data = await fetchProjects();
            setProjects(data);
        }
        getProjects();
    }, []);

    const renderProjectItem = ({item, index}) => {
        const inputRange = [-1, 0, index * 150, (index + 2) * 150];
        const outputRange =  [1, 1, 1, 0];
        const scale = scrollY.interpolate({
            inputRange,
            outputRange: outputRange,
            extrapolate: 'clamp',
        });

        const opacity = scrollY.interpolate({
            inputRange: [-1, 0, index * 150, (index + 1) * 150],
            outputRange: outputRange
        })

        return (
            <AnimatedBox
                borderWidth={1}
                borderRadius={20}
                overflow="hidden"
                borderColor={"coolGray.200"}
                backgroundColor={backgroundColor}
                shadow={"lg"}
                opacity={opacity}
                style={{
                    transform: [{scale}],
                    margin: 10,
                    shadowColor: "#000",
                    shadowOffset: {width: 0, height:10},
                    shadowRadius: 20
                }}
            >
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
                                    <Text fontSize="xs" style={{color: "#6b7280"}}>
                                        Read more...
                                    </Text>
                                )}
                            </HStack>
                        </VStack>
                    </Box>
                </Pressable>
            </AnimatedBox>
        );
    }

    return (
        <View styles={{backgroundColor}}>
            <Box marginTop={10}>
                <Animated.FlatList
                    data={projects}
                    renderItem={renderProjectItem}
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true})}
                />
            </Box>
        </View>
    );
};
const styles = StyleSheet.create({
    textLanguage: {
        color: "#8b5cf6"
    },
});