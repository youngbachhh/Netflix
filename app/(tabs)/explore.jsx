import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Category from "@/components/Home/Category";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import ExploreBusinessList from "@/components/Explore/ExploreBusinessList";

export default function explore() {
	const [businessList, setBusinessList] = useState([]);

	// useEffect(() => {
	// 	getBusinessListByCategory("Food");
	// }, []);

	const getBusinessListByCategory = async (category) => {
		setBusinessList([]);
		const q = query(
			collection(db, "Business"),
			where("category", "==", category)
		);
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
		});
	};

	return (
		<View
			style={{
				padding: 20,
			}}
		>
			<Text
				style={{
					fontSize: 24,
					fontFamily: "kanit-bold",
				}}
			>
				Explore More
			</Text>

			{/* Search Bar */}
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "#fff",
					padding: 10,
					borderRadius: 10,
					marginTop: 20,
					gap: 10,
					borderWidth: 1,
					borderColor: Colors.PRIMARY,
				}}
			>
				<Ionicons name="search" size={24} color={Colors.PRIMARY} />
				<TextInput
					style={{ fontFamily: "kanit" }}
					placeholder="Search"
				></TextInput>
			</View>

			{/* Category */}
			<Category
				explore={true}
				onCategorySelect={(item) => {
					getBusinessListByCategory(item);
				}}
			/>

			{/* Business List */}
			<ExploreBusinessList businessList={businessList} />
		</View>
	);
}
