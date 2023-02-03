import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

const AddProduct = () => {
    const [tenSP, settenSP] = useState('');
    const [gia, setgia] = useState(0);

    const SaveProduct = () => {
        // tạo đối tượng dữ liệu
        let objSP = { name: tenSP, price: gia };
        let url_api = 'https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham';

        fetch(url_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objSP)
        })
            .then((res) => {
                if (res.status == 201)
                    alert("Thêm thành công")
            })
            .catch((ex) => {
                console.log(ex);
            });

    }


    return (
        <View>
            <Text>Thêm SP</Text>
            <TextInput placeholder="Tên SP"
                onChangeText={(txt) => { settenSP(txt) }} />
            <TextInput placeholder="Giá tiền"
                onChangeText={(txt) => { setgia(txt) }}
            />
            <Button title="Save" onPress={SaveProduct} />



        </View>

    );
}
export default AddProduct;