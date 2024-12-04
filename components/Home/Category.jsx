import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import CategoryItem from "@/components/Home/CategoryItem";

export default function Category() {
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		getCategoryList();
	}, []);

	const getCategoryList = async () => {
		try {
			setCategoryList([]);
			const q = query(collection(db, "Category"));
			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				setCategoryList((prev) => [...prev, doc.data()]);
			});
		} catch (error) {
			console.error("Error fetching Category list: ", error);
		}
	};

	return (
		<View
			style={{
				padding: 20,
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontFamily: "kanit-bold",
					}}
				>
					Category
				</Text>
				<Text
					style={{
						color: Colors.PRIMARY,
						fontFamily: "kanit-medium",
						paddingTop: 8,
					}}
				>
					View all
				</Text>
			</View>

			{/* Category list here */}
			<FlatList
				data={categoryList}
				horizontal
				style={{ marginRight: 10, marginTop: 20 }}
				keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => <CategoryItem category={item} />}
			></FlatList>
		</View>
	);
}
