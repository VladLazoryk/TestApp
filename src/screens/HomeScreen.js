import React, {useEffect, useLayoutEffect, Component} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from 'react-navigation-hooks';
import { getPhotosRequest, getPhotosSuccess, getPhotosFailure, setPageNum, refresh } from '../store/actions/photosActions';
import ErrorScreen from './ErrorScreen';

export default function HomeScreen() {

    const data = useSelector(state => state.data);
    const pending = useSelector(state => state.pending);
    const error = useSelector(state => state.error);
    const page = useSelector(state => state.page);
  
    const dispatch = useDispatch();
    const { navigate } = useNavigation();
  
    useEffect( () => {
      if (data.length === 0 && pending === false) {
        dispatch(fetchData(getURL(), data));
        dispatch(setPageNum(page + 1));
      }
    });
  
  
    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
          }}
        />
      );
    };
  
    handleLoadMore = () => {
      if (!pending) {
        dispatch(fetchData(getURL(), data));
        dispatch(setPageNum(page + 1));
      }
    };
  
    handleRefresh = () => {
      dispatch(refresh());
    };
  
  
    if (error != null) {
      return(
        <ErrorScreen/>
    )}
  
    return (
      <View style={styles.container}>
        <FlatList
          data= {data}
          renderItem= {item => Post(navigate, item)}
          initialNumToRender= {10}
          keyExtractor= {(item, index) => index.toString()}
          ItemSeparatorComponent= {renderSeparator}
  
          onRefresh= {handleRefresh}
          refreshing= {pending}
  
          onEndReachedThreshold= {0.5}
          onEndReached= {handleLoadMore}
  
          removeClippedSubviews= {true}
        />
      </View>
    );
  };
  
  HomeScreen.navigationOptions = {
    title: 'Home'
  };
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#fff",
     },
     centered:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
     },
  });

  const mapStateToProps = state => {
    return {
        data: state.imagesData.apidata,
        isFetching: state.imagesData.isFetching
    }
}
