import { View, Text } from "react-native";
import React from "react";
import UserIntro from "@/components/Profile/UserIntro";

export default function profile() {
	return (
		<View
			style={{
				padding: 20,
			}}
		>
			<Text
				style={{
					fontSize: 40,
					fontFamily: "kanit-bold",
				}}
			>
				profile
			</Text>

			{/* User Info */}
      <UserIntro />

			{/* Menu List  */}
		</View>
	);
}
