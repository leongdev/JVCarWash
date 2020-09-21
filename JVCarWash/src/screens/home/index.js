import React, {useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {styles} from './style';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getWindowSizes, useColor} from '../../utils/hookUtils';
import JVFeedback from '../../components/JVFeedback';
import JVStoriesModal from '../../components/JVStoriesModal';
import JVHeader, {JVHeaderTypes} from '../../components/JVHeader';
import JVStories from '../../components/JVStories';
import JVBanner from '../../components/JVBanner';
import Modal from 'react-native-modal';

import * as data from '../../constants/dummyData';
import {JVSafeArea} from '../../components/JVSafeArea';

const HomeScreen = ({navigation, props}) => {
  const [activeStories, setStories] = useState(false);
  const [linkStories, setLinktories] = useState('');
  const [activeSlide, setSlide] = useState(0);

  const color = useColor();
  const style = styles(color);

  /**
   * Shows the stores modal video with the given url video
   * @param videoUrl
   */
  function setStoriesModal(videoUrl: string): void {
    setLinktories(videoUrl);
    setStories(true);
  }

  /**
   * Renders the feedback list
   * @param item
   * @returns {JSX.Element}
   */
  function renderFeedback(item: Object): JSX.Element {
    return (
      <JVFeedback
        imageUrl={item.image}
        userName={item.name}
        date={item.date}
        star={item.stats}
        comment={item.comment}
      />
    );
  }

  /**
   * Renders the Stories list
   * @param item
   * @returns {JSX.Element}
   */
  function renderStories(item: Object): View {
    return (
      <JVStories
        onPress={() => setStoriesModal(item.item.video)}
        storiesType={'primary'}
        imageSource={item.item.image}
        title={item.item.title}
      />
    );
  }

  /**
   * Renders Banner list
   * @param item
   * @returns {JSX.Element}
   */
  function renderBanner(item: Object): View {
    return (
      <JVBanner
        bannerTitle={'Full Wash'}
        bannerItem={item.item}
        imageSource={item.item.image}
      />
    );
  }

  return (
    <JVSafeArea>
      <JVHeader
        headerTitle={'Home'}
        navigation={navigation}
        type={JVHeaderTypes.default}
      />
      <Modal
        isVisible={activeStories}
        propagateSwipe
        swipeDirection={'down'}
        onSwipeComplete={() => setStories(false)}>
        <JVStoriesModal videoUrl={linkStories} backdropOpacity={0} />
      </Modal>
      <ScrollView style={style.homeScrollView} invertStickyHeaders={true}>
        <FlatList
          style={style.homeFlatList}
          keyExtractor={(item) => item.id}
          data={data.STORIES_DATA}
          renderItem={(item) => renderStories(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Carousel
          layout={'default'}
          data={data.BANNER_DATA}
          renderItem={(item) => renderBanner(item)}
          onSnapToItem={(index) => setSlide(index)}
          sliderWidth={getWindowSizes().width}
          itemWidth={getWindowSizes().width * 0.9}
          inactiveSlideOpacity={0.2}
        />
        <Pagination
          dotsLength={data.BANNER_DATA.length}
          activeDotIndex={activeSlide}
          dotStyle={style.paginationDotActive}
          inactiveDotStyle={style.paginationDotInactive}
          inactiveDotOpacity={1}
        />
        <FlatList
          style={style.homeFeedbackFlatList}
          keyExtractor={(item) => item.id}
          data={data.FEEDBACK_DATA}
          renderItem={(item) => renderFeedback(item.item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
        />
      </ScrollView>
    </JVSafeArea>
  );
};

export default HomeScreen;
