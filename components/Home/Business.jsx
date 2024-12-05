import { View, Text, FlatList } from "react-native";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { collection, limit, query, getDocs } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import BusinessCard from "@/components/Home/BusinessCard";

export default function Business() {
	const [businessList, setBusinessList] = useState([]);

	useEffect(() => {
		getBusinessList();
	}, []);

	const getBusinessList = async () => {
		try {
			setBusinessList([]);
			const q = query(collection(db, "Business"), limit(10));
			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				setBusinessList((prev) => [...prev, doc.data()]);
			});
		} catch (error) {
			console.error("Error fetching Business list: ", error);
		}
	};

	return (
		<View style={{ paddingTop: 20 }}>
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
					Popular
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

			<FlatList
				style={{ paddingTop: 10 }}
				data={businessList}
				horizontal
				renderItem={({ item }) => <BusinessCard business={item} />}
			/>
		</View>
	);
}
