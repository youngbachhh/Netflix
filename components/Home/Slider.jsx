import React, { useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import { useState } from "react";

export default function Slider() {
	const [sliderList, setSliderList] = useState([]);

	useEffect(() => {
		getSliderList();
	}, []);

	const getSliderList = async () => {
		try {
			const q = query(collection(db, "Slider"));
			const querySnapshot = await getDocs(q);
			setSliderList([]);

			querySnapshot.forEach((doc) => {
				setSliderList((prev) => [...prev, doc.data()]);
			});
		} catch (error) {
			console.error("Error fetching Slider list: ", error);
		}
	};

	return (
		<View>
			<Text
				style={{
					fontFamily: "kanit-bold",
					fontSize: 20,
					paddingLeft: 20,
					paddingTop: 20,
				}}
			>
				#Special for you
			</Text>

			<FlatList
				data={sliderList}
				horizontal
				style={{ padding: 20 }}
				renderItem={({ item }) => (
					<Image
						source={{ uri: item.imageUrl }}
						style={{
							width: 300,
							height: 160,
							borderRadius: 15,
							marginRight: 15,
						}}
					/>
				)}
				keyExtractor={(item) => item.id}
			></FlatList>
		</View>
	);
}
