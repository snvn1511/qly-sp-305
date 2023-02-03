import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import st from "./styles";

const ListProduct = (props) => {
    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]);
    // viết hàm load sp
    const getListPro = async () => {
        let url_api = 'https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham';

        try {
            const response = await fetch(url_api); // load dữ liệu

            const json = await response.json(); // chuyển dữ liệu thành json

            setdssp(json);// đổ dữ liệu vào state

        } catch (error) {
            console.error(error);
        } finally {
            // kết thúc quá trình load dữ liệu, kể cả có lỗi cũng gọi vào lệnh này
            setisLoading(false); // trạng thái không còn load nữa
        }
    }

    const renderProduct = ({ item }) => {
        return (
            <View style={st.itemPro}>
                <Text>Tên SP: {item.name} -- Giá {item.price} </Text>
            </View>
        );
    }


    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // cập nhật giao diện ở đây
            getListPro();
        });

        return unsubscribe;
    }, [props.navigation]);


    return (
        <View style={st.khungDSSP}>
            <Button title="Thêm SP"
                onPress={() => { props.navigation.navigate('ManHinhThem') }} />

            <Text>Danh sách sản phẩm</Text>

            {
                (isLoading) ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList data={dssp}
                        keyExtractor={(item_sp) => { return item_sp.id }}
                        renderItem={renderProduct} />
                )
            }






        </View>

    );
}
export default ListProduct;