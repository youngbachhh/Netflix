import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";


export default function BusinessListCard({ business }) {
  const router = useRouter();

	return (
		<TouchableOpacity
			style={{
				padding: 10,
				borderRadius: 15,
				backgroundColor: "#fff",
				display: "flex",
				flexDirection: "row",
			}}
      onPress={() => router.push(`/businessdetail/${business.id}`)}
		>
			<Image
				source={{ uri: business.imageUrl }}
				style={{
					width: 150,
					height: 150,
					borderRadius: 15,
					marginRight: 16,
				}}
			/>
			<View
				style={{
					flex: 1,
					gap: 7,
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontFamily: "kanit-bold",
					}}
				>
					{business.name}
				</Text>
				<Text
					style={{
						fontSize: 15,
						color: Colors.GRAY,
						fontFamily: "kanit",
					}}
				>
					{business.address}
				</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Image
						source={require("./../../assets/images/star.png")}
						style={{
							width: 15,
							height: 15,
							// tintColor: Colors.PRIMARY,
						}}
					/>
					<Text
						style={{
							fontFamily: "kanit-medium",
							fontSize: 13,
							color: Colors.PRIMARY,
							marginLeft: 8,
						}}
					>
						4.5
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
