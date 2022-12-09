import {Text, SafeAreaView} from 'react-native';
import React, {memo, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {signInRequest} from '../redux/signin/slice';
import {RootState} from '../redux/store';

const params = {
  email: 'test1@email.com',
  password: '123',
};

const TestScreen = () => {
  const dispatch = useAppDispatch();

  const res = useAppSelector((state: RootState) => state.signIn);

  const onPress = useCallback(async () => {
    dispatch(signInRequest(params));
  }, [dispatch]);

  const onPress2 = useCallback(() => {
    console.log(res);
  }, [res]);

  return (
    <SafeAreaView>
      <Text onPress={onPress} style={{fontSize: 30, color: 'pink'}}>
        request
      </Text>

      <Text
        onPress={onPress2}
        style={{fontSize: 30, color: 'skyblue', marginTop: 30}}>
        response
      </Text>
    </SafeAreaView>
  );
};

export default memo(TestScreen);
