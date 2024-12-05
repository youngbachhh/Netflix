import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessListCard/BusinessListCard";
import { Colors } from "@/constants/Colors";

export default function BusinessListByCategory() {
	const navigation = useNavigation();
	const { category } = useLocalSearchParams();
	const [businessList, setBusinessList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getBusinessListByCategory();
	}, [category]);

	const getBusinessListByCategory = async () => {
		setLoading(true);
		setBusinessList([]);

		const q = query(
			collection(db, "Business"),
			where("category", "==", category),
			limit(10)
		);

		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			setBusinessList((prev) => [
				...prev,
				{
					id: doc?.id,
					...doc.data(),
				},
			]);
			setLoading(false);
		});
	};

	useEffect(() => {
		navigation.setOptions({
			headerShown: true,
			title: category,
		});
	}, []);

	return (
		<View
			style={{
				padding: 20,
			}}
		>
			{businessList.length > 0 && loading === false ? (
				<FlatList
					data={businessList}
					onRefresh={getBusinessListByCategory}
					refreshing={loading}
					renderItem={({ item }) => {
						return <BusinessListCard business={item} />;
					}}
					keyExtractor={(item) => item.id}
				/>
			) : loading ? (
				<ActivityIndicator
					style={{
						marginTop: "60%",
					}}
					size={"large"}
					color={Colors.PRIMARY}
				/>
			) : (
				<Text
					style={{
						fontSize: 20,
						fontFamily: "kanit-bold",
						textAlign: "center",
						marginTop: 20,
						color: Colors.GRAY,
					}}
				>
					No business found
				</Text>
			)}
		</View>
	);
}
