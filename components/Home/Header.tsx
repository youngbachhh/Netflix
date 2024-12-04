import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
	const { user } = useUser();

	return (
		<View
			style={{
				padding: 20,
				paddingTop: 40,
				backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
				}}
			>
				{/* <Image
					source={{ uri: user?.imageUrl }}
					style={{
						width: 45,
						height: 45,
						borderRadius: 99,
					}}
				/> */}
				<View
					style={{
						backgroundColor: "red",
						width: 50,
						height: 50,
						borderRadius: 99,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							fontFamily: "kanit",
							fontSize: 24,
							color: "#fff",
						}}
					>
						B
					</Text>
				</View>
				<View>
					<Text
						style={{
							color: "#fff",
						}}
					>
						Welcome BachNV
					</Text>
					<Text>{user?.fullName}</Text>
				</View>
			</View>

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
					paddingLeft: 20,
					gap: 10,
				}}
			>
				<Ionicons name="search" size={24} color={Colors.PRIMARY} />
				<TextInput style={{ fontFamily: "kanit" }} placeholder="Search"></TextInput>
			</View>
		</View>
	);
}
