import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function BusinessListCard({ business }) {
  const router = useRouter();

	return (
		<TouchableOpacity
			onPress={() => router.push(`/businessdetail/${business.id}`)}
			style={{
				backgroundColor: "#fff",
				marginTop: 15,
				borderRadiusBottomLeft: 10,
				borderRadiusBottomRight: 10,
			}}
		>
			<Image
				source={{ uri: business?.imageUrl }}
				style={{
					width: "100%",
					height: 160,
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
				}}
			/>

			<View
				style={{
					padding: 10,
				}}
			>
				<Text
					style={{
						fontFamily: "kanit-bold",
						fontSize: 16,
					}}
				>
					{business?.name}
				</Text>
				<Text
					style={{
						fontFamily: "kanit",
						fontSize: 14,
						color: Colors.GRAY,
					}}
				>
					{business?.address}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
