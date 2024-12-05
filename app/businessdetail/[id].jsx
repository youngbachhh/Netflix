import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function BusinessDetail() {
	const navigation = useNavigation();
	const { id } = useLocalSearchParams();
	const [business, setBusiness] = useState({});

	useEffect(() => {
		getBusinessDetail();
	}, []);

	const getBusinessDetail = async () => {
		try {
      setBusiness({});
			const doc = await getDoc(doc(db, "Business", id));
			setBusiness((prev) => ({ ...prev, ...doc.data() }));
		} catch (error) {
			console.error("Error fetching Business detail: ", error);
		}
	};

	return (
		<View>
			<Text>BusinessDetail</Text>
		</View>
	);
}
