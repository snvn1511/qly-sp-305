import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListProduct from './comp/ListProduct';
import AddProduct from './comp/AddProduct';

const StackMain = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      <StackMain.Navigator initialRouteName='Home'>
        <StackMain.Screen name='Home' component={ListProduct} options={{ title: 'Danh sách SP'}} />
        <StackMain.Screen name='ManHinhThem' component={AddProduct} options={{ title: 'Thêm SP' }} />
        {/* viết tiếp các màn hình khác vào đây */}
      </StackMain.Navigator>
    </NavigationContainer> 
  );

}

export default App;