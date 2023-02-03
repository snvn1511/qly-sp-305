import { View, Text, Button } from "react-native";
import st from "./styles";

const ListProduct = (props)=>{
    return (
        <View  style={st.khungDSSP}>

            <Button title="Thêm SP"  
            onPress={() => { props.navigation.navigate('ManHinhThem') }}/>

            <Text>Danh sách sản phẩm</Text>
        </View>

    );
}
export default ListProduct;