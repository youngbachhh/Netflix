import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import { Colors } from "@/constants/Colors";
import Intro from "@/components/BusinessDetail/Intro";
import ActionButton from "@/components/BusinessDetail/ActionButton";
import About from "@/components/BusinessDetail/About";
import Reviews from "@/components/BusinessDetail/Reviews";

export default function BusinessDetail() {
	const navigation = useNavigation();
	const { id } = useLocalSearchParams();
	const [business, setBusiness] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getBusinessDetail();
		// navigation.setOptions({
		//   headerShown: true,
		//   title: business.name,
		// });
	}, []);

	const getBusinessDetail = async () => {
		try {
			setBusiness({});
			setLoading(true);
			const docRef = doc(db, "Business", id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setBusiness({ id: docSnap.id, ...docSnap.data() });
				setLoading(false);
			} else {
				console.log("No such document!");
				setLoading(false);
			}
		} catch (error) {
			console.error("Error fetching Business detail: ", error);
		}
	};

	return (
		<ScrollView>
			{loading ? (
				<ActivityIndicator
					size={"large"}
					color={Colors.PRIMARY}
					style={{
						marginTop: "60%",
					}}
				/>
			) : (
				<View>
					{/* Intro */}
					<Intro business={business} />

					{/* Action Button */}
					<ActionButton business={business} />

					{/* About Section */}
					<About business={business} />

					{/* Review Section */}
					<Reviews business={business} />
				</View>
			)}
		</ScrollView>
	);
}
