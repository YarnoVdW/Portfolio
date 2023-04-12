import {Animated, Dimensions, StyleSheet, Text, useColorScheme} from "react-native";
import {Box, Heading, HStack, Pressable, VStack, View, Spinner} from "native-base";
import React, {useEffect, useState} from "react";
import {SharedElement} from "react-navigation-shared-element";

const {width, height} = Dimensions.get('window');
console.log(height);
async function fetchProjects() {

    try {
        const response = await fetch("https://api.github.com/users/yarnoVdW/repos");
        return (await response).json();
    } catch (error) {
        console.log(error)
    }

}

export const Projects = ({navigation}) => {
    const colorMode = useColorScheme();
    const backgroundColor = colorMode === 'light' ? 'coolGray.50' : 'coolGray.300';
    console.log(colorMode);
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const AnimatedView = Animated.createAnimatedComponent(View);

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function getProjects() {
            const data = await fetchProjects();
            setProjects(data);
        }

        getProjects();
    }, []);

    const renderProjectItem = ({item, index}) => {
        const inputRange = [-1, 0, index * (height/6), (index + 2) * (height/6)];
        const outputRange = [1, 1, 1, 0];
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
            <Pressable _pressed={{bgColor: "coolGray.200"}} onPress={() => navigation.navigate('ProjectDetails', { item })}>
                <AnimatedView
                    borderWidth={1}
                    borderRadius={20}
                    overflow="hidden"
                    borderColor={"coolGray.200"}
                    backgroundColor={backgroundColor}
                    shadow={"lg"}
                    height={height / 6}
                    width={width - 20}
                    opacity={opacity}
                    style={{
                        transform: [{ scale }],
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10
                    }}
                >
                    <VStack space={2} p={4}>
                        <SharedElement id={`item.${item.name}.name`}>
                            <Heading size="md" isTruncated>
                                {item.name}
                            </Heading>
                        </SharedElement>
                        <SharedElement id={`item.${item.description}.description`}>
                            <Text color="coolGray.600" isTruncated>
                                {item.description == null ? "" : item.description.length > 50
                                    ? `${item.description.slice(0, 100)}...`
                                    : item.description}
                            </Text>
                        </SharedElement>
                        <HStack justifyContent="space-between">
                            <SharedElement id={`item.${item.language}.language`}>
                                <Text fontSize="xs" style={styles.textLanguage}>
                                    {item.language == null ? "" : item.language}
                                </Text>
                            </SharedElement>
                            {(
                                <Text fontSize="xs" style={{ color: "#6b7280" }}>
                                    Read more...
                                </Text>
                            )}
                        </HStack>
                    </VStack>
                </AnimatedView>
            </Pressable>

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
            <SharedElement id={`general.bg`}>
                <View backgroundColor={"coolGray.300"} borderRadius={20} width={width} height={height}
                      position={"absolute"}
                      style={{transform: [{translateY: height}]}}/>
            </SharedElement>

        </View>
    );
};
const styles = StyleSheet.create({
    textLanguage: {
        color: "#8b5cf6",
        position: 'absolute',
    },
});