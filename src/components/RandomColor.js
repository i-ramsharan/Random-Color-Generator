import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, FlatList } from "react-native";


const RandomColorr = () => {

    const [newcol, setnewcol] = useState([]);
    const randomnum = () => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }
    return (
        <View>
            <TouchableOpacity
                style={styles.btnstyle}
                onPress={() => {
                    
                    setnewcol([...newcol, randomnum()]);
                   

                }}
            >
                <Text style={styles.txtstyle}>Generate Ramdom Color</Text>
            </TouchableOpacity>
            <FlatList
                data={newcol}
                style={styles.fltStyle}
                renderItem={(element) => {
                    return (
                        <View style={styles.imgContainer}>
                            <Text style={{
                                textAlign:"center",
                                paddingTop:25,
                                backgroundColor: `${element.item}`,
                                marginTop: 40,
                                width: 200,
                                height: 80,
                                color: "white",
                                fontSize: 25,
                                borderRadius: 5,}
                            }>{element.item}</Text>
                        </View>
                    );
                }}

            />
               <TouchableOpacity
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "blue",
                    height: 60,
                }}
                onPress={() => {
                   
                    setnewcol([]);

                }}
            >
                <Text style={styles.txtstyle}>CLEAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnstyle: {
        marginTop: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        height: 60,
    },
    txtstyle: {
        color: "white",
        textTransform: "uppercase",
        fontSize: 20,
    },
    imgContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      
    },
    fltStyle:{
        height:"70%",
    }
   

})

export default RandomColorr;