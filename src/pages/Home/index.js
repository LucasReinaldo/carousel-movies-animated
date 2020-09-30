import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";

import Loading from "../../animations/Loading";
import Backdrop from "../../components/Backdrop";
import Poster from "../../components/Poster";

import { getMovies } from "../../services/api";

import { EMPTY_ITEM_SIZE, ITEM_SIZE } from "../../global.styles";

import { Container } from "./styles";
import Button from "../../components/Button";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      //in order to keep the first and last poster on focus (up) we create a fake space
      setMovies([
        { key: "fake-space-left" },
        ...movies,
        { key: "fake-space-right" },
      ]);
    };
    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);

  if (!movies) {
    return (
      <View style={StyleSheet.absoluteFillObject}>
        <Loading />
      </View>
    );
  }

  const animateOnScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true }
  );

  return (
    <Container>
      <Backdrop movies={movies} scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false} //avoid to bounce on first and last item
        decelerationRate={0.95} //makes it smoth
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE} //keeps the interval (focus) on each item, without the item_size, would be possible stop whatever you want
        snapToAlignment="start"
        onScroll={animateOnScroll}
        scrollEventThrottle={16} //16 fps
        renderItem={({ item, index }) => {
          //that's why the fake space are rendered in a simple view
          //to see that change the view style -> style={{ width: EMPTY_ITEM_SIZE, backgroundColor: 'red', height: 400 }}
          if (!item.poster) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }
          return <Poster index={index} item={item} scrollX={scrollX} />;
        }}
      />
      <Button />
    </Container>
  );
};

export default Home;
