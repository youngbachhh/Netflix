import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import CategoryItem from "@/components/Home/CategoryItem";
import { useRouter } from "expo-router";

export default function Category() {
	const [categoryList, setCategoryList] = useState([]);
  const router = useRouter();

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
				paddingTop: 20,
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
				style={{ marginRight: 10, paddingTop: 10 }}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<CategoryItem
						onCategoryPress={(item) => {
							console.log(item);
              router.push(`/businesslist/${item.name}`);
						}}
						category={item}
					/>
				)}
			></FlatList>
		</View>
	);
}
