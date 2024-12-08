import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Intro({ business }) {
	const router = useRouter();

	return (
		<View>
			<View
				style={{
					position: "absolute",
					zIndex: 10,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
					padding: 20,
				}}
			>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons
						name="arrow-back-circle"
						size={40}
						color="white"
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="heart-outline" size={40} color="white" />
				</TouchableOpacity>
			</View>
			<Image
				source={{ uri: business?.imageUrl }}
				style={{ width: "100%", height: 340 }}
			/>

			<View
				style={{
					padding: 20,
					backgroundColor: "#fff",
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
					marginTop: -30,
				}}
			>
				<Text
					style={{
						fontSize: 24,
						fontFamily: "kanit-bold",
					}}
				>
					{business.name}
				</Text>
				<Text
					style={{
						fontSize: 12,
						fontFamily: "kanit",
					}}
				>
					{business.address}
				</Text>
			</View>
		</View>
	);
}
